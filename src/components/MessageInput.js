import { useState } from "react"
import { writeMessage } from "../services/messagingServices";

export default function MessageInput({ user }) {
    const [msg, setMsg] = useState('');

    const submitMsg = () => {
        if (!msg) {
            alert('Please enter a message!');
            return;
        }

        if (!user) {
            alert('You are not logged in! Please refresh.');
            return;
        }

        writeMessage(user, msg);
        setMsg('');
    }

    return (
        <div className="MessageInput">
            <label>{user}, Enter your message here: </label>
            <input type={'text'} value={msg} onChange={(e) => setMsg(e.target.value)} />
            <input type={'button'} value={'Send'} onClick={submitMsg} />
        </div>
    )
}