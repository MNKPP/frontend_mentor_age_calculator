import React, { useState } from 'react';
import styles from './Form.module.css';

export default function Form({handleInputChange}) {
    const [errors, setErrors] = useState({});

    const validateInput = (e) => {
        const { name, value } = e.target;
        let tempErrors = {...errors};

        if (value.trim() === "") {
            tempErrors[name] = `${name} field is required`;
        } else if ((name === "day" && (value < 1 || value > 31)) ||
                   (name === "month" && (value < 1 || value > 12))) {
            tempErrors[name] = `The ${name} number is not valid`;
        } else {
            delete tempErrors[name];
        }

        setErrors(tempErrors);
        handleInputChange(e);
    }

    return (
        <div className={styles.formContainer}>
            <div className={styles.groupFormLabel}>
                <label htmlFor="day">DAY</label>
                <input type="number" id="day" name="day" onChange={validateInput}/>
                {errors.day && <p className={styles.error}>{errors.day}</p>}
            </div>

            <div className={styles.groupFormLabel}>
                <label htmlFor="month">MONTH</label>
                <input type="number" id="month" name="month" onChange={validateInput}/>
                {errors.month && <p className={styles.error}>{errors.month}</p>}
            </div>

            <div className={styles.groupFormLabel}>
                <label htmlFor="year">YEAR</label>
                <input type="number" id="year" name="year" onChange={validateInput}/>
                {errors.year && <p className={styles.error}>{errors.year}</p>}
            </div>
        </div>
    )
}