import React, { Component } from 'react';
import './App.css';
//.. will take you up to sections.
import List from '../List'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      term:"",
      items:[]
    }
  }
  onChange = (event) =>{
    this.setState({term:event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault();

    this.setState({
      term:"",
      items:[...this.state.items,{toDo: this.state.term,complete: false}]
  })
  }

onComplete = (i) => {
  this.setState(prevState => ({
    items:[...prevState.items.slice(0,i),
    {toDo:prevState.items[i].toDo,
    complete:!prevState.items[i].complete
  },
    ...prevState.items.slice(i+1)
  ]
  }));
}
  render() {

    return (
    <div>
      <form onSubmit={this.onSubmit}>
        <input
          value = {this.state.term}
          onChange= {this.onChange}
        />
        <button type="submit">To Do List</button>
      </form>
      <List items = {this.state.items}
        onComplete = {this.onComplete}/>
    </div>
    )
  }
}

export default App;
