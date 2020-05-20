import React, { Component } from "react"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"
import AddMovie from "./AddMovie"
import CreateList from "./CreateList"
import config from "../config"
import "./Movies.css"

const axios = require('axios');
const firebase = require('firebase');

export class Movies extends Component {
  constructor() {
    super();
    this.state = {
      lists: [],
      movies: [],
    }
    this.loadList();
    this.loadMovies();
  }

  loadMovies() {
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

  loadList() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config)
    }
    let ref = firebase.database().ref('movieLists');
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
      <div className='movies'>
        <div className='movie-nav-bar'>
          <div className='dropdown-menu'>
            <DropdownButton title="All">
              <Dropdown.Item>List1</Dropdown.Item>
              <Dropdown.Item>List2</Dropdown.Item>
            </DropdownButton>
          </div>
          <AddMovie />
          <CreateList />
        </div>
        <div className='movie-details'>
          <SimpleReactLightbox>
            <SRLWrapper>
              <div className="Movie-grid">
                {Movies}
              </div>
            </SRLWrapper>
          </SimpleReactLightbox>
        </div>
      </div>
    );
  }

}

export default Movies;