import React from 'react';
import Header from './Header';
import ToDoForm from './ToDoForm';
import List from './List';

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
        this.setState({inputValue: e.target.value});
      };

      addNewTask = async (e) => {
          e.preventDefault();
        //   console.log('work');
        if(this.state.inputValue !== '') {
            this.setState({
                inputValue: '',
                tasks: [...this.state.tasks, this.state.inputValue]
              });
        }
      };

    render() {
        return (
            <div>
                <Header />
                <ToDoForm onInputChange={this.onInputChange} addNewTask={this.addNewTask}/>
                <List tasks={this.state.tasks} />
            </div> 
        );
    };
};

export default App;
