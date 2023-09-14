import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchById, searchByName } from "../../redux/actions/actions";
import styles from "./Searchbar.module.css"

const SearchBar = () => {
    const [search, setSearch] = useState("")

    const dispatch = useDispatch()

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    const handleSearch = () => {
        if (!search) {
            return alert("You must enter search")
        }
        if (/^\d+$/.test(search)) {
            dispatch(searchById(search))
            setSearch("")
        } else {
            dispatch(searchByName(search))
            setSearch("")
        }
    }

    return (

        <div className={styles.searchbar}>
            <input type='text' className={styles.input} onChange={handleChange} value={search} placeholder="Enter your search" />

            <button className={styles.searchButton} onClick={handleSearch}>Search</button>
        </div>



    )
}

export default SearchBar