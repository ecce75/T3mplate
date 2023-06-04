import Exercise from "../exercise"
import styles from './index.module.css'


const Exercises = () => {
    return (
        <div className={styles['exercises']}>
            <Exercise>
                exercise name
            </Exercise>
            <Exercise>
                exercise name
            </Exercise>
            <Exercise>
                exercise name
            </Exercise>
        </div>
    )
}

export default Exercises;