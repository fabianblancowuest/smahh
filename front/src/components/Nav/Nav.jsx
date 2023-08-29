import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";


const Nav = () => {

  return (
    <nav className={styles.navContainer}>
      <NavLink to="/about" className={({isActive})=> (isActive ? styles.activeLink : styles.navLink)}>
        ABOUT
      </NavLink>
      <NavLink to="/register" className={({isActive})=> (isActive ? styles.activeLink : styles.navLink)}>
        SIGNUP
      </NavLink>
      <NavLink to="/login" className={({isActive})=> (isActive ? styles.activeLink : styles.navLink)}>
        LOGIN
      </NavLink>

    </nav>
  );
};

export default Nav;