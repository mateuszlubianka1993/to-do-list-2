import React from 'react';
import './style/Task.css';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardHeader, MDBCardFooter, MDBBtn } from
"mdbreact";

const Task = (props) => {
    return (
        <div key={props.index} className="task-box">
            <MDBCard className="text-center task-card">
                <MDBCardHeader className="card-header-footer" color="success-color">Task number {props.index + 1}</MDBCardHeader>
                <MDBCardBody className="card-body-box">
                    <MDBCardTitle>{props.task}</MDBCardTitle>
                    <MDBBtn color="danger" size="sm">
                        Delete
                    </MDBBtn>
                </MDBCardBody>
                <MDBCardFooter className="card-header-footer" color="success-color">{props.date}</MDBCardFooter>
            </MDBCard>
        </div>
    );
};

export default Task;
