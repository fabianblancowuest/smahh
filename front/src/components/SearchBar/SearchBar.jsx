import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { searchById, searchByName } from "../../redux/actions/actions";
import styles from "./Searchbar.module.css";

const SearchBar = () => {
	const [search, setSearch] = useState("");
	const inputRef = useRef(null); // Agrega una referencia al campo de entrada

	const dispatch = useDispatch();

	const handleChange = (event) => {
		setSearch(event.target.value);
	};

	const handleSearch = () => {
		if (!search) {
			return alert("You must enter a search");
		}
		if (/^\d+$/.test(search)) {
			dispatch(searchById(search));
			setSearch("");
		} else {
			dispatch(searchByName(search));
			setSearch("");
		}
	};

	const handleKeyUp = (event) => {
		if (event.key === "Enter") {
			handleSearch();
		}
	};

	return (
		<div className={styles.searchbar}>
			<input
				type="text"
				className={styles.input}
				onChange={handleChange}
				value={search}
				placeholder="Enter your search..."
				onKeyUp={handleKeyUp} // Manejador de eventos para la tecla "Enter"
				ref={inputRef} // Referencia al campo de entrada
			/>
			<button className={styles.searchButton} onClick={handleSearch}>
				Search
			</button>
		</div>
	);
};

export default SearchBar;
