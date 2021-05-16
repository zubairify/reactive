import { Component } from "react";

export default class NewTrain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tcode:0,
            name:'',
            source:'',
            destiny:''
        }
    }

    handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }

    onCancel() {
        this.props.onCancel();
    }

    onSave() {
        this.props.onSubmit(this.state);
    }
    
    render() {
        return (
            <table class="table table-dark">
                <tr><td>Code</td>
                <td><input name="tcode" value={this.state.tcode} required onChange={this.handleInput} /></td></tr>
                <tr><td>Name</td>
                <td><input name="name" value={this.state.name} required onChange={this.handleInput} /></td></tr>
                <tr><td>Source</td>
                <td><input name="source" value={this.state.source} required onChange={this.handleInput} /></td></tr>
                <tr><td>Destination</td>
                <td><input name="destiny" value={this.state.destiny} required onChange={this.handleInput} /></td></tr>
                <tr><td><button class="btn btn-primary" onClick={() => this.onSave()}>Save Train</button></td>
                    <td><button class="btn btn-warning" onClick={() => this.onCancel()}>Cancel Train</button></td></tr>
            </table>
        );
    }
}
