import React from 'react'
import {NavLink} from "react-router-dom";
import {LOGIN_PATH, REGISTER_PATH, RESET_PASSWORD_PATH, TABLE_PATH} from "./Routes";

const Header: React.FC = () => {

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexWrap: "wrap",
        }}>
            <NavLink to={LOGIN_PATH}>Login</NavLink>
            <NavLink to={REGISTER_PATH}>Register</NavLink>
            <NavLink to={RESET_PASSWORD_PATH}>Reset password</NavLink>
            <NavLink to={TABLE_PATH}>Table</NavLink>
        </div>
    )
};

export default Header