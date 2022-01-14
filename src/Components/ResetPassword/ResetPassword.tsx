import React, {useState} from "react";
import {storeType} from '../../Redux/reduxStore'
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {resetPasswordTC} from "../../Redux/resetPassword-reducer";

export const ResetPassword = () => {

    const dispatch = useDispatch();
    const successText = useSelector<storeType, string>(state => state.resetPasswordReducer.info);

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
            formik.resetForm();
        }
    })

    return (
        <div>
            <h1>ResetPassword</h1>
            <form onClick={formik.handleSubmit}>
                {successText && successText}
                <input
                    placeholder={'Email'}
                    {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
                <button disabled={!formik.isValid || !formik.dirty} type={'submit'}>Send Instructions</button>
            </form>
        </div>
    )
}