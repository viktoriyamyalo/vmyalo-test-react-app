import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { signUp, updateProfile } from '../actions/index';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import MdMailOutline from 'react-icons/lib/md/mail-outline';
import MdLock from 'react-icons/lib/md/lock';
import MdPerson from 'react-icons/lib/md/person';
import { Field, reduxForm } from 'redux-form';


class SignupPage extends Component {

    static contextTypes = {
        router: PropTypes.object
    }

    constructor(props) {
        super(props);
       
    }

    onSubmit(values) {
        
        this.props.signUp(values.email, values.password)
            .then(() => this.props.updateProfile(values.username))
            .then(() => this.context.router.push('/'))
            .catch(err => console.log(err.message));
    }

    render() {

        const { handleSubmit, pristine, reset, submitting } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <div className="form-group">
                <label htmlFor="signup-username"><MdPerson /> Username</label>

                <Field name="username" component={renderField} type="text" className="form-control" placeholder="Your future username" id="signup-username"/>
            </div>

            <div className="form-group">
            <label htmlFor="signup-email"><MdMailOutline /> E-mail</label>

            <Field name="email" component={renderField} type="email" className="form-control" placeholder="Your e-mail" id="signup-email"/>
            </div>

            <div className="form-group">
            <label htmlFor="signup-password"><MdLock /> Password</label>
            <Field name="password" component={renderField} type="password" className="form-control" placeholder="Your password" id="signup-password"/>
            </div>

            <div className="form-group">
            <label htmlFor="signup-repeat-password"><MdLock /> Repeat password</label>
            <Field name="repeatpassword" component={renderField} type="password" className="form-control" placeholder="Repeat password" id="signup-repeat-password"/>
            </div>

            <button type="submit" className="btn btn-default" disabled={submitting}>Sign Up</button>
            <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
        );
    }
}

const validate = values => {
    const errors = {}
    if (!values.email) {
      errors.email = 'E-mail required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.username) {
        errors.username = 'Username required'
    } else if (values.username.length > 16) {
        errors.username = 'Username is too long'
    }
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 8) {
      errors.password = 'Password too short';
    } else if (values.password !== values.repeatpassword) {
        errors.password = 'Passwords don\'t match';
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


SignupPage = connect(null, { signUp, updateProfile })(SignupPage);

export default reduxForm({
    form: 'signup-form',
    validate
})(SignupPage);
