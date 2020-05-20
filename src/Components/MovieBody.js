import React, { Component } from 'react'
import AllMovies from "./AllMovies"
import AddMovie from "./AddMovie"
import CreateList from "./CreateList"

export class MovieBody extends Component {
  displayContent = () => {
    var activeTab = this.props.activeTab
    if (activeTab === 1) {
      return <AddMovie/>
    }
    else if (activeTab === 2) {
      return <CreateList/>
    }
    return <AllMovies/>
  }

  render() {
    return (this.displayContent());
  }

}

export default MovieBody;