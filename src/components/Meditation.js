import React, { Component } from 'react'
import MediaControlCard from './AudioCard1';
import RecipeReviewCardone from './Card1';
import RecipeReviewCardtwo from './Card2';

export default class Meditation extends Component {
    render() {
        return (
            <div className= "content-wrapper" style={{marginLeft:'200px'}}>
                <h3 style={{textAlign:'justify', maxWidth:700, margin:'auto'}}> Meditation: A simple, fast way to reduce streee</h3>
                <p style={{textAlign:'justify', maxWidth:700, margin:'auto'}}> Meditation can wipe away the day's stress, bringing with it inner 
                    peace. See how you caneasily learn to practice 
                    meditation whenever you need it most.</p>
                <p style={{textAlign:'justify', maxWidth:700, margin:'auto'}} >
                If stress has you anxious, tense and worried, consider trying meditation. 
                Spending even a few minutes in meditation can restore your calm and inner 
                peace. 
                </p>
                <br/>
                <p style={{textAlign:'justify', maxWidth:700, margin:'auto'}}> Anyone can practice meditation. It's simple and inexpensive, and it doesn't
                require any special equipment. </p>
                <p style={{textAlign:'justify', maxWidth:700, margin:'auto'}}>
                And you can practice meditation wherever you are — whether you're out for a walk, 
                riding the bus, waiting at the doctor's office or even in the middle of a difficult 
                business meeting.
                </p>
                <p></p>
                
                <div style={{backgroundColor:'#fcfcfa',padding:50}}>
                
                <h1 style={{marginLeft:220}}>
                <RecipeReviewCardone></RecipeReviewCardone>
                <MediaControlCard></MediaControlCard>
                <RecipeReviewCardtwo></RecipeReviewCardtwo>
                
                </h1>
                
            </div>
            </div>
        )
    }
}
