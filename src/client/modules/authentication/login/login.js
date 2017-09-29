import React from 'react';
import {Field, reduxForm} from 'redux-form';
import asyncValidate from "./asyncValidate";
import validate from "./validate";


const renderField = ({
                         input,
                         label,
                         type,
                         meta: {asyncValidating, touched, error}
                     }) =>
    <div><label>{label}</label>
        <div className={asyncValidating ? 'async-validating' : ''}>
            <input {...input} type={type} placeholder={label}/>
            {touched &&
            error &&
            <span>
          {error}
        </span>}
        </div>
    </div>


const Login = ({handleSubmit, pristine, reset, submitting}) => (<form onSubmit={handleSubmit}>
    <h1>Login</h1>
    <Field name="username" component={renderField} type="text" label="Username"/>
    <Field name="password" component={renderField} type="text" label="Password"/>
    <button type="submit" disabled={pristine || submitting}>Login</button>
    <button type="button" disabled={pristine || submitting} onClick={reset}>Reset</button>
</form>)

export default reduxForm({
    form: 'login',
    validate,
    asyncValidate,
    asyncBlurFields: ['username']
})(Login);