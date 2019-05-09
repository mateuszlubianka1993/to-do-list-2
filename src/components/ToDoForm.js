import React from 'react';
import { MDBFormInline, MDBBtn } from "mdbreact";
import './style/ToDoForm.css';

class ToDoForm extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    };

    render () {
        const clear = () => {
            this.inputRef.current.value = '';
        };

        return (
            <div className="form-container">
                <MDBFormInline onSubmit={this.props.addNewTask} className="md-form mr-auto mb-4 search-box">
                    <input onChange={this.props.onInputChange} ref={this.inputRef} className="form-control mr-sm-2"  type="text" placeholder="Add next task" aria-label="Search" />
                    <MDBBtn onClick={clear} type="submit" rounded size="sm" color="success">Add task</MDBBtn>
                </MDBFormInline>
                <MDBBtn rounded color="danger" size="sm">Delete All</MDBBtn>
                <MDBBtn rounded color="danger" size="sm">Delete Last</MDBBtn>
            </div>
        );
    };
};

export default ToDoForm;
