import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Nav.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/actions/actions";
import { FaAtom, FaVirus } from "react-icons/fa";
import Swal from "sweetalert2";
import Services from "./../Sevices/Services";
import ProfileMenu from "../ProfileMenu/ProfileMenu";

const Nav = () => {
	const user = useSelector((state) => ({
        userId: state.userId,
        userType: state.userType,
        userName: state.userName,
        userLastName: state.userLastName,
        userPhone: state.userPhone,
        email: state.userEmail,
    }));

	const {userType} = user
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
	  setMenuOpen(!isMenuOpen);
	};

	return (
		<div className={styles.container}>
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
						<div className={styles.logs}>
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

						</div>
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

					<div onClick={toggleMenu} className={styles.navLink} >
						<span>{user.userName} {user.userLastName} </span>
					</div>

				) : null}


				{isMenuOpen && 	<ProfileMenu toggleMenu={toggleMenu}/>	}


			</nav>
		</div>
	);
};

export default Nav;
