import styles from './index.module.css'

const Header = ({show, setShow}) => {
    return (
        <>
            <div className={styles['header']}>

                <div className={styles['settings']}/>

                <div className={styles['t3mplate']}>
                    T3mplate
                </div>

                <div className={styles['options']} onClick={() => {
                    setShow(!show)
                }}/>
            </div>
                
        </>
    )
}

export default Header;