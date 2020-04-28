import React, { Component } from 'react'
import './Home.css'
import sky from './images/birthday-sky.jpg'

export class Home extends Component {
    render() {
        return (
            <div className="Main">
                <div className="Image">
                    <img src={sky} alt="REFRESH" />
                    <figcaption className="text">Galaxy Cluster Abell 1689, Shot by Hubble Space Telescope, on July 7, 2010</figcaption>
                </div>
                <div className="Bio">
                    <p>Kristin Hu{'\n'}
                    UCSB Second-year CS major{'\n'}
                    Outside CS: Movies, Sci-fi, Video Games, LEGO</p>
                </div>
            </div>
        )
    }
}

export default Home