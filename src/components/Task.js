import React from 'react';
import './style/Task.css';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBCardFooter, MDBBtn, MDBContainer } from
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
                    {/* <MDBCardFooter color="success-color">{props.date}</MDBCardFooter> */}
                </MDBCardBody>
                <MDBCardFooter className="card-header-footer" color="success-color">2 days ago</MDBCardFooter>
            </MDBCard>
        </div>
    );
};

export default Task;