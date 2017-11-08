import React, { Component } from 'react';
import './App.css';
//.. will take you up to sections.
import List from '../List'
// importing bootstrap for react. each element you use need its own import like Component.
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';




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
//connect to backend
  onSubmit = (event) => {
    fetch("/api")
    .then(res => res.json())
    .then(json => console.log(json));
//stops this from going to another page
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
  <AppBar
    title="My to do List" iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
  <form onSubmit={this.onSubmit}>
  <TextField
      hintText="Hint Text"
      floatingLabelText="To do list"
        value = {this.state.term}
        onChange= {this.onChange}

    />
    <RaisedButton label="To do" primary={true} type = 'submit' />
</form>

<List items = {this.state.items} onComplete = {this.onComplete}/>

<CircularProgress />
<CircularProgress size={60} thickness={7} />
<CircularProgress size={80} thickness={5} />
    </div>

    )
  }
}


export default App;
