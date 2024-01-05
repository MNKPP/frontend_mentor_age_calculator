import styles from './container.module.css';
import Form from "../Form/Form.jsx";
import Display from "../Display/Display.jsx";
import Button from "../Button/Button.jsx";
import {useState, useEffect} from "react";

export default function Container() {
    const [submit , setSubmit] = useState({
        day: 0,
        month: 0,
        year: 0
    });

    const [years, setYears] = useState(0);
    const [months, setMonths] = useState(0);
    const [days, setDays] = useState(0);

    const handleInputChange = (e) => {
        setSubmit({
            ...submit,
            [e.target.name]: e.target.value
        });
    }

    const calculateAge = () => {
        if (submit.day === 0 || submit.month === 0 || submit.year === 0) return;
        const birthDate = new Date(submit.year, submit.month - 1, submit.day);
        const currentDate = new Date();

        const diffInTime = currentDate.getTime() - birthDate.getTime();
        const diffInDays = diffInTime / (1000 * 3600 * 24);

        setYears(Math.floor(diffInDays / 365));
        setMonths(Math.floor((diffInDays % 365) / 30));
        setDays(Math.floor((diffInDays % 365) % 30));
    }

    useEffect(() => {
        calculateAge();
    }, [submit]);

    return (
        <div className={styles.container}>
            <Form handleInputChange={handleInputChange}/>
            <Button />
            <Display years={years} months={months} days={days}/>
        </div>
    )
}