import React, { Component } from "react"
import Tablist from "./Tablist"
import MovieBody from "./MovieBody"
import "./Movies.css"

export class Movie extends Component {
  constructor() {
    super();
    this.state = {
      activeTab : 0
    }
    this.changeTab = (id) => {
      this.setState({
        activeTab:id
      })
    }
  }

  render() {
    const tabs = [
      {
        id: 0,
        title: 'All Movies'
      },
      {
        id: 1,
        title: 'Add Movie',
      },
      {
        id: 2,
        title: 'Create List',
      }
    ]
     
    return (
      <div className='movies'>
        <div className='movie-nav-bar'>
          <Tablist tabs={tabs}
          changeTab={this.changeTab}
          activeTab={this.state.activeTab}
          />
        </div>
        <div className='move-body'>
          <MovieBody activeTab={this.state.activeTab}/>
        </div>
      </div>
    );
  }

}

export default Movie;