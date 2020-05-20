import React, { Component } from "react"
import "./AddMovie.css"

const firebase = require('firebase');

export class AddMovies extends Component {
  constructor() {
    super();
    this.state = {
      ID: ''
    }
  }

  valid() {
    let id = this.state.ID;
    if (id.length !== 9 || id[0] !== 't' || id[1] !== 't') {
      return false;
    }
    var i;
    for (i=2; i<9; i++) {
      if (!isNaN(id[i])) {
        return false;
      }
    }
    return true;
  }

  sent = (event) => {
    event.preventDefault()
    if (this.valid) {
      const movieIDRef = firebase.database().ref('movieIDs');
      const newID = {id: this.state.ID}
      movieIDRef.push(newID);
      this.setState({id: '',})
    }
  }

  change = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <div className='search-box'>
          <form onSubmit={this.sent}>
            <input name='ID' type='text' minLength='9' maxLength='9' onChange={this.change}></input>
            <button>Search</button>
          </form>
        </div>
    );
  }

}

export default AddMovies;