import { useState } from 'react';
import './UserSetupInput.css';

export default function UserSetupInput({ setUser }) {
    const [input, setInput] = useState('');

    return (
        <div className="UserSetup">
            <label>Enter your username: </label>
            <input type="text" onChange={(e) => setInput(e.target.value)} />
            <input type="submit" onClick={() => setUser(input)} />
        </div>
    )
}