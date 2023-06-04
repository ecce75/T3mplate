import styles from './index.module.css'


const Button = ({children, className}) => {
    return (
        <div className={styles['button'] + " " + className}>
            <div className={styles['text']}>
                {children}
            </div>
        </div>
    )
}


export default Button;