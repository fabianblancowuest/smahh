import {
	SIGN_UP,
	LOG_IN,
	LOG_OUT,
	RISE_TICKET,
	GET_ALL_TICKETS,
	GET_USER_TICKETS,
	UPDATE_TICKET,
	GET_TICKET_DETAIL,
	SEARCH_BY_ID,
	SEARCH_BY_NAME,
	UPDATE_USER,
} from "./types";
import axios from "axios";

const ipDirection = "192.168.1.4";

// COMMON

export const signUp = (userData) => async (dispatch) => {
	const URL = `http://${ipDirection}:3001/user/register`;

	try {
		const { data } = await axios.post(URL, userData);

		dispatch({
			type: SIGN_UP,
		});

		return data;
	} catch (error) {
		throw error;
	}
};

export const logIn = (userData) => async (dispatch) => {
	const URL = `http://${ipDirection}:3001/login`;

	try {
		const { data } = await axios.post(URL, userData);
		dispatch({
			type: LOG_IN,
			payload: data,
		});

		return data;
	} catch (error) {
		throw error;
	}
};

// USER

export const riseTicket =
	(newTicket, userId, userName, userLastName) => async (dispatch) => {
		const URL = `http://${ipDirection}:3001/user/ticket`;

		newTicket.userId = userId;
		newTicket.userName = userName;
		newTicket.userLastName = userLastName;

		try {
			const { data } = await axios.post(URL, newTicket);
			dispatch({
				type: RISE_TICKET,
				payload: data,
			});

			return data;
		} catch (error) {
			throw error;
		}
	};

export const updateUser = (userId, formData) => async (dispatch) => {
	const URL = `http://${ipDirection}:3001/user/updateUser/${userId}`;

	try {
		const { data } = await axios.put(URL, formData);

		dispatch({
			type: UPDATE_USER,
			payload: data,
		});

		return data; // Devuelve la respuesta del servidor en caso de éxito
	} catch (error) {
		throw error; // Lanza el error en caso de fallo
	}
};

export const getUserTickets = (userId, priority, status, order) => async (dispatch) => {

	const URL = `http://${ipDirection}:3001/user/tickets/${userId}?priority=${priority}&status=${status}&order=${order}`;

	try {
		const { data } = await axios.get(URL); //

		dispatch({
			type: GET_USER_TICKETS,
			payload: data,
		});

	} catch (error) {
		console.log(error);
	}
};

// STAFF

export const getAllTickets = ({ priority, status, order, page, perPage }) => async (dispatch) => {

	const URL = `http://${ipDirection}:3001/staff/allTickets?page=${page}&priority=${priority}&status=${status}&order=${order}`;

	try {
		const { data } = await axios.get(URL);

		dispatch({
			type: GET_ALL_TICKETS,
			payload: data,
		});
	} catch (error) {
		alert(error.response.data.error);
	}
};

export const updateTicket = (ticketId, newStatus, currentPage, currentPriority, currentStatus, currentOrder) => {
	const URL = `http://${ipDirection}:3001/staff/update-ticket`;

	return async (dispatch) => {
		try {
			const { data } = await axios.put(URL, { ticketId, newStatus });
			dispatch({
				type: UPDATE_TICKET,
			});

			const response = await axios.get(`http://${ipDirection}:3001/staff/allTickets?page=${currentPage}&priority=${currentPriority}&status=${currentStatus}&order=${currentOrder}`)
			dispatch({
				type: GET_ALL_TICKETS,
				payload: response.data,
			})
		} catch (error) {
			alert(error);
		}
	};
};

// USER- STAFF

export const getTicketDetail = (id) => {
	const URL = `http://${ipDirection}:3001/user/ticket-detail/`;

	return async (dispatch) => {
		try {
			const { data } = await axios.get(URL + Number(id));

			dispatch({
				type: GET_TICKET_DETAIL,
				payload: data,
			});
		} catch (error) {
			alert(error.response.data.error);
		}
	};
};

export const logOut = (out) => {
	return {
		type: LOG_OUT,
		payload: out,
	};
};

// SEARCH-BAR

export const searchById = (search) => {
	const URL = `http://localhost:3001/staff/search-id/${search}`

	return async (dispatch) => {
		try {
			const { data } = await axios.get(URL)

			dispatch({
				type: SEARCH_BY_ID,
				payload: data
			})
		} catch (error) {
			console.log(error);
		}
	}
};

export const searchByName = (search) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.get(
				`http://localhost:3001/staff/search?search=${search.toLowerCase()}`,
			);
			dispatch({
				type: SEARCH_BY_NAME,
				payload: data,
			});
		} catch (error) {
			console.log(error);
		}
	};
};
