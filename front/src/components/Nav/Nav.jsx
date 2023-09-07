import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Nav.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/actions/actions";
import { FaAtom, FaVirus } from "react-icons/fa";
import Swal from "sweetalert2";

const Nav = () => {
	const userType = useSelector((state) => state.userType);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogOut = () => {
		dispatch(logOut(true));
		Swal.fire({
			title: "Are you sure you want to log out?",
			showDenyButton: true,
			showCancelButton: false,
			confirmButtonText: "Yes",
			denyButtonText: `No`,
		}).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (!result.isConfirmed) {
				Swal.fire("Good choice!");
			} else if (result.isCofirmed) {
				Swal.fire("Goodbye!");
				navigate("/");
			}
		});
	};

	return (
		<nav className={styles.navContainer}>
			<div className={styles.logoContainer}>
				<FaVirus className={styles.atomIcon} />
				<span className={styles.logoText}>SMAHH</span>
			</div>

			<div className={styles.navPrincipalBtns}>
				{!userType || userType === "user" ? (
					<>
						<NavLink
							to="/about"
							className={({ isActive }) =>
								isActive ? styles.activeLink : styles.navLink
							}
						>
							ABOUT
						</NavLink>

						<NavLink
							to="/contact"
							className={({ isActive }) =>
								isActive ? styles.activeLink : styles.navLink
							}
						>
							CONTACT
						</NavLink>

						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? styles.activeLink : styles.navLink
							}
						>
							HOME
						</NavLink>
					</>
				) : null}
			</div>

			{!userType ? (
				<div className={styles.logs}>
					<NavLink
						to="/signup"
						className={({ isActive }) =>
							isActive ? styles.activeLink : styles.navLink
						}
					>
						SIGNUP
					</NavLink>

					<NavLink
						to="/login"
						className={({ isActive }) =>
							isActive ? styles.activeLink : styles.navLink
						}
					>
						LOGIN
					</NavLink>
				</div>
			) : null}

			{userType === "user" ? (
				<>
					<NavLink
						to="/riseticket"
						className={({ isActive }) =>
							isActive ? styles.activeLink : styles.navLink
						}
					>
						RAISE TICKET
					</NavLink>

					<NavLink
						to="/tickets"
						className={({ isActive }) =>
							isActive ? styles.activeLink : styles.navLink
						}
					>
						VIEW TICKETS
					</NavLink>

					<NavLink
						to="/profile"
						className={({ isActive }) =>
							isActive ? styles.activeLink : styles.navLink
						}
					>
						PROFILE
					</NavLink>
				</>
			) : null}

			{userType === "staff" ? (
				<NavLink
					to="/"
					className={({ isActive }) =>
						isActive ? styles.activeLink : styles.navLink
					}
				>
					DASHBOARD
				</NavLink>
			) : null}

			{userType === "user" || userType === "staff" ? (
				<button onClick={handleLogOut} to="/" className={styles.logOutButton}>
					LOG OUT
				</button>
			) : null}
		</nav>
	);
};

export default Nav;
