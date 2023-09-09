import React, { useState } from "react";
import styles from "./ChangePassword.module.css"; // Estilos específicos para este componente
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const ChangePassword = () => {
    const [passwordData, setPasswordData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const [updateSuccess, setUpdateSuccess] = useState(null);
    const [updateError, setUpdateError] = useState(null);

    const userId = useSelector(state => state.userId)

    const message = (
        <>
            Password updated successfully ✔️
            <br />
            A message will be sent to you
        </>
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPasswordData({
            ...passwordData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.put(`http://localhost:3001/user/change-password/${userId}`, passwordData)
            setPasswordData({
                currentPassword: "",
                newPassword: "",
                confirmPassword: "",
            })
            setUpdateSuccess(message);
            setUpdateError(null);
        } catch (error) {
            setUpdateError(error.response.data.error)
            setUpdateSuccess(null);
        }

    };

    const handleFormClick = () => {
        if (updateSuccess) {
            setUpdateSuccess(null);
            setUpdateError(null)
        }
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Change Password</h2>

            <form className={styles.form} onSubmit={handleSubmit} onClick={handleFormClick}>
                {/* Current Password */}
                <label className={styles.label}>Current Password</label>
                <input
                    type="password"
                    name="currentPassword"
                    value={passwordData.currentPassword}
                    onChange={handleChange}
                    className={styles.input}
                />

                {/* New Password */}
                <label className={styles.label}>New Password</label>
                <input
                    type="password"
                    name="newPassword"
                    value={passwordData.newPassword}
                    onChange={handleChange}
                    className={styles.input}
                />

                {/* Confirm New Password */}
                <label className={styles.label}>Confirm New Password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    value={passwordData.confirmPassword}
                    onChange={handleChange}
                    className={styles.input}
                />

                {/* Submit Button */}
                <button type="submit" className={styles.button}>
                    Change Password
                </button>

                {/* Error & Success Messages */}
                {updateError && <p className={styles.errors}>{updateError}</p>}
                {updateSuccess && <p>{updateSuccess}</p>}

            </form>
        </div>
    );
};

export default ChangePassword;
