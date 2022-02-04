import React from "react";
import {FormikProps} from "formik";
import {FormValuesType} from "./resetPasswordContainer";
import s from './resetPassword.module.css'
import Logo from '../../assets/images/It-incubator.png'
import EmailIcon from '../../assets/images/email-icon.svg'

type PropsType = {
    successText: string
    formik: FormikProps<FormValuesType>
    isLoading: boolean
    isSent: boolean
    email: string
}

export const ResetPassword = ({
                                  successText,
                                  formik,
                                  isLoading,
                                  isSent,
                                  email,
                              }: PropsType): JSX.Element => {


    return (
        <div className={s.container}>

            <div className={s.resetFormField}>

                <div className={s.resetFormContainer} style={{opacity: isLoading ? 0.5 : 1}}>

                    <img src={Logo} alt="logo"/>

                    {!isSent ? <>
                            <h2 className={s.title}>Forgot your password?</h2>
                            <form className={s.form} onSubmit={formik.handleSubmit}>

                                <div className={s.inputBox}>
                                    <span className={s.statusText}>{successText && successText}</span>
                                    <input

                                        className={s.input}
                                        placeholder={'Email'}
                                        {...formik.getFieldProps('email')
                                        }
                                    />

                                    {formik.touched.email && formik.errors.email &&
                                        <div className={s.errorText}>{formik.errors.email}</div>}
                                </div>
                                <p className={s.text}>
                                    Enter your email address and we will send you further instructions
                                </p>

                                <button className={s.buttonSend} disabled={!formik.isValid || !formik.dirty || isLoading}
                                        type={'submit'}>Send Instructions
                                </button>
                            </form>
                            <div className={`${s.ldsRing} ${isLoading ? s.displayNone : null}`}
                                 style={{display: isLoading ? 'block' : 'none'}}>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </> :
                        <>
                            <img className={s.emailIcon} src={EmailIcon} alt="icon"/>
                            <h2 className={s.title}>Check Email</h2>
                            <p className={s.text}>
                                We’ve sent an Email with instructions to <br/> {email}
                            </p>
                        </>
                    }

                </div>
            </div>
        </div>
    )
}