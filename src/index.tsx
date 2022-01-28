import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes} from "react-router-dom";
import {Profile} from "./Components/Profile/Profile";
import {Registration} from "./Components/Registration/Registration";
import {TestPage} from "./Components/TastPage/TestPage";
import {NewPassword} from "./Components/NewPassword/NewPassword";
import {ResetPassword} from "./Components/ResetPassword/ResetPassword";
import {Login} from "./Components/Login/Login";
import {Page404} from "./Components/Page404/Page404";
import {Provider} from "react-redux";
import {reduxStore} from "./Redux/reduxStore";
import {Table} from "./Components/Table/Table";

ReactDOM.render(
    <React.StrictMode>
       <Provider store={reduxStore}>
           <HashRouter>
               <Routes>
                   <Route index element={<Profile/>}/>
                   <Route path={"registration"} element={<Registration/>}/>
                   <Route path={"testPage"} element={<TestPage/>}/>
                   <Route path={"newPassword"} element={<NewPassword/>}/>
                   <Route path={"resetPassword"} element={<ResetPassword/>}/>
                   <Route path={"login"} element={<Login/>}/>
                   <Route path={"table"} element={<Table/>}/>
                   <Route path={"*"} element={<Page404/>}/>
               </Routes>
           </HashRouter>
       </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
