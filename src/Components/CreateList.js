import React, { Component } from "react"

const firebase = require('firebase');

export class CreateList extends Component {
  constructor() {
    super();
    this.state = {
      ListName: ''
    }
  }

  sent = (event) => {
    event.preventDefault()
    const movieListRef = firebase.database().ref('movieLists');
    const newList = {ListName: this.state.ListName}
    movieListRef.push(newList);
    this.setState({ListName: '',})
  }

  change = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return(
      <div className='list-box'>
        <form onSubmit={this.sent}>
          <input name='ListName' type='text' onChange={this.change}></input>
          <button>Create</button>
        </form>
      </div>
    );
  }

}

export default CreateList;