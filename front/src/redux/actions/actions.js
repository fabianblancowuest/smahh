import { SIGN_UP, LOG_IN, LOG_OUT, RISE_TICKET, GET_ALL_TICKETS, GET_USER_TICKETS, UPDATE_TICKET } from "./types";
import axios from "axios";

export const signUp = (userData) => {
	const URL = "http://localhost:3001/user/register";
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

export const getUserTickets = (userId) => {
	const URL = `http://localhost:3001/user/ticket/`

	return async (dispatch) => {
		try {
			const { data } = await axios.get(URL + userId) //

			dispatch({
				type: GET_USER_TICKETS,
				payload: data,
			})
		} catch (error) {
			console.log(error);
		}
	}
}

// STAFF ONLY

export const getAllTickets = () => {
	const URL = "http://localhost:3001/staff/allTickets"

	return async (dispatch) => {
		try {
			const { data } = await axios.get(URL)
			dispatch({
				type: GET_ALL_TICKETS,
				payload: data,
			});
		} catch (error) {
			alert(error.response.data.error)
		}
	}
}

export const updateTicket = (ticketId, newStatus) => {
	const URL = "http://localhost:3001/staff/update-ticket"

	try {
		return async (dispatch) => {
			
			const {data}= await axios.put(URL, {ticketId, newStatus})
			
			dispatch({
				type: UPDATE_TICKET,
				payload: data  // por ahora solo recibe propiedad message: "Status updated correctly"
			})
		}
	} catch (error) {
		console.log(error);
	}
}