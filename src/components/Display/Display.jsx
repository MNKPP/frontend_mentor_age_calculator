import styles from './Display.module.css';

export default function Display({years, months, days, errors}) {
    return (
        <div className={styles.displayContainer}>
            {errors && Object.values(errors).map((error, index) => (
                <p key={index} className={styles.error}>{error}</p>
            ))}
            <p><span>{years === 0 ? "--" : years}</span>years</p>
            <p><span>{months === 0 ? "--" : months}</span>months</p>
            <p><span>{days === 0 ? "--" : days}</span>days</p>
        </div>
    )
}