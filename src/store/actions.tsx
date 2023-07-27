import { getListApi } from "../utilis/Api/Api_controller";

export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const SET_LOADING = 'SET_LOADING';

export const addFavorites = (item: any) => ({
    type: ADD_FAVORITE,
    payload: item
})


export const removeFavorites = (id: any) => ({
    type: REMOVE_FAVORITE,
    payload: id,
})

export const setLoading = (loading: boolean) => ({
    type: SET_LOADING,
    payload: loading
})

export const getProducts = () => {
    try {
        return async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
            dispatch(setLoading(true));
            const result = await getListApi();
            const json = await result?.data;
            if (json) {
                dispatch({
                    type: GET_PRODUCTS,
                    payload: json,
                })
            } else {
                console.log('Unable to fetch')
            }
            dispatch(setLoading(false))
        }
    } catch (error) {
        console.log(error);
        dispatch(setLoading(false))
    }
}