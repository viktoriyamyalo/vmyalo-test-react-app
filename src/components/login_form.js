import React, { Component } from 'react';
import { signIn } from '../actions/index';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import MdMailOutline from 'react-icons/lib/md/mail-outline';
import MdLock from 'react-icons/lib/md/lock';
import { connect } from 'react-redux';

class LoginForm extends Component {

onSubmit(values) {  

    this.props.signIn(values.email, values.password);
}

    render() {

        const { handleSubmit, pristine, reset, submitting } = this.props;

        return (
            <form className="navbar-form navbar-right" onSubmit={handleSubmit(this.onSubmit.bind(this))}>

            <div className="form-group">
                <label htmlFor="login-email"> <MdMailOutline /> E-mail </label> <Field name="email" component={renderField} type="email" className="form-control" placeholder="Your e-mail" id="login-email"/>
            </div>

            <div className="form-group">
                
                <label htmlFor="login-password"><MdLock />Password</label><Field name="password" component={renderField}type="password" className="form-control" placeholder="Your password" id="login-password"/>
            </div>

            <button type="submit" className="btn btn-primary" disabled={submitting}>
            Sign In
            </button>

            <Link to="/signup" className="btn btn-default">Sign Up</Link>

        </form>
        );
    }
}

const validate = values => {
    const errors = {}
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    } if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 8) {
      errors.password = 'Password too short';
    }
    return errors;
  };

const renderField = ({
    input,
    type,
    meta: { touched, error, warning },
    id
  }) => (
      <div>
        <input {...input} type={type} id={id} />
        {touched && error && <div className="alert alert-danger">{error}</div>}
      </div>
  );

LoginForm = connect(null, { signIn })(LoginForm);

export default reduxForm({
    form: 'login-form',
    validate,
    onSubmit:(values)=>{
        console.log('values', values);
    }})(LoginForm);