import { FILTER_BY_PRIORITY, FILTER_BY_STATUS, GET_ALL_TICKETS, GET_TICKET_DETAIL, GET_USER_TICKETS, LOG_IN, LOG_OUT, RISE_TICKET, SEARCH_BY_ID, SIGN_UP, SORT_BY_DATE, UPDATE_TICKET } from "../actions/types"

const inicialState = {
    access: false,
    userId: null,
    userType: null,
    userName: null,

    logInMessage: null,
    updateMessage: null,
    signUpMessage: null,

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
                signUpMessage: payload.message
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

        case LOG_OUT:
            return {
                ...state,
                access: false,
                userId: null,
                userType: null,
                userName: null,
                logInMessage: null,
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

        case SORT_BY_DATE:
            const sortedTickets = [...state.userTickets]

            if (payload === "A") {
                sortedTickets.sort((a, b) => a.id - b.id)
            }

            if (payload === "D") {
                sortedTickets.sort((a, b) => b.id - a.id)
            }
            return {
                ...state,
                userTickets: sortedTickets
            }

        case SEARCH_BY_ID: {
            const ticketFinded = state.userTicketsCopy.find(ticket => ticket.id === Number(payload))
            return {
                ...state, 
                userTickets: [ticketFinded]
            }
        }
        default:
            return state
    }
}

export default rootReducer