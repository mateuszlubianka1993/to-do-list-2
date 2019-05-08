import React, { Fragment } from 'react';
import Header from './Header';
import ToDoForm from './ToDoForm';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <ToDoForm />
            </div> 
        );
    };
};

export default App;
