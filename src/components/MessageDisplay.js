import { useEffect, useState } from "react";
import { registerMessageListener } from "../services/messagingServices";
import './MessageDisplay.css';

function formatTime(time) {
    const dateTime = new Date(time);
    return dateTime.toLocaleDateString() + " @ " + dateTime.toLocaleTimeString();
}

function parseMessages(rawMsgs) {
    if (rawMsgs) {
        const parsedMsgs = [];
        Object.keys(rawMsgs).forEach(key => {
            const msgInfo = rawMsgs[key];
            parsedMsgs.push(formatTime(msgInfo['posted']) + " | " + msgInfo['author'] + ": " + msgInfo['text']);
        });
        return parsedMsgs;
    }
}

export default function MessageDisplay() {
    const [msgs, setMsgs] = useState('');

    useEffect(() => registerMessageListener(setMsgs), []);

    const parsedMsgs = parseMessages(msgs);

    return (
        <div className="MessageDisplay">
            {parsedMsgs ?
                <ul>
                    {parsedMsgs.map(parsedMsg => <li key={parsedMsg}>{parsedMsg}</li>)}
                </ul>
                :
                <p>Loading Messages...</p>}
        </div>
    )
}