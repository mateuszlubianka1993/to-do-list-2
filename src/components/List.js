import React from 'react';
import Task from './Task';
import './style/List.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class List extends React.Component {
    delete(index){
        this.props.delete(index);
    };

    render() {
        const listOfTasks = this.props.tasks.map((task, index) => <Task task={task} delete={this.delete.bind(this, task)} index={index} key={index}/> )

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
    }
}

export default List;
