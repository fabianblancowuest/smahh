import { SIGN_UP, LOG_IN, LOG_OUT, RISE_TICKET } from "./types";
import axios from "axios";

export const signUp = (userData) => {
	const URL = "http://localhost:3001/user/register";
	console.log(userData);
	return async (dispatch) => {
		try {
			const { data } = await axios.post(URL, userData);
			dispatch({
				type: SIGN_UP,
				payload: data,
			});
		} catch (error) {
			console.log(error);
			alert(error.response.data.error);
		}
	};
};

export const logIn = (userData) => {
	//LocalHost Request
	const URL = "http://localhost:3001/login";
	return async (dispatch) => {
		try {
			const { data } = await axios.post(URL, userData);
			dispatch({
				type: LOG_IN,
				payload: data,
			});
		} catch (error) {
			alert("An error has ocurred" + error);
		}
	};
};

export const riseTicket = (newTicket, userId) => {
	const URL = "http://localhost:3001/user/ticket";
	// Agregar userId al objeto newTicket
	newTicket.userId = userId;
	return async (dispatch) => {
		try {
			const { data } = await axios.post(URL, newTicket);

			dispatch({
				type: RISE_TICKET,
				payload: data,
			});
		} catch (error) {
			alert("An error ocurred" + error.response.data.error);
		}
	};
};
