import React, { Component } from "react"
import config from "../config"
import "./AddMovie.css"

const axios = require('axios');
const firebase = require('firebase');

export class AddMovies extends Component {
  constructor() {
    super();
    this.state = {
      ID: '',
      src: '',
      title: '',
      director: '',
      rating: '',
      plot: '',
    }
  }

  componentDidMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config)
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

  getRequest(obj, req) {
    console.log("Requesting");
    axios.get(req)
    .then(response => {
      console.log("Get");
      obj.setState({
        src: response.data.Poster,
        title: response.data.Title,
        director: response.data.Director,
        rating: response.data.imdbRating,
        plot: response.data.Plot,
      })
    })
    .catch(function(error){
      console.log("Error")
    })
    .then(function(){
      this.updateDatabase(obj);
    });
  }

  updateDatabase(obj) {
    let movieObj = {
      title: obj.state.title,
      src: obj.state.src,
      director: obj.state.src,
      rating: obj.state.rating,
      plot: obj.state.plot,
    }
    let ref = firebase.database().ref('')
  }

  sent = (event) => {
    event.preventDefault()
    if (this.valid) {
      let req = 'https://www.omdbapi.com/?apikey=909a9c3d&i='+this.state.ID;
      this.getRequest(this, req);
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
            <button>Add</button>
          </form>
        </div>
    );
  }

}

export default AddMovies;