import './login.css';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {authAction} from './../../actions/authAction';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        console.log(props,"state")
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(event, "event");
        console.log(this.props, "props");
        this.props.dispatch(authAction(this.state))

    }
    render() {
        const { loginSuccess } =this.props
        console.log(loginSuccess,this.props,"loginsuccess")
        return (
            <div className="container login-form">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email or Username</label>
                        <input
                            type="text"
                            className="form-control"
                            aria-describedby="emailHelp"
                            onChange={(event) => this.setState({username: event.target.value})}
                            placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            onChange={(event) => this.setState({password: event.target.value})}
                            placeholder="Password"/>
                    </div>
                    <button type="submit" className="form-control full-width btn-primary">login</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProp = dispatch => {
    return {dispatch}
}

const mapStateToProps = (state) => {
    console.log(state,'state')
    return {
        loginSuccess:state.authReducer.loginSuccess
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(Login);
