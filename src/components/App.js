import React from 'react';
import Header from './Header';
import ToDoForm from './ToDoForm';
import List from './List';
import Footer from './Footer';
import './style/App.css';

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

      deleteAllTasks = () => {
        this.setState({tasks: []})
      };

      removeLastTask = () => {
        const copy = this.state.tasks;
        copy.pop();

        this.setState({tasks: copy});
      };

    render() {
        return (
            <div className="app-container">
              <div className="content">
              <Header />
                <ToDoForm 
                onInputChange={this.onInputChange} 
                addNewTask={this.addNewTask}
                deleteAllTasks={this.deleteAllTasks}
                removeLastTask={this.removeLastTask}
                delete={this.deleteTask}/>
                <List tasks={this.state.tasks} />
              </div>
              <Footer />
            </div> 
        );
    };
};

export default App;
