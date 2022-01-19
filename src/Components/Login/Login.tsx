import React from "react";
import {useFormik} from "formik";
import SuperInputText from "../Common/c1-SuperInputText/SuperInputText";
import SuperCheckbox from "../Common/c3-SuperCheckbox/SuperCheckbox";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "../../Redux/profileReducer";
import {storeType} from "../../Redux/reduxStore";
import {useNavigate} from "react-router-dom";

export const Login = () => {

    const dispatch = useDispatch();

    const formik = useFormik({
            initialValues: {
                email: '',
                password: '',
                rememberMe: false
            },
            onSubmit: values => {
                dispatch(loginThunk({email: values.email, password: values.password, rememberMe: values.rememberMe}))
            }
        }
    )

    const user = useSelector((store: storeType) => store.ProfileReducer)

    const navigate = useNavigate();

    if (user.isLoggedIn) {
        navigate('/')
    }

    return (
        <div>

            <h1>Login</h1>

            <form onSubmit={formik.handleSubmit}>

                <label htmlFor="email">Email Address</label>

                <SuperInputText
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />

                <label htmlFor="password">Password</label>

                <SuperInputText
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />

                <label htmlFor="rememberMe">Remember Me</label>

                <SuperCheckbox
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    onChange={formik.handleChange}
                    checked={formik.values.rememberMe}
                />

                <button type="submit">Submit</button>

            </form>

        </div>
    )
}