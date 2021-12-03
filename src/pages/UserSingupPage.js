import React from "react";
import {signup} from '../api/apiCalls';
import Input from '../components/Input';

class UserSignupPage extends React.Component {

    state = {
        username: null,
        displayName: null,
        password: null,
        passwordRepeat: null,
        pendingApiCall: false,
        errors: {}
    };

    onChange = event => {
        const {name, value} = event.target;
        const errors = {...this.state.errors}
        errors[name] = undefined
        this.setState({
            [name]: value,errors
        })
    };

    onClickSignup = async event => {
        event.preventDefault();

        const {username, displayName, password} = this.state;

        const body = {
            username,
            displayName,
            password
        };
        this.setState({pendingApiCall: true});

        try{
            const response = await  signup(body);
        } catch (error){
            if(error.response.data.validationErrors){
                this.setState({errors: error.response.data.validationErrors });
            }
        }
        this.setState({pendingApiCall: false});
    };

    render() {
        const { pendingApiCall,errors} = this.state;
        const {username, displayName} = errors;

        return (
            <div className="container">
                <form>
                    <h1 className="text-center">Sign Up</h1>
                    <Input name="username" label="Username" error ={username} onChange ={this.onChange}/>
                    <Input name="displayName" label="Display Name" error ={displayName} onChange ={this.onChange}/>
                    <div className="form-group">
                        <label>Password</label>
                        <input name="password" type="password" onChange={this.onChange} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Password Repeat</label>
                        <input name="passwordRepeat" type="password" onChange={this.onChange} className="form-control"/>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary"
                                onClick={this.onClickSignup}
                                disabled={pendingApiCall}
                        >
                            {pendingApiCall && <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>}Sign Up
                        </button>
                    </div>
                </form>
            </div>


        )
    }
}

export default UserSignupPage;