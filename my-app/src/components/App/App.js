import React, {Component} from 'react';
import './App.css';
//.. will take you up to sections.
import List from '../List'
// importing bootstrap for react. each element you use need its own import like Component.
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: []
    }
  }
//once the item is mounted, requesting the route to return all the data
// from our object we defined as payload(e.g database Postman) and have that data showing rather then an empty object
componentDidMount(){
  fetch('/api/todo')
    .then(response => response.json())
    .then(data => {
      this.setState({
        items: [...data.payload]
      })
      // data.payload.map((todo)=> {
      //   let item = todo.toDo;
      //   this.setState((prevState) => ({
      //     items:[...prevState.items,{items:item}]
      //   }))
      // })
    });
}

  onChange = (event) => {
    this.setState({term: event.target.value});
  }


  //connect to backend
  // onSubmit = (event) => {
  //   fetch("/api/toDo").then(res => res.json()).then(json => console.log(json));
  //   //stops this from going to another page
  //   event.preventDefault();
  onSubmit = event => {
    event.preventDefault();
    //fetch
    fetch('/api/todo', {method: 'POST', headers:{
    'Accept':'application/json', 'Content-Type': 'application/json'},
     body:JSON.stringify({toDo:this.state.term})})
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => console.log(data));

    this.setState({
      term: "",
      items: [
        ...this.state.items, {
          toDo: this.state.term,
          complete: false
        }
      ]
    })
  }

  onComplete = (i) => {
    this.setState(prevState => ({
      items: [
        ...prevState.items.slice(0, i), {
          toDo: prevState.items[i].toDo,
          complete: !prevState.items[i].complete
        },
        ...prevState.items.slice(i + 1)
      ]
    }));
  }
  render() {

    return (<div>

      <AppBar title="My to do List" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
      <form onSubmit={this.onSubmit}>
        <TextField hintText="Hint Text" floatingLabelText="To do list" value={this.state.term} onChange={this.onChange}/>
        <RaisedButton label="To do" primary={true} type='submit'/>
      </form>

      <List items={this.state.items} onComplete={this.onComplete}/>

      <CircularProgress/>
      <CircularProgress size={60} thickness={7}/>
      <CircularProgress size={80} thickness={5}/>

    </div>)
  }
}

export default App;
