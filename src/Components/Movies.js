import React, { Component } from "react"
import { SRLWrapper } from "simple-react-lightbox"

const axios = require('axios');

const movieIDs = [
  'tt2084970', // The Imitation Game
  'tt2948356', // Zootopia
  'tt4633694', // Spider-Man: Into the Spider-Verse
  'tt6751668', // Parasite
  'tt1856101', // Blade Runner 2049
  'tt0816692', // Interstellar
  'tt2543164', // Arrival
  'tt7605074', // The Wandering Earth
];

export class Movie extends Component {
  constructor() {
    super();
    this.state = {
      movies : [],
    }
  }

  componentDidMount() {
    movieIDs.forEach(id => {
      this.getRequest(id)
    })
  }

  getRequest(id) {
    let req = 'http://www.omdbapi.com/?apikey=909a9c3d&i='+id;
    console.log("Requesting");
    axios.get(req)
    .then(response => {
      console.log("Get");
      const movie = {
        id,
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

  render() {
    
    return(
      <SRLWrapper>
        <div>
          {this.state.movies.map(({id, poster, title, director, rating}) => {
            return(
              <img src={poster} alt={title + "Director" + director + "IMDB Rating" + rating} ></img>
            )
          })}
        </div>
      </SRLWrapper>
    );
  }

}

export default Movie;