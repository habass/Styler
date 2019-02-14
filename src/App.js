import React, { Component } from 'react';
import Slide from './Slide'
import { product } from './Products';
import { Swipeable} from 'react-swipeable';

let rail = [];


class App extends Component  {

//--------------------------------------------------------------
    constructor(props) {
        super(props);
        this.state = {
//Stores which slide is currently visible
            currentIndex : 0,
        }
        this.swipeRight = this.swipeRight.bind(this);
        this.swipeLeft = this.swipeLeft.bind(this);
    }


//----------------------------------------------------------------    
//Updates slide
   swipeRight(e) {
        if (this.state.currentIndex === product.length - 1) {
            return this.setState({
                currentIndex: 0
            })
        }
        this.setState({
            currentIndex: this.state.currentIndex + 1
        })

        // let addRail = product[this.currentIndex];

    }
//----------------------------------------------------------------
//Previous slide
    swipeLeft() {
    if (this.state.currentIndex === product.length - 1) {
        return this.setState({
            currentIndex: 0
        })
    }

    this.setState({
        currentIndex: this.state.currentIndex + 1
    })
 }
   
//----------------------------------------------------------------    
    render() {
        return (
        <div>
            <Swipeable onSwipedRight={this.swipeRight}
                       onSwipedLeft={this.swipeLeft}>
                <Slide 
                    source={product[this.state.currentIndex].source}
                    name={product[this.state.currentIndex].name}
                    price={product[this.state.currentIndex].price}
                    id={product[this.state.currentIndex].id}>
                </Slide>
            </Swipeable>
        </div>
        );
    }    
    
}

export default App;