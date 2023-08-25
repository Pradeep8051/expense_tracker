import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function ProtectedRoute({ children }) {

    const navigate = useNavigate();
    const auth = localStorage?.getItem("userId")

    useEffect(() => {
        if (!auth) {
            navigate("/")
        }
    }, [auth])
    return (
        <>
            {auth ? children : ""}
        </>
    )
}

export default ProtectedRoute