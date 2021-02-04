import React from 'react';
import { useState, useEffect, createContext, useMemo } from 'react';
import { AsyncStorage } from 'react-native';
import * as fb from 'firebase';
import 'firebase/firestore';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

import { firebase } from '../util/firebase';

// 1EB: getTimestamp function creates timestamp upon creation of new journal entry, stores in firebase as timezone sensitive date in ISO 8601 format

const db = firebase.firestore();
const getTimestamp = () => dayjs().local().format();
//OLD: const getTimestamp = () => fb.firestore.FieldValue.serverTimestamp();

export const useUser = () => {
    // store userID
    const [userID, setUserID] = useState('none');
    // stores user object
    const [user, setUser] = useState({});
    // storing user fields for sign in sequence
    const [newUser, setNewUser] = useState({});
    const [journals, setJournals] = useState([]);
    const [moods, setMoods] = useState([]);
    const [awards, setAwards] = useState([]);
    const [pin, setPin] = useState({});
    const [authCode, setAuthCode] = useState("hello");

    // Gets userID from phone's storage (we just use hardcoded rn) and calls getUser, getJournals, getMoods
    useEffect(() => {
        AsyncStorage.getItem('userID', (err, id) => {
            id = id ? id : 'none';
            setUserID(id);
            getUser(id);
            getJournals(id);
            getMoods(id);
            getAwards(id);
            getPin(id);
        });
    }, []);

    // Gets user by id
    const getUser = (id) => {
        db.collection('users')
            .doc(id)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    const userData = doc.data();
                    setUser(userData);
                }
            });
    };

    // Gets user by id
    const doesUserExist = (number, callback) => {
        db.collection('users')
            .where('number', '==', number)
            .get()
            .then(async (querySnapshot) => {
                let users = []
                await querySnapshot.forEach(snapshot => {
                    users.push({ ...snapshot.data(), id: snapshot.id })
                })
                callback(users)
            })
            .catch(err => console.log("ERR", err))
    };

    // Gets journals by user id
    const getJournals = (id) => {
        db.collection('users')
            .doc(id)
            .collection('journals')
            .get()
            .then((querySnapshot) => {
                let journalsData = [];
                querySnapshot.forEach((snapshot) => {
                    journalsData.push({
                        id: snapshot.id,
                        ...snapshot.data()
                    });
                });
                let journalData = journalsData.map((journal) => ({
                    ...journal,
                    timeCreated: journal.timeCreated
                    // 2EB: Checks whether timestamp for timeCreated exists
                        ? journal.timeCreated
                        : getTimestamp(),
                    lastUpdated: journal.lastUpdated
                    // 3EB: Checks whether timestamp for lastUpdated exists
                        ? journal.lastUpdated
                        : getTimestamp()
                }));
                setJournals(
                    journalData.sort((a, b) => b.timeCreated - a.timeCreated)
                );
            });
    };

    // Gets moods by user id
    const getMoods = (id) => {
        db.collection('users')
            .doc(id)
            .collection('moods')
            .get()
            .then((querySnapshot) => {
                let moodsData = [];
                querySnapshot.forEach((snapshot) => {
                    moodsData.push(snapshot.data());
                });
                setMoods(
                    moodsData.map((mood) => ({
                        ...mood,
                        timeCreated: mood.timeCreated
                        // 4EB: Checks whether timestamp for timeCreated exists
                            ? mood.timeCreated
                            : getTimestamp()
                    }))
                );
            });
    };

    // Gets moods by user id
    const getAwards = (id) => {
        db.collection('users')
            .doc(id)
            .collection('awards')
            .get()
            .then((querySnapshot) => {
                let awardsData = [];
                querySnapshot.forEach((snapshot) => {
                    awardsData.push(snapshot.data());
                });
                setAwards(awardsData);
            });
    };

    // Creates user document in users collection on firebase (can use hardcoded data to test!)
    const createUser = () => {
        const userData = {
            ...newUser,
            pin: 1234,
            color: 'default',
            metrics: ['mood', 'anxiety', 'energy', 'stress']
        };
        db.collection('users')
            .add(userData)
            .then((doc) => {
                setUserID(doc.id);
                AsyncStorage.setItem('userID', doc.id);
                setUser(userData);
            });
    };

    const login = (data) => {
        setUserID(data.id);
        AsyncStorage.setItem('userID', data.id);
        setUser(data);
    }

    // Creates journal document in userID's journal collection on firebase (can use hardcoded data to test!)
    const createJournal = (id, callback) => {
        const data = {
            title: '',
            body: '',
            private: false,
            starred: false,
            lastUpdated: getTimestamp(),
            timeCreated: getTimestamp()
        };
        db.collection('users')
            .doc(id)
            .collection('journals')
            .add(data)
            .then((doc) => {
                callback({
                    id: doc.id,
                    ...data,
                    // OLD: New date() 
                    // 5EB: two constants store timestamp in firebase aqcuired from top function getTimestamp(), displayed in journal UI
                    lastUpdated: getTimestamp(),
                    timeCreated: getTimestamp()
                });
            });
    };

    // Creates mood document in userID's mood collection on firebase (can use hardcoded data to test!)
    const createMood = (userID, anxiety, energy, activity, stress, callback) => {
        db.collection('users')
            .doc(userID)
            .collection('moods')
            .add({
                activity, 
                anxiety, 
                energy, 
                stress,
                timeCreated: getTimestamp()
            }).then(() => {
                getMoods(userID)
                callback()
            })
    };

    // Updates user object by userID with new partial object, new fields can look like { color: "red", phoneNumber: "newnumberlol" }
    const updateUser = (id, newFields) => {
        db.collection('users').doc(id).update({
            // not quite sure how to access dictionary then update
        });
    };

    // Updates journal object by userID and journalID with new partial object, new fields can look like { private: true, body: "something different" }
    const updateJournal = (userID, journalID, title, body) => {
        db.collection('users')
            .doc(userID)
            .collection('journals')
            .doc(journalID)
            .update({
                title,
                body,
                lastUpdated: getTimestamp()
            })
            .then(() => {
                getJournals(userID);
            });
    };

    // const updateMood = (userID, moodID, activity, anxiety, energy, stress) => {
    //     db.collection('users')
    //         .doc(userID)
    //         .collection('moods')
    //         .doc(moodID)
    //         .update({
    //             activity, 
    //             anxiety, 
    //             energy, 
    //             stress
    //         })
    //         .then(() => {
    //             getMoods(userID);
    //         });
    // };

    const auth = (number) => {
        const url =
            'https://us-central1-hodas-f14c5.cloudfunctions.net/widgets/auth';

        let formData = JSON.stringify({ number: `+1${number}` });

        fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            },
            body: formData,
            method: 'POST'
        })
            .then((data) => {
                return data.json();
            })
            .then((res) => setAuthCode(res.code))
            .catch((error) => console.log(error));
    };

    //get the PIN tied to user
    const getPin = (id) => {
        db.collection('users')
            .doc(id)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    const userPin = doc.data();
                    setPin(userPin);
                }
            })
    };

    return {
        user,
        userID,
        journals,
        moods,
        newUser,
        setUser,
        setUserID,
        setNewUser,
        getUser,
        updateUser,
        createUser,
        updateJournal,
        createJournal,
        auth,
        authCode,
        awards,
        pin,
        doesUserExist,
        login,
        createMood
    };
};

export const UserContext = createContext('');

export const User = ({ children }) => {
    const {
        user,
        userID,
        journals,
        moods,
        newUser,
        setUser,
        setUserID,
        setNewUser,
        updateUser,
        createUser,
        updateJournal,
        createJournal,
        auth,
        authCode,
        awards,
        pin,
        doesUserExist,
        login,
        createMood
    } = useUser();

    const userProvider = useMemo(
        () => ({
            user,
            userID,
            journals,
            moods,
            newUser,
            setUser,
            setUserID,
            setNewUser,
            updateUser,
            createUser,
            updateJournal,
            createJournal,
            auth,
            authCode,
            awards,
            pin,
            doesUserExist,
            login,
            createMood
        }),
        [
            user,
            userID,
            journals,
            moods,
            newUser,
            setUser,
            setUserID,
            setNewUser,
            updateUser,
            createUser,
            updateJournal,
            createJournal,
            auth,
            authCode,
            awards,
            pin,
            doesUserExist,
            login,
            createMood
        ]
    );

    return (
        <UserContext.Provider value={userProvider}>
            {children}
        </UserContext.Provider>
    );
};
