import { Component } from "react";

export default class TrainDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table class="table table-dark">
                <tr><td>Code</td><td>{this.props.train.tcode}</td></tr>
                <tr><td>Name</td><td>{this.props.train.name}</td></tr>
                <tr><td>Source</td><td>{this.props.train.source}</td></tr>
                <tr><td>Destination</td><td>{this.props.train.destiny}</td></tr>
                <tr>
                    <td><button class="btn btn-info" onClick={() => this.onEdit()}>Edit</button></td>
                    <td><button class="btn btn-warning" onClick={() => this.onDelete()}>Delete</button></td>
                </tr>
            </table>
        );
    }

    onEdit() {
        this.props.onEdit();
    }
    
    onDelete() {
        const t = this.props.train;
        if(window.confirm("Are you sure to delete Train: " + t.name + "?"))
            this.props.onDelete(t.tcode);
    }
}
