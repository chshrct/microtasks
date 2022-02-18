import React, {MouseEvent, useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {ButtonInp} from "./components/ButtonInp";

function App() {
    let [messages, setMessages] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
        ]
    )
    const [message,setMessage] = useState('')
    // const addMessage = (str:string) => {
    //     setMessages([{message:str},...messages])
    // }

    const addMessage = () => {
        setMessages([{message:message},...messages])
        setMessage('')
    }

    const updateMessage = (msg:string) => {
        setMessage(msg)
    }


    return (
        <div className="App">
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input updateMessage={updateMessage} value={message}/>
            <ButtonInp name={'+'} addMessage={addMessage}/>
            {messages.map(
                (el, index) => <div key={index}>{el.message}</div>
            )}
        </div>
    );
}

export default App;
