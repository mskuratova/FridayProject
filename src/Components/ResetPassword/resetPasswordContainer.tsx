import React, {useState} from "react";
import {storeType} from '../../Redux/reduxStore'
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {resetPasswordTC, setEmailAC} from "../../Redux/resetPassword-reducer";
import {ResetPassword} from "./ResetPassword";

export type FormValuesType = {
    email: string
    from: string
    message: string
}

export const ResetPasswordContainer = () => {
    const dispatch = useDispatch();
    const successText = useSelector<storeType, string>(state => state.resetPasswordReducer.info);
    const isLoading = useSelector<storeType, boolean>(state => state.resetPasswordReducer.loading);
    const isSent = useSelector<storeType, boolean>(state => state.resetPasswordReducer.isSent);
    const email = useSelector<storeType, string>(state => state.resetPasswordReducer.email);

    const formik = useFormik({
        initialValues: {
            email: '',
            from: 'From test Friday',
            message: "\n<div style=\"background-color: lime; padding: 15px\">\npassword recovery link: \n<a href='https://uladzislaupapliouka.github.io/newPassword/$token$'>link</a>\n</div>\n",
        },

        validate: (values) => {
            const errors: Partial<{ email: string }> = {};
            if (!values.email) {
                errors.email = 'Required'
            } else if (values.email.length < 3) {
                errors.email = 'Invalid email address';
            }
            return errors
        },

        onSubmit: values => {
            dispatch(resetPasswordTC(values));
            dispatch(setEmailAC(values.email))
            formik.resetForm();
        }
    })


    return (
        <>

            <ResetPassword
                successText={successText}
                formik={formik}
                isLoading={isLoading}
                isSent={isSent}
                email={email}

            />
        </>
    )

}