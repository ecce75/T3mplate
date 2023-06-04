import { useState } from "react";
import styles from './index.module.css'

const me = "Jane Doe"

const Messages = ({messages}) => {
    
    return (
        <div className={styles['messages']}>
            {messages.map((elem, i) => {
                // console.log(elem.from, me, elem.from == me)
                return (
                    <div key={i} className={(elem.from == me ? styles["sent-message"] : styles["from-message"])}>
                        <div className={styles['sender']}>
                            {elem.from}
                        </div>
                        <div className={styles['message']}>
                            {elem.message}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Messages;