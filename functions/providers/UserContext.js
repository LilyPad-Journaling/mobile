import { useState, useEffect, createContext } from "react";
import { AsyncStorage } from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyC67DvT4kWLEn6QTi4hFz3rkjghqfsGOcg",
  authDomain: "hodas-f14c5.firebaseapp.com",
  databaseURL: "https://hodas-f14c5.firebaseio.com",
  projectId: "hodas-f14c5",
  storageBucket: "hodas-f14c5.appspot.com",
  messagingSenderId: "674328465447",
  appId: "1:674328465447:web:9a1d3d94857b0ce35fbe02",
  measurementId: "G-P95D61LDBX",
};

firebase.initializeApp(config);

const db = firebase.firestore();

export const useUser = () => {
  // store userID
  const [userID, setUserID] = useState("");
  // stores user object
  const [user, setUser] = useState({});
  // storing user fields for sign in sequence
  const [newUser, setNewUser] = useState({});
  const [journals, setJournals] = useState([]);
  const [moods, setMoods] = useState([]);

  // Gets userID from phone's storage (we just use hardcoded rn) and calls getUser, getJournals, getMoods
  useEffect(() => {
    AsyncStorage.getItem("userID", (err, asyncUserID) => {
      let id = "0E1qiweaBV5eId5Gp7lf";
      if (asyncUserID !== null && asyncUserID !== "") {
        id = asyncUserID;
      }
      setUserID(id);
      getUser(id);
      getJournals(id);
      getMoods(id);
    });
  }, []);

 useEffect(() => {
   console.log(newUser);
 }, [newUser]);

  // Gets user by id
  const getUser = (id) => {
    db.collection("users")
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
    db.collection("users")
      .doc(id)
      .collection("journals")
      .get()
      .then((querySnapshot) => {
        let journalsData = [];
        querySnapshot.forEach((snapshot) => {
          journalsData.push(snapshot.data());
        });
        setJournals(
          journalsData.map((journal) => ({
            ...journal,
            timeCreated: journal.timeCreated.toDate(),
            lastUpdated: journal.lastUpdated.toDate(),
          }))
        );
      });
  };

  // Gets moods by user id
  const getMoods = (id) => {
    db.collection("users")
      .doc(id)
      .collection("moods")
      .get()
      .then((querySnapshot) => {
        let moodsData = [];
        querySnapshot.forEach((snapshot) => {
          moodsData.push(snapshot.data());
        });
        setMoods(
          moodsData.map((mood) => ({
            ...mood,
            timeCreated: mood.timeCreated.toDate(),
          }))
        );
      });
  };

  // Creates user document in users collection on firebase (can use hardcoded data to test!)
  const createUser = () => {
    console.log("create user");
    const userData = {
      ...newUser,
      pin: 1234,
      color: "default",
      metrics: ["mood", "anxiety", "energy", "stress"]
    };
    console.log(userData);
    db.collection("users")
    .add(userData)
    .then(doc => {
      setUserID(doc.id);
      AsyncStorage.setItem("userID", doc.id);
      setUser(userData);
    });
    // setUser(userData);
    // AsyncStorage.setItem("userID", userIDVar);
  };

  // Creates journal document in userID's journal collection on firebase (can use hardcoded data to test!)
  const createJournal = (id) => {
    db.collection("users")
      .doc(id)
      .collection("journals")
      .add({
        title: "lets try this",
        body: "I am trying something new. It is a little tricky. Fingers crossed I don't fail.",
        private: true,
        starred: true,
        lastUpdated: timeStamp.now(),
        timeCreated: timeStamp.now()
      });

    console.log("Hello");
  };

  // Creates mood document in userID's mood collection on firebase (can use hardcoded data to test!)
  const createMood = (id) => {
    db.collection("users")
      .doc(id)
      .collection("moods")
      .add({
        metrics: {
          mood: 5,
          anxiety: 9,
          energy: 6,
          stress: 8.3
        },
        timeCreated: timeStamp.now()
      });
    console.log("Hello");
  };

  // Updates user object by userID with new partial object, new fields can look like { color: "red", phoneNumber: "newnumberlol" }
  const updateUser = (id, newFields) => {
    db.collection("users")
      .doc(id)
      .update({
        // not quite sure how to access dictionary then update
      })
    console.log("Hello");
  };

  // Updates journal object by userID and journalID with new partial object, new fields can look like { private: true, body: "something different" }
  const updateJournal = (userID, journalID, newFields) => {
    bd.collection("users")
      .doc(userID)
      .collection("journals")
      .doc(journalID)
      .update({
        // same issue with updateUser
      })
    console.log("Hello");
  };

  return {
    user,
    journals,
    moods,
    newUser,
    setNewUser,
    updateUser,
    createUser,
  };
};

export const UserContext = createContext("");
