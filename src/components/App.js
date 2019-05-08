import React, { Fragment } from 'react';
import Header from './Header';
import ToDoForm from './ToDoForm';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: [],
            inputValue: ''
          };
      };

      onInputChange = (e) => {
        //   console.log(e.target.value);
        this.setState({inputValue: e.target.value})
      };

    render() {
        return (
            <div>
                <Header />
                <ToDoForm onInputChange={this.onInputChange}/>
            </div> 
        );
    };
};

export default App;
