import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../redux/actions/actions";
import styles from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import validateSignUp from "./validateSignUp";
import PopUp from "../PopUp/PopUp";

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
	const [errors, setErrors] = useState({}); // Estado para almacenar errores y validarlos

	const [successMessage, setSuccessMessage] = useState(""); // Estado para el mensaje de éxito
	const [errorMessage, setErrorMessage] = useState("");

	const [showPopUp, setShowPopUp] = useState(false); // Estado para mostrar/ocultar el PopUp

	const dispatch = useDispatch();
	const navigate = useNavigate();

	//mensaje de exito para el signUp- esto se seteará en el submit en el bloque try
	const message = (
		<>
			You've signed up succesfuly ✔️
			<br />A confirmation email will be sent to you.
		</>
	);

	const handleChange = (event) => {
		const { name, value } = event.target;
		if (errorMessage) {
			setErrorMessage("");
		}

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

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formErrors = errors;

		if (Object.keys(formErrors).length === 0) {
			try {
				await dispatch(signUp(userData));
				setSuccessMessage(message);

				// setShowPopUp(true) // en caso de utilizar el PopUp

				setUserData(initialState);
				setErrorMessage("");
			} catch (error) {
				setSuccessMessage("");
				setErrorMessage(error.response.data.error);
			}
		}
	};

	const handleNavigate = () => {
		navigate("/login");
	};

	const closePopUp = () => {
		setShowPopUp(false);
	};

	return (
		<div className={styles.container}>
			<h3 className={styles.title}>Sign Up</h3>

			{/* {showPopUp && (
				<PopUp message={successMessage} />
			)} */}

			<form className={styles.form} onSubmit={handleSubmit}>
				{/* First Name */}
				<label className={styles.label}>First Name</label>
				<input
					className={styles.input}
					name="firstName"
					type="text"
					placeholder="Enter your first name"
					value={userData.firstName}
					onChange={handleChange}
				/>
				{errors.firstName && (
					<p className={styles.errors}>{errors.firstName}</p>
				)}

				{/* Last Name */}
				<label className={styles.label}>Last Name</label>
				<input
					className={styles.input}
					name="lastName"
					type="text"
					placeholder="Enter your last name"
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
					placeholder="Enter your phone number"
					value={userData.phoneNumber}
					onChange={handleChange}
				/>
				{errors.phoneNumber && (
					<p className={styles.errors}>{errors.phoneNumber}</p>
				)}

				{/* Email */}
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

				{/* Password */}
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

				{/* Confirm Password */}
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

				{!successMessage && (
					<input
						className={styles.btnSubmit}
						type="submit"
						value="Submit"
						disabled={Object.keys(errors).length > 0 || successMessage !== ""}
					/>
				)}

				{successMessage && (
					<p className={styles.successMessage}>{successMessage}</p>
				)}

				{successMessage && (
					<button onClick={handleNavigate} className={styles.btnSubmit}>
						Go to Log In
					</button>
				)}

				{errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
			</form>
		</div>
	);
};

export default SignUp;
