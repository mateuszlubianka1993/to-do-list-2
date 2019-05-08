import React from 'react';
import Task from './Task';

const List = (props) => {
    const listOfTasks = props.tasks.map((task, index) => <Task key={index} task={task} index={index} date={props.date}/>)
    return (
        <div className="list-container">
            {listOfTasks}
        </div>
    );
};

export default List;
