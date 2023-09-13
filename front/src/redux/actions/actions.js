import {
	SIGN_UP,
	LOG_IN,
	LOG_OUT,
	RISE_TICKET,
	GET_ALL_TICKETS,
	GET_USER_TICKETS,
	UPDATE_TICKET,
	GET_TICKET_DETAIL,
	FILTER_BY_PRIORITY,
	FILTER_BY_STATUS,
	SORT_BY_DATE,
	SEARCH_BY_ID,
	SEARCH_BY_NAME,
	UPDATE_USER,
} from "./types";
import axios from "axios";

const ipDirection = "192.168.0.12";

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
	//LocalHost Request
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

export const riseTicket = (newTicket, userId, userName) => async (dispatch) => {
	const URL = `http://${ipDirection}:3001/user/ticket`;

	newTicket.userId = userId;
	newTicket.userName = userName;

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

export const getUserTickets = (userId) => async (dispatch) => {
	const URL = `http://${ipDirection}:3001/user/ticket/`;
	try {
		const { data } = await axios.get(URL + userId); //

		dispatch({
			type: GET_USER_TICKETS,
			payload: data,
		});
	} catch (error) {
		console.log(error);
	}
};

// STAFF

export const getAllTickets = () => async (dispatch) => {
	const URL = `http://${ipDirection}:3001/staff/allTickets`;
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

export const updateTicket = (ticketId, newStatus) => {
	const URL = `http://${ipDirection}:3001/staff/update-ticket`;

	return async (dispatch) => {
		try {
			const { data } = await axios.put(URL, { ticketId, newStatus });
			dispatch({
				type: UPDATE_TICKET,
				payload: data,
			});
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

export const searchById = (id) => {
	return {
		type: SEARCH_BY_ID,
		payload: id,
	};
};

export const searchByName = (userName) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.get(
				`http://localhost:3001/staff/userName?userName=${userName}`,
			);
			dispatch({
				type: SEARCH_BY_NAME,
				payload: data,
			});
		} catch (error) {
			alert(error.response.data.error);
		}
	};
};

// FILTERS

export const filterPriority = (priority) => {
	return {
		type: FILTER_BY_PRIORITY,
		payload: priority,
	};
};

export const filterStatus = (status) => {
	return {
		type: FILTER_BY_STATUS,
		payload: status,
	};
};

export const sortByDate = (order) => {
	return {
		type: SORT_BY_DATE,
		payload: order,
	};
};

export const applyCombinedFilters = (priority, status, order) => {
	return (dispatch, getState) => {
		// Get the current state
		const { userTicketsCopy } = getState();

		// Apply filters based on user input
		let filteredTickets = [...userTicketsCopy];

		if (priority !== "All") {
			filteredTickets = filteredTickets.filter(
				(ticket) => ticket.priority === priority,
			);
		}

		if (status !== "All") {
			filteredTickets = filteredTickets.filter(
				(ticket) => ticket.status === status,
			);
		}

		if (order === "A") {
			filteredTickets.sort((a, b) => a.id - b.id);
		} else if (order === "D") {
			filteredTickets.sort((a, b) => b.id - a.id);
		}

		// Dispatch the filtered tickets to update the state
		dispatch({
			type: "FILTERED_TICKETS",
			payload: filteredTickets,
		});
	};
};
