import React, { Component } from "react"
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"
import AllMovies from "./AllMovies"
import AddMovie from "./AddMovie"
import CreateList from "./CreateList"
import config from "../config"
import "./Movies.css"

const firebase = require('firebase');

export class Movies extends Component {
  constructor() {
    super();
    this.state = {
      lists: [],
    }
    this.loadList();
  }

  loadList() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config)
    }
    let ref = firebase.database().ref('movieLists');
  }

  render() {
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
          <AllMovies />
        </div>
      </div>
    );
  }

}

export default Movies;