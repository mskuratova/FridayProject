import React from "react";
import {useFormik} from "formik";
import SuperInputText from "../Common/c1-SuperInputText/SuperInputText";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {registerThunk} from "../../Redux/registerReducer";
import {storeType} from "../../Redux/reduxStore";
import SuperButton from "../Common/c2-SuperButton/SuperButton";
import styles from './registration.module.css'
import {FormControl} from "@mui/material";;

type ErrorType = {
    email: string
    password: string
    confirmPassword: string
}

export const Registration = () => {

    const dispatch = useDispatch();

    const formik = useFormik({
            initialValues: {
                email: '',
                password: '',
                confirmPassword: ''
            },
            validate: (values) => {
                const errors: Partial<ErrorType> = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                    errors.email = 'Invalid email address';
                }
                if (!values.password) {
                    errors.password = 'Required';
                } else if (values.password.length < 7) {
                    errors.password = 'Invalid password';
                }
                if (!values.confirmPassword) {
                    errors.confirmPassword = 'Required';
                } else if (values.confirmPassword !== values.password) {
                    errors.confirmPassword = 'Passwords must match';
                }
                return errors;
            },
            onSubmit: values => {
                dispatch(registerThunk({email: values.email, password: values.password}))
                formik.resetForm()
            }
        }
    )
    const user = useSelector((store: storeType) => store.RegisterReducer)

    const navigate = useNavigate();

    let disabled = !formik.errors.email && !formik.errors.password && !formik.errors.confirmPassword

    if (user.isRegistration) {
        navigate('/login')
    }

    return (

        <div className={styles.registrationBlock}>

            <h1>Registration</h1>

            <form onSubmit={formik.handleSubmit} className={styles.registrationForm}>
                <FormControl>
                <label htmlFor="email">Email Address</label>

                <SuperInputText
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />

                {formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div> : null}

                <label htmlFor="password">Password</label>

                <SuperInputText
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />

                {formik.errors.password ? <div style={{color: 'red'}}>{formik.errors.password}</div> : null}

                <label htmlFor="confirmPassword">Confirm password</label>

                <SuperInputText
                    id="confirmPassword"
                    name="confirmPassword"
                    type="Password"
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                />

                {formik.errors.confirmPassword ?
                    <div style={{color: 'red'}}>{formik.errors.confirmPassword}</div> : null}

                <SuperButton type="submit"
                             disabled={!disabled}>Register
                </SuperButton>
                </FormControl>
            </form>

        </div>
    )
}