import React from "react";
import { Button } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";

function ButtonComponent({ url, variant, children }) {
    console.log(url)
    const fetchFunction = useFetch(url)

    const handleData = () => {
        fetchFunction()
    }

    return (
        <Button variant={variant} onClick={handleData}>
            {children}
        </Button>
    )
}

export default ButtonComponent