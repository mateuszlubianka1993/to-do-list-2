import React from 'react';
import Task from './Task';
import './style/List.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const List = (props) => {
    const listOfTasks = props.tasks.map((task, index) => <Task key={index} task={task} index={index} />)
    return (
        <div className="list-container">
            <ReactCSSTransitionGroup className="transition-group"
            transitionName="fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
                {listOfTasks}
            </ReactCSSTransitionGroup>
        </div>
    );
};

export default List;
