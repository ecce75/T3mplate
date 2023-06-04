import { isLandscape } from '../../utils/screen';
import Button from '../button';
import styles from './index.module.css'

const Buttons = ({show}) => {
    console.log(show);
    return (
        <div 
            style={!show ? (isLandscape() ? {} : {left: 100 + "vh"}): {}}
            className={styles['buttons'] }>
            <Button className={styles['first']}>
                Home
            </Button>
            <Button>
                Calibrate
            </Button>
            <Button>
                Exercises
            </Button>
            <Button>
                Consult
            </Button>
            <Button className={styles['last']}>
                Stats
            </Button>

            {/* <div className={styles['consult']}>

                <div className={styles['Consult']}>
                    Consult
                </div>
            </div>
            <div className={styles['exercise']}>

                <div className={styles['Exercise']}>
                    Exercise
                </div>
                <div className={styles['button']}/>
            </div>
            <div className={styles['calibrate']}>

                <div className={styles['Calibrate']}>
                    Calibrate
                </div>
                <div className={styles['button']}/>
            </div>
            <div className={styles['home']}>

                <div className={styles['Home']}>
                    Home
                </div>
                <div className={styles['button']}/>
            </div> */}
        </div>
    )
}


export default Buttons;