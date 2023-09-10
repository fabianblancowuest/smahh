import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../../redux/actions/actions";
import styles from "./ProfileMenu.module.css"
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";

const ProfileMenu = ({toggleMenu}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogOut = () => {
        Swal.fire({
          title: "Are you sure you want to log out?",
          showDenyButton: true,
          showCancelButton: false,
          confirmButtonText: "Yes",
          denyButtonText: "No",
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(logOut(true)); 
            navigate("/"); 
          }
        });
      };

    return (
        <div className={styles.dropdown}>
            <ul>
                <Link className={styles.link} to="/profile">
                    <li onClick={toggleMenu}>Edit Profile</li>
                </Link>


                <Link to="profile/editpassword">
                    <li onClick={toggleMenu} >Edit Password</li>
                </Link>

                <li onClick={handleLogOut}>Log Out</li>
            </ul>
        </div>
    )

}

export default ProfileMenu