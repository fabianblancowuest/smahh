import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Nav.module.css";
import { useDispatch, useSelector } from "react-redux";
import { FaAtom, FaVirus, FaUser } from "react-icons/fa"; // Importa el ícono de usuario
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import { useLocation } from "react-router-dom";

const Nav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isProfileOpen, setIsProfileOpen] = useState(false);
	
	const user = useSelector((state) => ({
		userId: state.userId,
		userType: state.userType,
		userName: state.userName,
		userLastName: state.userLastName,
		userPhone: state.userPhone,
		email: state.userEmail,
	}));

	const { userType } = user;
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// Función para que siempre se muestren las vistas desde la parte superior de cada página
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	const handleGoToPrincipalMain = () => {
		navigate("/");
		setTimeout(() => {
			const element = document.getElementById("principal-main");
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}, 100); // Espera un momento para que se renderice la página antes de hacer scroll
	};


	const handleToggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	
	// const handleLinkClick = () => {
	// 	setIsMenuOpen(false);
	// };


	const toggleProfile = () => {
		setIsProfileOpen(!isProfileOpen)
	}

	return (
		<div className={styles.container}>
			<div className={styles.menuToggle} onClick={handleToggleMenu}>
				<div className={styles.bars}></div>
				<div className={styles.bars}></div>
				<div className={styles.bars}></div>
			</div>
			<nav
				className={`${styles.navContainer} ${isMenuOpen ? styles.open : ""}`}
			>
				<div className={styles.logoContainer}>
					<FaVirus className={styles.atomIcon} />
					<span className={styles.logoText}>SMAHH</span>
				</div>
				<div className={styles.navPrincipalBtns}>
					{!userType || userType === "user" ? (
						<ul>
							<li>
								<NavLink
									to="/about"
									className={({ isActive }) =>
										isActive ? styles.activeLink : styles.navLink
									}
								>
									ABOUT
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/contact"
									className={({ isActive }) =>
										isActive ? styles.activeLink : styles.navLink
									}
								>
									CONTACT
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/"
									className={({ isActive }) =>
										isActive ? styles.activeLink : styles.navLink
									}
								>
									HOME
								</NavLink>
							</li>
							<li>
								<NavLink
									to=""
									className={styles.navLink}
									onClick={handleGoToPrincipalMain}
								>
									SERVICES
								</NavLink>
							</li>
						</ul>
					) : null}
				</div>

				{!userType ? (
					<div className={styles.logs}>
						<ul className={styles.logs}>
							<li>
								<NavLink
									to="/signup"
									className={({ isActive }) =>
										isActive ? styles.activeLink : styles.navLink
									}
								>
									SIGNUP
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/login"
									className={({ isActive }) =>
										isActive ? styles.activeLink : styles.navLink
									}
								>
									LOGIN
								</NavLink>
							</li>
						</ul>
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


				{userType === "user" || userType === "staff" ?

					<div onClick={toggleProfile} className={styles.userLink}>
						<span>
							<FaUser className={styles.userIcon} />
							{user.userName} {user.userLastName}
						</span>
					</div>

				: null}


				{isProfileOpen && <ProfileMenu toggleProfile={toggleProfile} />}


			</nav>
		</div>
	);
};


export default Nav;



