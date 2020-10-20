import { observable, computed, action } from "mobx";
import { AsyncStorage } from 'react-native';

import firebase from "firebase";

export default class UserStore {
    @observable uid = '';
    @observable name = '';
    @observable phoneNumber = '';

    constructor() {
        this.userHasOnboardedBefore()
    }

    @computed
    get courseIds() {
        return this.courses.map(course => course.key)
    }

    @action
    manuallyResetState() {
        this.uid = '';
        this.name = '';
        this.phoneNumber = '';
    }

    @action
    async fetchUserDetails() {
        let uid = await AsyncStorage.getItem('userUid')
        if (uid == null) return
        const db = firebase.firestore()
        this.uid = uid
        db.collection('users')
            .doc(this.uid)
            .get()
            .then((doc: firebase.firestore.DocumentSnapshot) => {
                if (doc.exists) {
                    const userData = doc.data();

                    if (userData['name']) {
                        this.name = userData['name']
                    }
                } else {
                    throw "Error fetching user document (Document might not exist)"
                }
            });
    }

    @action
    userHasOnboardedBefore = async () => {
        const hasOnboarded = await AsyncStorage.getItem('hasOnboarded')
        if (hasOnboarded !== null) {
            this.shouldShowOnbaording = !JSON.parse(hasOnboarded)
        } else {
            this.shouldShowOnbaording = true
        }
    }

    @action
    completeOnboarding = async () => {
        await AsyncStorage.setItem('hasOnboarded', JSON.stringify(true));
        this.shouldShowOnbaording = false;
    }

    @action
    updateName(name) {
        firebase
            .firestore()
            .collection("users")
            .doc(this.uid)
            .update({
                name
            })
            .then(() => {
                this.name = name
            });
    }
}
