import { useState } from 'react';
import styles from './index.module.css'
import Messages from '../messages';

const me = "Jane Doe"

const Chatbox = () => {
    
    const [messages, setMessages] = useState([
        {
            from: "John Doe",
            message: "Hey! I saw your progress! Good job!"
        },
        {
            from: "Jane Doe",
            message: "Thanks!!!"
        }
    ]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessages([...messages, {from: me, message: event.target.message.value}, {from: "John Doe", message: "Nice!"}])

        event.target.message.value = ""
        
    }

    return (
        <>
            <Messages messages={messages}/>
            <div className={styles['chatbox']}></div>
            {/* <div className={styles['message-box']}> */}
                
                <form onSubmit={handleSubmit}>
                    <input 
                        type='text' 
                        name='message'
                        placeholder='write your message'
                        className={styles['message-box']} />
                </form>
            {/* </div> */}
            <div className={styles['message-send']}></div>
        </>
    )
}

export default Chatbox;