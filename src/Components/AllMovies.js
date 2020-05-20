import React, { Component } from "react"
import config from "../config"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
import "./AllMovies.css"

const axios = require('axios');
const firebase = require('firebase');

export class AllMovies extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    }
    this.displayMovies();
  }
  
  displayMovies() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config)
    }
    let ref = firebase.database().ref('movieIDs');
    ref.on('value', snapshot => {
      let data = snapshot.val();
      console.log(data);
      for (let entry in data) {
        console.log(data[entry].id);
        this.getRequest(data[entry].id);
      }
    })
  }

  getRequest(id) {
    let req = 'https://www.omdbapi.com/?apikey=909a9c3d&i='+id;
    console.log("Requesting");
    axios.get(req)
    .then(response => {
      console.log("Get");
      const movie = {
        poster: response.data.Poster,
        title: response.data.Title,
        director: response.data.Director,
        rating: response.data.imdbRating,
      }
      this.setState({movies: [...this.state.movies, movie]})
    })
    .catch(function(error){
      console.log("Error")
    })
    .then(function(){
      return;
    });
  }

  dimPoster = (e) => {
    e.target.style.filter= 'brightness(40%)';
  }

  undimPoster = (e) => {
    e.target.style.filter= 'brightness(100%)';
  }

  render() {
    const Movies = this.state.movies && this.state.movies.map(({poster, title, director, rating}) => {
      return (
        <img src={poster}
        onMouseEnter={this.dimPoster}
        onMouseLeave={this.undimPoster}
        alt={title + "\n" + "Director: " + director + "\n" + "IMDB Rating: " + rating + "🌟"}>
        </img>
      );
    })
    return (
      <div className='info'>
        <SimpleReactLightbox>
          <SRLWrapper>
            <div className="Movie-grid">
              {Movies}
            </div>
          </SRLWrapper>
        </SimpleReactLightbox>
      </div>
    );
  }

}

export default AllMovies;