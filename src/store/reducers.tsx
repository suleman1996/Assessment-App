import { ADD_FAVORITE, GET_PRODUCTS, REMOVE_FAVORITE, SET_LOADING } from "./actions";

const initialState = {
    favoritesList: [],
    products: [],
    loading: false
}

const FavoriteReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                favoritesList: [...state.favoritesList, action.payload]
            };
        case REMOVE_FAVORITE:
            return {
                ...state,
                favoritesList: state.favoritesList.filter((item) => item.id !== action.payload)
            };
        case GET_PRODUCTS:
            return { ...state, products: action.payload };
        case SET_LOADING:
            return { ...state, loading: action.payload }
        default:
            return state;
    }
}
export default FavoriteReducer