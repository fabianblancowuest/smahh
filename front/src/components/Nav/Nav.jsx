import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import { useSelector } from "react-redux";


const Nav = () => {
  const userType = useSelector(state => state.userType);

  return (
    <nav className={styles.navContainer}>

      {!userType || userType === "user" ? <NavLink to="/about" className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}>
        ABOUT
      </NavLink> : null}

      {!userType || userType === "user" ? <NavLink to="/contact" className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}>
        CONTACT
      </NavLink> : null}

      {!userType || userType === "user"? <NavLink to="/" className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}>
        HOME
      </NavLink> : null}

      {!userType ? <NavLink to="/signup" className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}>
        SIGNUP
      </NavLink> : null}

      {!userType ? <NavLink to="/login" className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}>
        LOGIN
      </NavLink> : null}

      {userType === "user" ? <NavLink to="/riseticket" className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}>
        RISE TICKET
      </NavLink> : null}

      {userType === "user" ? <NavLink to="/tickets" className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}>
        VIEW TICKETS
      </NavLink> : null}

      {userType === "staff" ? <NavLink to="/" className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}>
        DASHBOARD
      </NavLink> : null }

    </nav>
  );
};

export default Nav;