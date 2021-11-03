import { Component } from "react";
import { withRouter} from "react-router-dom";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:[]
        }
    }

    componentDidMount() {
        this.checkLogin();
    }

    checkLogin = () => {
        const localData = JSON.parse(localStorage.getItem("user"));
        console.log("LocalData: " + localData);
        this.setState({
            user:localData
        });
        if(!this.state.user) 
            this.props.history.push({pathname:"/login"});
    }

    logout = () => {
        localStorage.clear();
        this.setState({
            user:[]
        });
        this.props.history.push({pathname:"/login"});
    }

    render() {
        return (
            <>
                <h1>Dashboard Page</h1>
                <h2>Logged in : {this.state.user.name}</h2>
                <button onClick={this.logout}>Logout</button>
            </>
        );
    }
}

export default withRouter (Dashboard);