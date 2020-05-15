import React, { Component } from "react"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
import "./Movies.css"

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
    const Movies = this.state.movies &&
    this.state.movies.map(({poster, title, director, rating}) => {
      return(
        <img src={poster}
        onMouseEnter={this.dimPoster}
        onMouseLeave={this.undimPoster}
        alt={title + "\n" + "Director: " + director + "\n" + "IMDB Rating: " + rating + "🌟"}>
        </img>
      )
    }) 
    const Gallery = (
      <SimpleReactLightbox>
        <SRLWrapper>
          <div className="Movie-grid">
            {Movies}
          </div>
        </SRLWrapper>
      </SimpleReactLightbox>
    )
    return Gallery;
  }

}

export default Movie;