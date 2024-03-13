import React from "react";
import { Button } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";

function ListButton() {
    const fetchFunction = useFetch('/list')

    const handleData = () => {
        fetchFunction()
    }

    return (
        <Button variant="primary" onClick={handleData}>
            View files list
        </Button>
    )
}

export default ListButton