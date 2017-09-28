import React from 'react';
import {Field, reduxForm} from 'redux-form'

const Login = ({handleSubmit, pristine, reset, submitting}) => (<form onSubmit={handleSubmit}>
    <h1>Login</h1>
    <Field name="username" component="input" type="text" placeholder="Username"/>
    <Field name="password" component="input" type="text" placeholder="Password"/>
    <button type="submit" disabled={pristine || submitting}>Login</button>
    <button type="button" disabled={pristine || submitting} onClick={reset}>Reset</button>
</form>)

export default reduxForm({form: 'login'})(Login);