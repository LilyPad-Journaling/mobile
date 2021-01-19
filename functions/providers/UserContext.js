import React from 'react';
import { useState, useEffect, createContext, useMemo } from 'react';
import { AsyncStorage } from 'react-native';
import * as fb from 'firebase';
import 'firebase/firestore';

import { firebase } from '../util/firebase';

const db = firebase.firestore();
const getTimestamp = () => fb.firestore.FieldValue.serverTimestamp();

export const useUser = () => {
    // store userID
    const [userID, setUserID] = useState('');
    // stores user object
    const [user, setUser] = useState({});
    // storing user fields for sign in sequence
    const [newUser, setNewUser] = useState({});
    const [journals, setJournals] = useState([]);
    const [moods, setMoods] = useState([]);
    const [awards, setAwards] = useState([]);
    const [authCode, setAuthCode] = useState("hello");

    // Gets userID from phone's storage (we just use hardcoded rn) and calls getUser, getJournals, getMoods
    useEffect(() => {
        AsyncStorage.getItem('userID', (err, id) => {
            setUserID(id);
            getUser(id);
            getJournals(id);
            getMoods(id);
            getAwards(id);
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
                        ? journal.timeCreated.toDate()
                        : new Date(),
                    lastUpdated: journal.lastUpdated
                        ? journal.lastUpdated.toDate()
                        : new Date()
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
                            ? mood.timeCreated.toDate()
                            : new Date()
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
                    // New date() just for now
                    lastUpdated: new Date(),
                    timeCreated: new Date()
                });
            });
    };

    // Creates mood document in userID's mood collection on firebase (can use hardcoded data to test!)
    const createMood = (id) => {
        db.collection('users')
            .doc(id)
            .collection('moods')
            .add({
                metrics: {
                    mood: 5,
                    anxiety: 9,
                    energy: 6,
                    stress: 8.3
                },
                timeCreated: timeStamp.now()
            });
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
        ]
    );

    return (
        <UserContext.Provider value={userProvider}>
            {children}
        </UserContext.Provider>
    );
};
