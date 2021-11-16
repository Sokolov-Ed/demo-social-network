import React from "react";
import classes from "./Login.module.css";
import { reduxForm, Field } from "redux-form";
import { Input } from "../Common/FormsControls/FormsControls";
import { required } from "../../Utils/Validators/Validator";
import { login } from "../../redux/authReducer";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import stylesError from "./../Common/FormsControls/FormsControls.module.css"
import { useEffect } from "react";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder="email" name="email" component={Input}
                    validate={[required]} />
            </div>
            <div>
                <Field placeholder="Password" name="password" component={Input}
                    validate={[required]} type="password" />
            </div>
            <div>
                <Field component={Input} name="rememberMe" type="checkbox" /> remember me
            </div>
            {error && <div className={stylesError.formSummaryError}>
                {error}
            </div>}
            <div>
                {captchaUrl &&
                    <div>
                        <div className={classes.imgCaptcha}>
                            <img src={captchaUrl} />
                        </div>
                        <div>
                            <Field placeholder="Symbols from image" component={Input}
                                name="captcha" validate={[required]}/>
                        </div>
                    </div>}
            </div>
            <div>
                <button>Log In</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe,
            formData.captcha, "login");
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return (
        <div className={classes.loginText}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, { login })(Login);