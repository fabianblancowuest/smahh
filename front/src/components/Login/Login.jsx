import React, { useState } from "react";
import styles from "./Login.module.css"
import validate from "./validate";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/actions/actions";


const Login = () => {
    const dispatch = useDispatch();
   
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        const { name, value } = event.target

        setUserData({
            ...userData,
            [name]: value
        })

        setErrors(validate({
            ...userData,
            [name]: value
        }))

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const existError = Object.keys(errors)

        if (existError.length === 0) {
            dispatch(logIn(userData))/// DISPATCH! 
        } else window.alert("Debes corregir los campos")

    }

    return (
        <div className={styles.formBackground}>

            <form className={styles.formContainer} onSubmit={handleSubmit}>
                <label htmlFor="email" className={styles.formLabels}><b>Email: </b></label>
                <input className={`${styles.formInputs} ${styles.customInput}`} type="email" id="email" placeholder="Email..." name="email" value={userData.email} onChange={handleChange} />
                {errors.email && <p className={styles.errors}>{errors.email}</p>}

                <label htmlFor="password" className={styles.formLabels}><b>Password:</b> </label>
                <input className={`${styles.formInputs} ${styles.customInput}`} type="password" id="password" placeholder="Password..." name="password" value={userData.password} onChange={handleChange} />
                {errors.password && <p className={styles.errors}>{errors.password}</p>}

                <button className={styles.formButton} type="submit">Submit</button>
            </form>

        </div>
    )
}

export default Login