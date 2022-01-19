import React from "react";
import {storeType} from '../../Redux/reduxStore'
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {resetPasswordTC} from "../../Redux/resetPassword-reducer";
import SuperInputText from "../Common/c1-SuperInputText/SuperInputText";
import SuperButton from "../Common/c2-SuperButton/SuperButton";
import styles from './resetPassword.module.css'

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

        <div className={styles.resetPasswordBlock}>

            <h1>Reset Password</h1>

            <form className={styles.resetPasswordForm} onClick={formik.handleSubmit}>

                {successText && successText}

                <SuperInputText
                    placeholder={'Email'}
                    {...formik.getFieldProps('email')}
                />

                {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}

                <SuperButton disabled={!formik.isValid || !formik.dirty} type={'submit'}>Send Instructions</SuperButton>

            </form>

        </div>
    )
}