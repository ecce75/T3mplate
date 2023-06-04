import { isLandscape } from '../../utils/screen';
import Button from '../button';
import styles from './index.module.css'

const Buttons = ({show, setRoute}) => {
    console.log(show);
    return (
        <div 
            style={!show ? (isLandscape() ? {} : {left: 100 + "vh"}): {}}
            className={styles['buttons'] }>
            <Button 
                onClick={() => setRoute('t3mplate')}
                className={styles['first']}>
                Home
            </Button>
            <Button
                onClick={() => setRoute('calibrate')}>
                Calibrate
            </Button>
            <Button
                onClick={() => setRoute('exercises')}>
                Exercises
            </Button>
            <Button
                onClick={() => setRoute('consultation')}>
                Consult
            </Button>
            <Button
                onClick={() => setRoute('stats')}
                className={styles['last']}>
                Stats
            </Button>
        </div>
    )
}


export default Buttons;