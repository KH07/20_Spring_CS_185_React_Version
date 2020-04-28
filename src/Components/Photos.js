import React, { Component } from 'react'
import SimpleReactLightbox from "simple-react-lightbox"
import MyComponent from './MyComponent'
import './Photos.css'

export class Photos extends Component {
    render() {
        return (
            <div className="gallary">
                <SimpleReactLightbox>
                    <MyComponent />
                </SimpleReactLightbox>
            </div>
        );
    }
}

export default Photos;