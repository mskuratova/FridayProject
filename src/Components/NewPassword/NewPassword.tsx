import React from "react";
import s from './newPassword.module.css';
import {FormikProps} from "formik";
import {FormikSetNewPasswordValuesType} from "./NewPasswordContainer";

type PropsType = {
    formik: FormikProps<FormikSetNewPasswordValuesType>
    changePasswordType: () => void
    isPasswordShow: boolean
}

export const NewPassword = ({formik, changePasswordType, isPasswordShow}: PropsType) => {



    return (
        <div className={s.newPassword}>
            <h2>Create New Password</h2>
            <form className={s.form} onSubmit={formik.handleSubmit}>
                <div className={s.inputBox}>
                    <input
                        type={isPasswordShow ? 'password' : 'text'}
                        placeholder={'password'}
                        {...formik.getFieldProps('password')}
                    />
                    <button type={'button'} className={s.changeTypeBtn} onClick={changePasswordType}>o</button>
                </div>

                {formik.touched.password && formik.errors.password &&
                    <div className={s.errorText}>{formik.errors.password}</div>}

                <button className={s.sendBtn} type={'submit'} disabled={!formik.isValid || !formik.dirty}>
                    Create new password
                </button>
            </form>

        </div>
    )
}