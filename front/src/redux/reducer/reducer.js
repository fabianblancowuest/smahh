import { logIn } from "../actions/actions"

const inicialState = {
    access: false,
    userType: null,
    userTickets: [],
    userTicketsCopy: [],
    
}

const rootReducer = (state = inicialState, actions) => {

    const {type, payload} = actions

    switch (type) {
        case logIn:
            return {
                ...state,
                userType: payload.userType
            }

        // case "EXAMPLE TWO":
        //     return {
        //         ...state,
        //         userTickets: payload
        //     }

        default:
            return state
    }
}

export default rootReducer