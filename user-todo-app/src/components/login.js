import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import UserService from "../services/user-service";

class Login extends Component {
    constructor(props) {
        super(props);
        this.service = new UserService();
        this.state = {
            email:'',
            password:'',
            user:[],
            errmsg:''
        }
    }
    
    handleInput = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    onLogin = () => {
        this.service.authenticate(this.state.email, this.state.password).then(resp => {
            if(resp.status === 200) {
                this.setState({
                    user:resp.data
                });
                if(this.state.user) {
                    localStorage.setItem("user", JSON.stringify(this.state.user));
                    this.props.history.push({pathname:"/dashboard"});
                }
            }
        }).catch(error => {
            this.setState({
                errmsg:"Invalid Email or Password",
                password:''
            });
        });
    }

    render() {
        return (
            <form>
                <div className="alert alert-danger">{this.state.errmsg}</div>
                Email: <input value={this.state.email} onChange={this.handleInput} name="email" type="email" /><br />
                Password: <input value={this.state.password} onChange={this.handleInput} name="password" type="password" /><br />
                <button type="button" onClick={this.onLogin}>Login</button>
            </form>
        );
    }
}

export default withRouter (Login);