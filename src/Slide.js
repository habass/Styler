import React, { Component } from 'react';
import './Slider.css'
import 'tachyons';

const Slide = ({ source, name, price, id }) => {
        
        return (
        <div id="slide" className="tc pa3 ma2 bw2 shadow-2">
                <img src={source}  alt=""/>
                <h2>{name}</h2>
                <h3>{price}</h3> 
        </div>   
        );
}

export default Slide;