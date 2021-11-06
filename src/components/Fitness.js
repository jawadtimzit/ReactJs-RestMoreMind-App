import React, { Component } from 'react'
import FitnessCarousel from './FitnessCarousel';
export default class Fitness extends Component {
    render() {
        return (
            <div className = "container" style={{marginLeft:250}}> 
                
                <FitnessCarousel> </FitnessCarousel>

            </div>
        )
    }
}
