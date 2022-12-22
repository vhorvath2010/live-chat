import { child, onValue, push, ref, update } from "firebase/database";
import { database } from "./firebase";

const db = database;
const messagesRef = ref(db, '/messages');

// Register messaging listeners
export function registerMessageListener(setMessages) {
    onValue(messagesRef, (snapshot) => {
        const messages = snapshot.val();
        setMessages(messages);
    })
}

// Write a message to the application
export function writeMessage(user, msg) {
    // Setup msg data
    const msgData = {
        author: user,
        text: msg,
        posted: Date.now()
    }

    // Create new message location and get key
    const newMsgKey = push(child(ref(db), 'messages')).key;

    // Set an update for that key with given message info
    const updates = {};
    updates['/messages/' + newMsgKey] = msgData;

    // Send updates to db
    return update(ref(db), updates);
}