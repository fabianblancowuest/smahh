import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import { useSelector } from "react-redux";


const Nav = () => {
  const userType = useSelector(state => state.userType);

  useEffect(() => {

  }, [userType])

  return (
    <nav className={styles.navContainer}>
      
      {userType !== "staff" ? <NavLink to="/about" className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}>
        ABOUT
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

      {userType === "staff"? <NavLink to="/home" className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}>
        HOME
      </NavLink> : null }

    </nav>
  );
};

export default Nav;