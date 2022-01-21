import React from "react";
import Header from "../Header";
import {useSelector} from "react-redux";
import {storeType} from "../../Redux/reduxStore";
import {useNavigate} from "react-router-dom";

export const Profile = () => {
    const isLoggedIn = useSelector((store: storeType) => store.ProfileReducer.isLoggedIn)

    const navigate = useNavigate();
    if (!isLoggedIn) {
        navigate('/login')
    }
    return (
        <div>
            <Header/>
            <h1>Profile</h1>
        </div>
    )
}