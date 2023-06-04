import styles from './index.module.css'

const Exercise = ({children}) => {
    return (
        <div className={styles['exercise']}>
            <div className={styles['name']}>
                {children}
            </div>
            <div className={styles['video']}>
                video example
            </div>
        </div>
    )
}

export default Exercise;