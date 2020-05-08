import React from 'react'
import { SRLWrapper } from "simple-react-lightbox"
import './MyComponent.css'

import Img1 from './images/photos/1.jpeg'
import Img2 from './images/photos/2.jpeg'
import Img3 from './images/photos/3.jpeg'
import Img4 from './images/photos/4.jpeg'
import Img5 from './images/photos/5.jpeg'
import Img6 from './images/photos/6.jpeg'
import Img7 from './images/photos/7.jpeg'

function MyComponent() {
    return (
        <div className="MyComponent">
            <SRLWrapper>
                <div className="Images">
                    <img src={Img1} alt="La Jolla coast, March 11, 2017"/>
                    <img src={Img2} alt="Singapore Zoo, October 7, 2017"/>
                    <img src={Img3} alt="Universal Studios Singapore, October 9, 2017"/>
                    <img src={Img4} alt="Xi'an, February 26, 2018"/>
                    <img src={Img5} alt="Highwat to Ya'an, August 7, 2018"/>
                    <img src={Img6} alt="Forth of July, July 4, 2019"/>
                    <img src={Img7} alt="UCSB Campus Point, February 17, 2019"/>
                </div>
            </SRLWrapper>
        </div>
    );
}

export default MyComponent;