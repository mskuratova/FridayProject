import React, {useState} from "react";
import {useFormik} from "formik";
import {authAPI} from "../../API/auth-api";

export const ResetPassword = () => {

    const [statusText, setStatusText] = useState<string>('');
    const [error, setError] = useState<boolean>(false);


    const formik = useFormik({
        initialValues: {
            email: '',
            from: 'From test Friday',
            // message: 'Test Text',
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
            authAPI.resetPassword(values)
                .then(res => {
                    if (res.status === 200) {
                        console.log(res);
                        setStatusText(res.data.info)
                    }
                }).catch(err => {
                setError(true);
                setStatusText('Email Not Found');

            })
            formik.resetForm();
        }
    })

    return (
        <div>
            <h1>ResetPassword</h1>
            <form onClick={formik.handleSubmit}>
                {statusText}
                <input
                    placeholder={'Email'}
                    {...formik.getFieldProps('email')}
                />
                <button disabled={!formik.isValid || !formik.dirty} type={'submit'}>Send Instructions</button>
            </form>
        </div>
    )
}