import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../redux/actions/actions";
import styles from "./Profile.module.css";
import validateProfile from "./validateProfile";

const Profile = () => {
    const dispatch = useDispatch();

    const [isUpdating, setIsUpdating] = useState(false);
    const [updateSuccess, setUpdateSuccess] = useState(null);
    const [updateError, setUpdateError] = useState(null);

    const user = useSelector((state) => ({
        userId: state.userId,
        userType: state.userType,
        userName: state.userName,
        userLastName: state.userLastName,
        userPhone: state.userPhone,
        email: state.userEmail,
    }));

    const defaultFormData = {
        email: null,
        phoneNumber: null,
        password: null,
        confirmPassword: null,
    };

    const [formData, setFormData] = useState(defaultFormData);
    const [errors, setErrors] = useState({});

    const message = (
        <>
            User updated successfully ✔️
            <br />
            Changes made:
            <ul>
                <li>
                    <strong>Email:</strong> {formData.email}
                </li>
                <li>
                    <strong>Phone Number:</strong> {formData.phoneNumber}
                </li>
                <li>
                    <strong>New Password:</strong> {formData.password}
                </li>
            </ul>
        </>
    );

    const isButtonDisabled =
        isUpdating ||
        Object.values(formData).some((value) => !value) ||
        Object.values(errors).some((error) => error);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (updateSuccess || updateError) {
            setUpdateSuccess(null);
            setUpdateError(null)
        }

        setFormData({
            ...formData,
            [name]: value,
        });

        setErrors(validateProfile({
            ...formData,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        setIsUpdating(true);

        const existErrors = Object.keys(errors)

        if (existErrors.length === 0) {
            try {
                const responseData = await dispatch(updateUser(user.userId, formData));
                setFormData({
                    email: "",
                    phoneNumber: "",
                    password: "",
                    confirmPassword: "",
                });
                setUpdateSuccess(message);
                setUpdateError(null);
            } catch (error) {
                setUpdateError(error.response.data.error);
                setUpdateSuccess(null);
            } finally {
                setIsUpdating(false);
            }
        } else {

        }

    };

    return (
        <div className={styles.container}>

            <h2 className={styles.title}>Edit Profile</h2>

            <div className={styles.currentData}>
                <p>
                    <strong>Name:</strong> {user.userName} {user.userLastName}
                </p>
                <p>
                    <strong>Current Email:</strong> {user.email}
                </p>
                <p>
                    <strong>Current Phone Number:</strong> {user.userPhone}
                </p>
            </div>

            <form className={styles.form}>
                {/*First Name */}
                {/* <div>
                    <label className={styles.label}>First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div> */}
                {/*Last Name */}
                {/* <div>
                    <label className={styles.label}>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div> */}

                {/* Email */}

                <label className={styles.label}>New Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your new email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                />
                {errors.email && <p className={styles.errors}>{errors.email}</p>}


                {/*Phone Number */}

                <label className={styles.label}>New Phone Number</label>
                <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Enter your new phone number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={styles.input}
                />
                {errors.phoneNumber && (
                    <p className={styles.errors}>{errors.phoneNumber}</p>
                )}

                {/* Password */}
                <label className={styles.label}>New Password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Enter your new password"
                />
                {errors.password && (
                    <p className={styles.errors}>{errors.password}</p>
                )}

                {/* Confirm Password */}
                <label className={styles.label}>Confirm New Password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Confirm your new password"
                />
                {errors.confirmPassword && (
                    <p className={styles.errors}>{errors.confirmPassword}</p>
                )}

                {/*Submit Button */}
                <button
                    type="button"
                    onClick={handleSubmit}
                    className={`${styles.button} ${isButtonDisabled ? styles.disabledButton : ""}`}
                    disabled={isButtonDisabled}
                >
                    {isUpdating ? "Updating..." : "Update Profile"}
                </button>

                {/* Error & Succes Messages */}
                {updateError && <p className={styles.errors}>{updateError}</p>}
                {updateSuccess && <p className={styles.successMessage}>{updateSuccess}</p>}

            </form>
        </div>
    );
};

export default Profile;
