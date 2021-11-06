import React, { Component } from 'react'
import RecipeReviewCard from './cards';
import MediaControlCard from './AudioCard';

export default class Meditation extends Component {
    render() {
        return (
            <div className= "content-wrapper">
            <div style={{backgroundColor:'#fcfcfa',padding:50}}>
                <h1 style={{marginLeft:220}}>
                <RecipeReviewCard></RecipeReviewCard>
                <MediaControlCard></MediaControlCard>
                <RecipeReviewCard></RecipeReviewCard>
                </h1>
                
            </div>
            </div>
        )
    }
}
