import { useDispatch} from 'react-redux'
import { fetchData, fetchDataError, fetchLoading } from '../redux/actions/actions';
import { BASE_URL } from '../utils/url';

function useFetch(url) {
    const dispatch = useDispatch();

    const getFiles = async () => {
        dispatch(fetchLoading())

        try{
            const res = await fetch(`${BASE_URL}${url}`)

            if(!res.ok){
                return dispatch(fetchDataError(res.status))
            }

            const data = await res.json();
            dispatch(fetchData(data))
        } catch(error){
            dispatch(fetchDataError(error))
        }
    }

    return getFiles;
}

export default useFetch