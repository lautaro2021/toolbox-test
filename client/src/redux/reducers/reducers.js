import { FETCH_DATA, FETCH_ERROR, FETCH_LOADING } from "../actions/actions";

const initialState = {
    data: null,
    error: null,
    loading: true,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_LOADING: 
            return {
                ...state,
                loading: true
            }
        case FETCH_DATA:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null,
            }
        case FETCH_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        default:
            return state
    }
}

export default reducer;