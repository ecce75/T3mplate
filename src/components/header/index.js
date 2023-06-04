import styles from './index.module.css'

const Header = ({show, setShow, route}) => {
    return (
        <>
            <div className={styles['header']}>

                <div className={styles['settings']}/>

                <div className={styles['t3mplate']}>
                    {route.charAt(0).toUpperCase() + route.slice(1)}
                </div>

                <div className={styles['options']} onClick={() => {
                    setShow(!show)
                }}/>
            </div>
                
        </>
    )
}

export default Header;