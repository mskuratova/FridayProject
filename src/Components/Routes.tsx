import React from 'react'
import {Navigate, Route} from "react-router-dom";

export const LOGIN_PATH = '/login';
export const REGISTER_PATH = '/registration';
export const RESET_PASSWORD_PATH = '/resetPassword';
export const TABLE_PATH = '/table';

const Routes: React.FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Navigate to={LOGIN_PATH}/>}/>
            <Route path={LOGIN_PATH} element={<Navigate to={LOGIN_PATH}/>}/>
            <Route path={REGISTER_PATH} element={<Navigate to={REGISTER_PATH}/>}/>
            <Route path={RESET_PASSWORD_PATH} element={<Navigate to={RESET_PASSWORD_PATH}/>}/>
            <Route path={TABLE_PATH} element={<Navigate to={TABLE_PATH}/>}/>
        </Routes>
    );
};

export default Routes;