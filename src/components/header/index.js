import styles from './index.module.css'

const Header = () => {
    return (
        <div>
            <div className={styles['rect-1']}/>
            <div className={styles['rect-2']}/>
            <div className={styles['rect-3']}/>
            <div className={styles['t3mplate']}>
                T3mplate
            </div>
        </div>
    )
}

export default Header;