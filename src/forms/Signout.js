import React from "react";
import { database } from "../Config/config";
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom";

const Signout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(database).then(() => {
            console.log("User logged out");
            localStorage.removeItem("userId");
            navigate("/")
        })
            .catch((error) => {
                console.error("Logout error:", error);
            });
    };

    return (
        <div>
            <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Signout;
