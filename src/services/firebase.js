import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyASjpTskwt0_P89aHQgwVhXzpXVFJQNbNs",
    authDomain: "live-chat-25b69.firebaseapp.com",
    databaseURL: "https://live-chat-25b69-default-rtdb.firebaseio.com",
    projectId: "live-chat-25b69",
    storageBucket: "live-chat-25b69.appspot.com",
    messagingSenderId: "646838819955",
    appId: "1:646838819955:web:b022ae54d78aa3192c5e06"
};

// Initialize Firebase database
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);