import React from "react";
<<<<<<< HEAD
import {signup,changeLanguage} from '../api/apiCalls';
import Input from '../components/Input';
import {withTranslation} from 'react-i18next';
=======
import { signup } from "../api/apiCalls";
import Input from "../components/Input";
>>>>>>> 832d93cdec5afdedaf3fe309d627aecc0d9f379a

class UserSignupPage extends React.Component {
  state = {
    username: null,
    displayName: null,
    password: null,
    passwordRepeat: null,
    pendingApiCall: false,
    errors: {},
  };

<<<<<<< HEAD
    state = {
        username: null,
        displayName: null,
        password: null,
        passwordRepeat: null,
        pendingApiCall: false,
        errors: {}
    };

    onChange = event => {
        const {t} = this.props;
        const {name, value} = event.target;
        const errors = {...this.state.errors}
        errors[name] = undefined;

        if (name === 'password' || name === 'passwordRepeat') {
            if (name === 'password' && value !== this.state.passwordRepeat) {
                errors.passwordRepeat = t('Password mismatch');
            } else if (name === 'passwordRepeat' && value !== this.state.password) {
                errors.passwordRepeat = t('Password mismatch');
            } else {
                errors.passwordRepeat = undefined;
            }
        }

        this.setState({
            [name]: value, errors
        })
    };
=======
  onChange = (event) => {
    const { name, value } = event.target;
    const errors = { ...this.state.errors };
    errors[name] = undefined;
>>>>>>> 832d93cdec5afdedaf3fe309d627aecc0d9f379a

    if (name === "password" || name === "passwordRepeat") {
      if (name === "password" && value !== this.state.passwordRepeat) {
        errors.passwordRepeat = "Password mismatch";
      } else if (name === "passwordRepeat" && value !== this.state.password) {
        errors.passwordRepeat = "Password mismatch";
      } else {
        errors.passwordRepeat = undefined;
      }
    }
    this.setState({
      [name]: value,
      errors,
    });
  };

  onClickSignup = async (event) => {
    event.preventDefault();

    const { username, displayName, password } = this.state;

    const body = {
      username,
      displayName,
      password,
    };
    this.setState({ pendingApiCall: true });

<<<<<<< HEAD
    onChangeLanguage = language => {
        const {i18n} = this.props;
        i18n.changeLanguage(language);
        changeLanguage(language);
    }

    render() {
        const {pendingApiCall, errors} = this.state;
        const {username, displayName, password, passwordRepeat} = errors;
        const {t} = this.props;
        return (
            <div className="container">
                <form>
                    <h1 className="text-center">{t('Sign Up')}</h1>
                    <Input name="username" label={t("Username")} error={username} onChange={this.onChange}/>
                    <Input name="displayName" label={t("Display Name")} error={displayName} onChange={this.onChange}/>
                    <Input name="password" label={t("Password")} error={password} onChange={this.onChange}
                           type="password"/>
                    <Input name="passwordRepeat" label={t("Password Repeat")} error={passwordRepeat}
                           onChange={this.onChange}
                           type="password"/>
                    <div className="text-center">
                        <button className="btn btn-primary" onClick={this.onClickSignup}
                                disabled={pendingApiCall || passwordRepeat !== undefined}>
                            {pendingApiCall && <span className="spinner-border spinner-border-sm"/>} {t('Sign Up')}
                        </button>
                    </div>
                    <div>
                        <img src='https://www.countryflags.io/tr/flat/24.png' alt="Turkish Flag" onClick={() => this.onChangeLanguage('tr') } style={{cursor:'pointer'}}/>
                        <img src="https://www.countryflags.io/us/flat/24.png" alt="USA Flag" onClick={() => this.onChangeLanguage('en') } style={{cursor:'pointer'}}/>
                    </div>
                </form>
            </div>
=======
    try {
      const response = await signup(body);
    } catch (error) {
      if (error.response.data.validationErrors) {
        this.setState({ errors: error.response.data.validationErrors });
      }
    }
    this.setState({ pendingApiCall: false });
  };
>>>>>>> 832d93cdec5afdedaf3fe309d627aecc0d9f379a

  render() {
    const { pendingApiCall, errors } = this.state;
    const { username, displayName, password, passwordRepeat } = errors;

    return (
      <div className="container">
        <form>
          <h1 className="text-center">Sign Up</h1>
          <Input
            name="username"
            label="Username"
            error={username}
            onChange={this.onChange}
          />
          <Input
            name="displayName"
            label="Display Name"
            error={displayName}
            onChange={this.onChange}
          />
          <Input
            name="password"
            label="Password"
            error={password}
            onChange={this.onChange}
            type="password"
          />
          <Input
            name="passwordRepeat"
            label="Password Repeat"
            error={passwordRepeat}
            onChange={this.onChange}
            type="password"
          />
          <div className="text-center">
            <button
              className="btn btn-primary"
              onClick={this.onClickSignup}
              disabled={pendingApiCall || passwordRepeat !== undefined}
            >
              {pendingApiCall && (
                <span className="spinner-border spinner-border-sm" />
              )}{" "}
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

<<<<<<< HEAD
const UserSignupPageWithTranslation = withTranslation()(UserSignupPage);

export default UserSignupPageWithTranslation;
=======
export default UserSignupPage;
>>>>>>> 832d93cdec5afdedaf3fe309d627aecc0d9f379a
