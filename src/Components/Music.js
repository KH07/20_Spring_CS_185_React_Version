import React, { Component } from 'react'
import './Music.css'

import Cover1 from './images/music/1.jpeg'
import Cover2 from './images/music/2.jpeg'
import Cover3 from './images/music/3.jpeg'
import Cover4 from './images/music/4.jpeg'

export class Music extends Component {
    render() {
        return(
            <div className="album-grid">
                <div className="album">
                    <a href="https://open.spotify.com/album/3BHe7LbW5yRjyqXNJ3A6mW">
                        <img src={Cover1} alt="Bohemian Rhapsody"></img>
                    </a>
                    <figcaption>"As a whole, it’s a fun, mostly un-retouched tribute to the group’s musical genius."
				    ---- Rolling Stone</figcaption>
                </div>
                <div className="album">
                    <a href="https://open.spotify.com/album/4KwrZSxfPq67eTcNsjRMW6?autoplay=true&v=L">
                        <img src={Cover2} alt="Future Nostalgia"></img>
                    </a>
                    <figcaption>"Future Nostalgia is a breathtakingly fun, cohesive and ambitious attempt to find a place for disco in 2020."
				    ---- Rolling Stone</figcaption>
                </div>
                <div className="album">
                    <a href="https://open.spotify.com/album/3vpevcn6LBp8JZuv0WutvU?autoplay=true&v=L">
                        <img src={Cover3} alt="Anti Anti Generation"></img>
                    </a>
                    <figcaption>"「よーい、はじめ」"
				    ---- 正解</figcaption>
                </div>
                <div className="album">
                    <a href="https://open.spotify.com/album/4RoOGpdrgfiIUyv0kLaC4e?autoplay=true&v=L">
                        <img src={Cover4} alt="MASSEDUCTION"></img>
                    </a>
                    <figcaption>"Masseduction often feels fragmentary, like two or three albums in the campaign of one."
				    ---- Pitchfork</figcaption>
                </div>
            </div>
        );
    }
}

export default Music;