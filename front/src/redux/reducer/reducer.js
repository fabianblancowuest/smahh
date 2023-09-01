import { FILTER_BY_PRIORITY, FILTER_BY_STATUS, GET_ALL_TICKETS, GET_TICKET_DETAIL, GET_USER_TICKETS, LOG_IN, RISE_TICKET, SIGN_UP, UPDATE_TICKET } from "../actions/types"

const inicialState = {
    logInMessage: null,
    access: false,
    userId: null,
    userType: null,
    userName: null,

    updateMessage: null,

    userTickets: [],
    userTicketsCopy: [],

    ticketDetail: {}

}

const rootReducer = (state = inicialState, actions) => {

    const { type, payload } = actions

    switch (type) {

        case SIGN_UP:
            return {
                ...state,
            }

        case LOG_IN:
            return {
                ...state,
                logInMessage: payload.message,
                access: payload.access,
                userType: payload.userType,
                userId: payload.userId,
                userName: payload.userName,
            }

        case RISE_TICKET:
            return {
                ...state,
                userTickets: [...state.userTickets, payload.ticket],
                userTicketsCopy: [...state.userTickets, payload.ticket]
            }

        case GET_USER_TICKETS:
            return {
                ...state,
                userTickets: [...payload.tickets],
                userTicketsCopy: [...payload.tickets]
            }

        case GET_ALL_TICKETS:
            return {
                ...state,
                userTickets: [...payload.tickets],
                userTicketsCopy: [...payload.tickets]
            }

        case UPDATE_TICKET:
            return {
                ...state,
                updateMessage: payload.message
            }

        case GET_TICKET_DETAIL:
            return {
                ...state,
                ticketDetail: { ...payload.ticket }
            }

        //FILTERS

        case FILTER_BY_PRIORITY:

            const filteredByPriority = state.userTicketsCopy.filter((tickets) => {

                if (payload === "All") {
                    return true;
                } else {
                    return tickets.priority === payload
                }
            });

            return {
                ...state,
                userTickets: filteredByPriority
            }

        case FILTER_BY_STATUS:
            const filteredByStatus = state.userTicketsCopy.filter((tickets) => {

                if (payload === "All") {
                    return true;
                } else {
                    return tickets.status === payload
                }
            });
            
            return {
                ...state,
                userTickets: filteredByStatus
            }

        default:
            return state
    }
}

export default rootReducer