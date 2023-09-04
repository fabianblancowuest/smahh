import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchById, searchByName } from "../../redux/actions/actions";
import styles from "./Searchbar.module.css"
const SearchBar = () => {
    const [id, setId] = useState("")

    const dispatch = useDispatch()

    const handleChange = (event) => {
        setId(event.target.value)
    }

    const handleSearch = () => {
        if (!id) {
            return alert("You must enter an Id")
        }
        if (/^\d+$/.test(id)) {
            dispatch(searchById(id))
            console.log(id);
        } else {
            dispatch(searchByName(id))
            setId("")
        }
    }

    return (
        <div >
            <div className={styles.searchbar}>
                <input type='text' onChange={handleChange} value={id} placeholder="Enter ticket ID..." />

                <button className={styles.searchButton} onClick={handleSearch}>Search</button>
            </div>
        </div>


    )
}

export default SearchBar