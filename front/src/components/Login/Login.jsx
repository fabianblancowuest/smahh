import React, { useState } from "react";
import styles from "./Login.module.css"
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/actions/actions";


const Login = () => {
    const dispatch = useDispatch();
   
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });


    const handleChange = (event) => {
        const { name, value } = event.target

        setUserData({
            ...userData,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(logIn(userData))/// DISPATCH! 
    }

    return (
        <div className={styles.formBackground}>

            <form className={styles.formContainer} onSubmit={handleSubmit}>
                <label htmlFor="email" className={styles.formLabels}><b>Email: </b></label>
                <input className={`${styles.formInputs} ${styles.customInput}`} type="email" id="email" placeholder="Email..." name="email" value={userData.email} onChange={handleChange} />
                

                <label htmlFor="password" className={styles.formLabels}><b>Password:</b> </label>
                <input className={`${styles.formInputs} ${styles.customInput}`} type="password" id="password" placeholder="Password..." name="password" value={userData.password} onChange={handleChange} />
                

                <button className={styles.formButton} type="submit">Submit</button>
            </form>

        </div>
    )
}

export default Login