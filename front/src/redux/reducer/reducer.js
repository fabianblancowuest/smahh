import { GET_ALL_TICKETS, GET_TICKET_DETAIL, GET_USER_TICKETS, LOG_IN, RISE_TICKET, SIGN_UP, UPDATE_TICKET } from "../actions/types"

const inicialState = {
    logInMessage: null,
    access: false,
    userId: null,
    userType: null,
    userName: null,

    userTickets: [],
    userTicketsCopy: [],

    ticketDetail: {}
    
}

const rootReducer = (state = inicialState, actions) => {

    const {type, payload} = actions

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
            }
            
        case GET_TICKET_DETAIL:
            return {
                ...state,
                ticketDetail: {...payload.ticket}
            }

        default:
            return state
    }
}

export default rootReducer