import { useDispatch, useSelector } from "react-redux";
import {signUp } from "../../redux/actions/actions";
import styles from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {

  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "user",
  };

  const [userData, setUserData] = useState(initialState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch(signUp(userData));
  
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>First Name</label>
        <input
          className={styles.input}
          name="firstName"
          type="text"
          placeholder="Enter your firstname"
          value={userData.firstName}
          onChange={handleChange}
        />

        <label className={styles.label}>Last Name</label>
        <input
          className={styles.input}
          name="lastName"
          type="text"
          placeholder="Enter your lastName"
          value={userData.lastName}
          onChange={handleChange}
        />

        <label className={styles.label}>Email</label>
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Enter your email"
          value={userData.email}
          onChange={handleChange}
        />

        <label className={styles.label}>Password</label>
        <input
          className={styles.input}
          name="password"
          type="password"
          placeholder="Enter your password"
          value={userData.password}
          onChange={handleChange}
        />

        <label className={styles.label}>Confirm Password</label>
        <input
          className={styles.input}
          name="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          value={userData.confirmPassword}
          onChange={handleChange}
        />

        <input className={styles.btnSubmit} type="submit" value="Submit" />

      </form>
    </div>
  );
};

export default SignUp;
