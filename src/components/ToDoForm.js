import React from 'react';
import { MDBFormInline, MDBBtn } from "mdbreact";
import './style/ToDoForm.css';

const ToDoForm = (props) => {
    return (
        <div className="form-container">
            <MDBFormInline className="md-form mr-auto mb-4 search-box">
                <input onChange={props.onInputChange} className="form-control mr-sm-2"  type="text" placeholder="Add next task" aria-label="Search" />
                <MDBBtn rounded size="sm" color="success">Add task</MDBBtn>
            </MDBFormInline>
            <MDBBtn rounded color="danger" size="sm">Delete All</MDBBtn>
            <MDBBtn rounded color="danger" size="sm">Delete Last</MDBBtn>
        </div>
    );
};

export default ToDoForm;
