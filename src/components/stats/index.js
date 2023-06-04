// import { Dimensions } from 'react-native/types';
import { isLandscape } from '../../utils/screen';
import styles from './index.module.css'
import React, { useEffect, useState } from 'react'

const Stats = () => {

    const [show, setShow] = useState(false);
    const handleKeyDown = (event) => {
        var name = event.key;
        console.log("AAAAAAAAAAAAAAAAAAA")
        if (name == 'e') {

            setShow(!show);
        }
        document.removeEventListener('keydown', handleKeyDown);

    }

    // useEffect(() => {

    document.addEventListener('keydown', handleKeyDown, false);
    // return () => {
    //     document.removeEventListener('keydown', handleKeyDown);
    // }
    // }, [])
    return (
        <div className={styles['information']} style={!show ? (isLandscape() ? { left: 100 + '%' } : { bottom: 0 + '%' }) : {}}>
            <p className={styles['text']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <p className={styles['text']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <p className={styles['text']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <p className={styles['text']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
        </div>
    )

}


export default Information;