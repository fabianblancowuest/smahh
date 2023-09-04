import { SIGN_UP, LOG_IN, LOG_OUT, RISE_TICKET, GET_ALL_TICKETS, GET_USER_TICKETS, UPDATE_TICKET, GET_TICKET_DETAIL, FILTER_BY_PRIORITY, FILTER_BY_STATUS, SORT_BY_DATE, SEARCH_BY_ID, SEARCH_BY_NAME, CLEAR_ERROR } from "./types";
import axios from "axios";

// COMMON 

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
			alert(error.response.data.error);
		}
	};
};

// USER 

export const riseTicket = (newTicket, userId, userName) => {
	const URL = "http://localhost:3001/user/ticket";
	// Agregar userId al objeto newTicket
	newTicket.userId = userId;
	newTicket.userName = userName;
	return async (dispatch) => {
		try {
			const { data } = await axios.post(URL, newTicket);

			dispatch({
				type: RISE_TICKET,
				payload: data,
			});
		} catch (error) {
			console.log(error);
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

// STAFF 

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

			const { data } = await axios.put(URL, { ticketId, newStatus })
			console.log(data);

			dispatch({
				type: UPDATE_TICKET,
				payload: data
			})
		}
	} catch (error) {
		alert(error.response.data.error);
	}
}

// USER- STAFF

export const getTicketDetail = (id) => {
	const URL = "http://localhost:3001/user/ticket-detail/"

	return async (dispatch) => {
		try {
			const { data } = await axios.get(URL + Number(id))

			dispatch({
				type: GET_TICKET_DETAIL,
				payload: data
			})

		} catch (error) {
			dispatch({
				type: SET_ERROR,
				payload: error.message
			});
		}
	}
}

export const logOut = (out) => {
	return {
		type: LOG_OUT,
		payload: out
	}
}

// SEARCH-BAR

export const searchById = (id) => {
	return {
		type: SEARCH_BY_ID,
		payload: id
	}
}

export const searchByName = (userName) => {
	return async (dispatch) => {

		try {
			const { data } = await axios.get(`http://localhost:3001/staff/userName?userName=${userName}`)
			dispatch({
				type: SEARCH_BY_NAME,
				payload: data
			})
		} catch (error) {
			dispatch({
				type: SET_ERROR,
				payload: error.message
			 });
		}
	}
}

// FILTERS

export const filterPriority = (priority) => {
	return {
		type: FILTER_BY_PRIORITY,
		payload: priority
	}
}

export const filterStatus = (status) => {
	return {
		type: FILTER_BY_STATUS,
		payload: status
	}
}

export const sortByDate = (order) => {
	return {
		type: SORT_BY_DATE,
		payload: order
	}
}

// ERROR MESSAGES

export const clearError = () => {
	return {
		type: CLEAR_ERROR
	};
}
