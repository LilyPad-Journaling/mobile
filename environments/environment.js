import Constants from "expo-constants";

const ENV = {
    dev: {
        apiUrl: "/",
        firebaseConfig: {
            apiKey: "",
            authDomain: "",
            databaseURL: "",
            projectId: "",
            storageBucket: "",
            messagingSenderId: "",
            appId: "",
            measurementId: ""
        }
    },
    prod: {
        apiUrl: "/",
        firebaseConfig: {
            apiKey: "",
            authDomain: "",
            databaseURL: "",
            projectId: "",
            storageBucket: "",
            messagingSenderId: "",
            appId: "",
            measurementId: ""
        }
    }
};

export const getEnvVars = (env = Constants.manifest.releaseChannel) => {
    if (__DEV__) {
        console.log("Running in development mode.")
        return ENV.dev;
    } else {
        console.log("Running in production mode.")
        return ENV.prod;
    }
};
