export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_ERROR = 'FETCH_ERROR';
export const FETCH_LOADING = 'FETCH_LOADING';

export const fetchData = (data) => ({
    type: FETCH_DATA,
    payload: data
})

export const fetchDataError = (error) => ({
    type: FETCH_ERROR,
    payload: error
})

export const fetchLoading = () => ({
    type: FETCH_LOADING
})