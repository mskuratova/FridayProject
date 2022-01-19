import React from "react";
import {useFormik} from "formik";
import SuperInputText from "../Common/c1-SuperInputText/SuperInputText";
import SuperCheckbox from "../Common/c3-SuperCheckbox/SuperCheckbox";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "../../Redux/profileReducer";
import {storeType} from "../../Redux/reduxStore";
import {useNavigate} from "react-router-dom";
import SuperButton from "../Common/c2-SuperButton/SuperButton";
import styles from './login.module.css'
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
        <div className={styles.loginBlock}>

            <h1>Login</h1>

            <form className={styles.loginForm} onSubmit={formik.handleSubmit}>

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

                <SuperButton type="submit">Submit</SuperButton>

            </form>

        </div>
    )
}