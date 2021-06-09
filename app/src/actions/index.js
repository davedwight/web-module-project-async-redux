import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getDog = () => {
    return (dispatch) => {
        dispatch(fetchStart());
        axios.get(`https://dog.ceo/api/breeds/image/random`)
            .then(res => {
                console.log("Axios inside actions: ", res.data)
                dispatch(fetchSuccess(res.data.message))
            })
            .catch(err => {
                console.log("Error: ", err)
                dispatch(fetchFail(err))
            })
        }
}

export const fetchStart = () => {
    return({type: FETCH_START});
}

export const fetchSuccess = (image) => {
    return({type: FETCH_SUCCESS, payload: image});
}

export const fetchFail = (error) => {
    return({type: FETCH_FAIL, payload: error});
}