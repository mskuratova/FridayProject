import React, {useMemo, useState} from "react";
import {NewPassword} from "./NewPassword";
import {useFormik} from "formik";
import {resetPasswordTC, setEmailAC, setNewPasswordTC} from "../../Redux/resetPassword-reducer";
import {Navigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {storeType} from "../../Redux/reduxStore";

export type FormikSetNewPasswordValuesType = {
    password: string
    resetPasswordToken: string
}

export const NewPasswordContainer = React.memo(() => {

    const [isPasswordShow, setIsPasswordShow] = useState<boolean>(true);
    const dispatch = useDispatch();
    const isPasswordChanged = useSelector<storeType, boolean>(state => state.resetPasswordReducer.isPasswordChanged);

    const changePasswordType = () => {
        setIsPasswordShow(!isPasswordShow);
    }

    const {token} = useParams();
    console.log('token is ' + token);


    const formik = useFormik({
        initialValues: {
            password: '',
            resetPasswordToken: token || '',
        },

        validate: (values) => {
            const errors: Partial<{ password: string }> = {};
            if (!values.password) {
                errors.password = 'Required'
            } else if (values.password.length < 3) {
                errors.password = 'Invalid password';
            }
            return errors
        },

        onSubmit: values => {
            console.log(values)
            dispatch(setNewPasswordTC(values))
            formik.resetForm();
        },
    })

    if(isPasswordChanged){
        return <Navigate to={'/login'}/>
    }

    return (
        <NewPassword
            formik={formik}
            changePasswordType={changePasswordType}
            isPasswordShow={isPasswordShow}
        />
    )
})