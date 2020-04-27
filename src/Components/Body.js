import React, { Component } from 'react'
import Home from './Home'
import Photos from './Photos'
import Games from './Games'
import Music from './Music'

export class Body extends Component {
    displayContent = () => {
        var activeTab = this.props.activeTab
        if (activeTab === 1) {
            return <Home/>
        }
        else if (activeTab === 2) {
            return <Photos/>
        }
        else if (activeTab === 3) {
            return <Games/>
        }
        else {
            return <Music/>
        }
    }
    render() {
        return (this.displayContent());
    }
}

export default Body;