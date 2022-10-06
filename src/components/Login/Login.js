import { Formik } from "formik";
import { connect } from 'react-redux';
import React from "react";
import { authMeHereThunk } from "../../Redux/Auth-reducer";
import * as Yup from 'yup';
import s from "./Login.module.css"
import { Navigate } from "react-router-dom";



function Login(props) {
    if(props.isAuth) {
        return <Navigate to="/profile"/>
    }
    const validationShema=Yup.object().shape({
        login: Yup.string().typeError().required("This field is required"),
        password: Yup.string().typeError().required("This field is required")
    })
    return (
        <div className="section">
            <h1>Login</h1>
            <Formik
                initialValues={{
                    login: '',
                    password: '',
                    rememberMe: false
                }}
                validateOnBlur
                onSubmit={(values, {setSubmitting, setStatus})=>{props.authMeHereThunk(values.login, values.password, values.rememberMe, setStatus); setSubmitting(false)}}
                validationSchema={validationShema}
            >
                {({values, handleChange, touched, errors, handleBlur, handleSubmit, status})=>{
                    return <div>
                        <p className={s.form}>
                            <input
                                type="text"
                                name="login"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.login}
                                placeholder="login"
                                style={errors.login&&touched.login?{border: "1px solid red"}:null}
                            />
                            {touched.login&&errors.login&&<p className={s.error}>{errors.login}</p>}
                        </p>
                        <p className={s.form}>
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                placeholder="password"
                                style={errors.password&&touched.password?{border: "1px solid red"}:null}
                            />
                            {touched.password&&errors.password&&<p className={s.error}>{errors.password}</p>}
                        </p>
                        <p>
                            <input
                                type="checkbox"
                                name="rememberMe"
                                onChange={handleChange}
                                value={values.rememberMe}
                            /> remember me
                              <div className={s.errorMessage}>{status}</div>
                        </p>
                        <p>
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className={!values.login||!values.password?"btn disabled": "btn"}
                                disabled={!values.login||!values.password}
                            >
                                Log in
                            </button>
                        </p>
                    </div>
                }}

            </Formik>
        </div>
    )
}

let mapStateToProps=(state)=>{
    return {
        isAuth: state.auth.isAuth
    }
}
 
export default connect(mapStateToProps, { authMeHereThunk })(Login)