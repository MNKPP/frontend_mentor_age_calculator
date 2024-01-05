import styles from './Button.module.css';
import iconArrow from '../../assets/images/icon-arrow.svg';

export default function Button() {
    return (
        <div className={styles.buttonContainer}>
            <button>
                <img src={iconArrow} alt="Icon arrow"/>
            </button>
        </div>
    )
}