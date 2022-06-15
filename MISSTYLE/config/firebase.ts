import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {API, AUTH, ID, STORAGE, SENDER_ID, APP_ID} from "@env"

const firebaseConfig = {
    apiKey: API,
    authDomain: AUTH,
    projectId: ID,
    storageBucket: STORAGE,
    messagingSenderId: SENDER_ID,
    appId: APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);