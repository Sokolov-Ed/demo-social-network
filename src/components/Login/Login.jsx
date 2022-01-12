import React from "react";
import classes from "./Login.module.css";
import { reduxForm, Field } from "redux-form";
import { Input } from "../Common/FormsControls/FormsControls";
import { required } from "../../Utils/Validators/Validator";
import { login } from "../../redux/authReducer";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import stylesError from "./../Common/FormsControls/FormsControls.module.css";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={classes.authorization}>
                <div className={classes.loginField}>
                    <div>
                        <Field name="email" component={Input} placeholder="email"
                            validate={[required]} className={classes.formInput} />
                    </div>
                    <div>
                        <Field name="password" component={Input} placeholder="password"
                            validate={[required]} type="password" className={classes.formInput} />
                    </div>
                    <div className={classes.checkboxField}>
                        <label className="checkbox">
                            <Field name="rememberMe" component="input" type="checkbox"/>
                            <div className="checkboxCheck"></div>
                            <span>Remember me</span>
                        </label>
                    </div>
                </div>
                <div className={classes.captchaField}>
                    {captchaUrl &&
                        <div>
                            <div className={classes.imgCaptcha}>
                                <img src={captchaUrl} />
                            </div>
                            <div>
                                <Field placeholder="Symbols from image" component={Input}
                                    name="captcha" validate={[required]} className={classes.formInput}/>
                            </div>
                        </div>}
                </div>
            </div>
            {error && <div className={stylesError.formSummaryError}>
                {error}
            </div>}
            <div className={classes.submit}>
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
        return <Redirect to='/profile/' />
    }
    return (
        <div className={classes.loginForm}>
            <div className={classes.title}>
                <h1>Login</h1>
            </div>
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