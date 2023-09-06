import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../redux/actions/actions"; // Importa la acción de actualización de usuario
import styles from "./Profile.module.css"; // Importa los estilos

const Profile = () => {
    const dispatch = useDispatch();

    const [isUpdating, setIsUpdating] = useState(false);
    const [updateSuccess, setUpdateSuccess] = useState(null)
    const [updateError, setUpdateError] = useState(null);

    const user = useSelector(state => ({
        userId: state.userId,
        userType: state.userType,
        userName: state.userName,
        userLastName: state.userLastName,
        userPhone: state.userPhone,
        email: state.userEmail
    }));

    const defaultFormData = {
        firstName: user.userName || "",
        lastName: user.userLastName || "",
        email: user.email || "",
        phoneNumber: user.userPhone || ""
    };

    const [formData, setFormData] = useState(defaultFormData);

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async () => {
        setIsUpdating(true);
        try {
            const responseData = await dispatch(updateUser(user.userId, formData));
            console.log(responseData.message);
            setUpdateSuccess(responseData.message); // Almacena la respuesta del servidor en la variable local
            setUpdateError(null); 
        } catch (error) {
            setUpdateError(error.response.data.error); // Almacena el mensaje de error en la variable local
            setUpdateSuccess(null)
        } finally {
            setIsUpdating(false);
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Edit Profile</h2>

            <form className={styles.form}>
                <div>
                    <label className={styles.label}>First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div>
                    <label className={styles.label}>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div>
                    <label className={styles.label}>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div>
                    <label className={styles.label}>Phone Number</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <button
                    type="button"
                    onClick={handleSubmit}
                    className={styles.btnSubmit}
                    disabled={isUpdating}
                >
                    {isUpdating ? "Updating..." : "Update Profile"}
                </button>

                {updateError && <p className={styles.errorMessage}>{updateError}</p>}
                {updateSuccess && <p className={styles.successMessage}>{updateSuccess}</p>}
            </form>
        </div>
    );
};

export default Profile;
