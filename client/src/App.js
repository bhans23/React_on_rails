import React, {Component} from 'react';


class App extends Component {
   state = {todos: [] }
  
   componentDidMount(){
     //make an api call to the rails side to get all of the todos


   }
  addTodo = () => {
    // Make an api call to add a todo into the rails side
    // add the todo into the state
  }

  updateTodo = () => {
    // make an api call to update a todo in the rails side
    // update the todo into the state
  }

  deleteTodo = () => {
    // make api call to delete a todo on the rails side
    // delete the todo from our state
  }




  render(){
    return(
      <>
      </>
    )
  }
}





export default App;
