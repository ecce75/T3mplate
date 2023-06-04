import styles from './index.module.css'


const Button = ({onClick, children, className}) => {
    return (
        <div className={styles['button'] + " " + className}
            onClick={onClick}>
            <div className={styles['text']}>
                {children}
            </div>
        </div>
    )
}


export default Button;