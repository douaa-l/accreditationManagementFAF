import { Slide } from 'react-slideshow-image'
import React from 'react'
import "./App.css"

const proprietes={
duration:3000,
transitionDuration:500,
infinite:true,
indicators:false,
arrows:false
}
const SlideShow=()=>{
    return(
<div className="containerSlide">
<Slide {...proprietes}>
    <div className="eachSlide">
        <div>
            <img src="assets/images/cameraman3.jpg" alt="img1"/>
           
        </div>
    </div>
    <div className="eachSlide">
        <div>
            <img src="assets/images/cameraman2.jpg" alt="img2"/>
           
        </div>
    </div>
</Slide>
</div>
    )
}
export default SlideShow