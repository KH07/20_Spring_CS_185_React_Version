import React, { Component } from 'react'
import './Games.css'

export class Games extends Component {
    render() {
        return(
            <div className="contents">
                <h2>PS4</h2>
                <div className="games-grid">
                    <div className="ps4-game">
                        <iframe src="https://www.youtube.com/embed/b5-_MvCWSfI"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                    </div>
                    <div className="ps4-game">
                        <iframe src="https://www.youtube.com/embed/WEk1cqraxzg"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                    </div>
                    <div className="ps4-game">
                        <iframe src="https://www.youtube.com/embed/_ddQqzwH__4"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                    </div>
                    <div className="ps4-game">
                        <iframe src="https://www.youtube.com/embed/CTc-iYL_rrU"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                    </div>
                    <div className="ps4-game">
                        <iframe src="https://www.youtube.com/embed/iyz9xU-h9Ms"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                    </div>
                </div>
                <h2>Nintendo Switch</h2>
                <div class="games-grid">
                    <div class="ns-game">
                        <iframe src="https://www.youtube.com/embed/_3YNL0OWio0"
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
                    </div>
                    <div class="ns-game">
                        <iframe src="https://www.youtube.com/embed/9BrAT_o7yWA" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
                    </div>
                    <div class="ns-game">
                        <iframe src="https://www.youtube.com/embed/ylBYfndq8fU" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
                    </div>
                    <div class="ns-game">
                        <iframe src="https://www.youtube.com/embed/1rPxiXXxftE"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        );
    }
}

export default Games;