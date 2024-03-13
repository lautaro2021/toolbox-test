import React from 'react'
import { Button } from 'react-bootstrap'
import useFetch from '../../hooks/useFetch'

function DetailedFilesButton() {
    const fetchFunction = useFetch('/data');

    const handleData = () => {
        fetchFunction();
    }

    return (
        <Button variant='secondary' onClick={handleData}>
            View detailed files
        </Button>
    )
}

export default DetailedFilesButton