import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../redux/actions/actions";
import styles from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import validateSignUp from "./validateSignUp";

const SignUp = () => {
	const initialState = {
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
		phoneNumber: "",
		userType: "user",
	};

	const [userData, setUserData] = useState(initialState);
	const [errors, setErrors] = useState({}); // Estado para almacenar errores

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleChange = (event) => {
		const { name, value } = event.target;

		setUserData({
			...userData,
			[name]: value,
		});

		setErrors(
			validateSignUp({
				...userData,
				[name]: value,
			}),
		);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const formErrors = errors;

		if (Object.keys(formErrors).length === 0) {
			dispatch(signUp(userData));
			setUserData(initialState);
			alert(
				`Sign up succesful! 
      		Go to log in`,
			);
			navigate("/login");
		} else {
			alert("Please correct the errors in the form");
		}
	};

	return (
		<div className={styles.container}>
			<h3 className={styles.title}>Sign Up</h3>

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
				{errors.firstName && (
					<p className={styles.errors}>{errors.firstName}</p>
				)}

				<label className={styles.label}>Last Name</label>
				<input
					className={styles.input}
					name="lastName"
					type="text"
					placeholder="Enter your lastName"
					value={userData.lastName}
					onChange={handleChange}
				/>
				{errors.lastName && <p className={styles.errors}>{errors.lastName}</p>}

				{/* Phone Number */}
				<label className={styles.label} htmlFor="phoneNumber">
					Phone Number:
				</label>
				<input
					className={styles.input}
					type="tel"
					name="phoneNumber"
					id="phoneNumber"
					placeholder="Your Phone Number"
					value={userData.phoneNumber}
					onChange={handleChange}
				/>
				{errors.phoneNumber && <p className={styles.errors}>{errors.phoneNumber}</p>}

				<label className={styles.label}>Email</label>
				<input
					className={styles.input}
					type="email"
					name="email"
					placeholder="Enter your email"
					value={userData.email}
					onChange={handleChange}
				/>
				{errors.email && <p className={styles.errors}>{errors.email}</p>}

				<label className={styles.label}>Password</label>
				<input
					className={styles.input}
					name="password"
					type="password"
					placeholder="Enter your password"
					value={userData.password}
					onChange={handleChange}
				/>
				{errors.password && <p className={styles.errors}>{errors.password}</p>}

				<label className={styles.label}>Confirm Password</label>
				<input
					className={styles.input}
					name="confirmPassword"
					type="password"
					placeholder="Confirm your password"
					value={userData.confirmPassword}
					onChange={handleChange}
				/>
				{errors.confirmPassword && (
					<p className={styles.errors}>{errors.confirmPassword}</p>
				)}

				<input className={styles.btnSubmit} type="submit" value="Submit" />
			</form>
		</div>
	);
};

export default SignUp;
