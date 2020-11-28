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
  const [userID, setUserID] = useState("");
  const [user, setUser] = useState({});
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
    setUser(newUser);
  };

  // Creates journal document in userID's journal collection on firebase (can use hardcoded data to test!)
  const createJournal = (id) => {
    console.log("Hello");
  };

  // Creates mood document in userID's mood collection on firebase (can use hardcoded data to test!)
  const createMood = (id) => {
    console.log("Hello");
  };

  // Updates user object by userID with new partial object, new fields can look like { color: "red", phoneNumber: "newnumberlol" }
  const updateUser = (id, newFields) => {
    console.log("Hello");
  };

  // Updates journal object by userID and journalID with new partial object, new fields can look like { private: true, body: "something different" }
  const updateJournal = (userID, journalID, newFields) => {
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
