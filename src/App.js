import React, { Component } from 'react';
import './App.css';
import Tablist from './Components/Tablist'
import Body from './Components/Body'

export class App extends Component {
  constructor() {
    super();
    this.state = {
      activeTab : 1
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
        id: 1,
        title: 'Home'
      },
      {
        id: 2,
        title: 'Photos'
      },
      {
        id: 3,
        title: 'Games'
      },
      {
        id: 4,
        title: 'Music'
      }
    ]
    return (
      <div className="body">
        <div className="header">
          <h1>A long time ago, in a galaxy far, far away...</h1>
        </div>
        <div className="nav-bar">
          <Tablist tabs={tabs}
          changeTab={this.changeTab}
          activeTab={this.state.activeTab}
          />
        </div>
        <div className="main-body">
          <Body activeTab={this.state.activeTab}/>
        </div>
      </div>
    );
  }
}

export default App;
