import React, { Component } from 'react'

export default class Quotes extends Component {
    
     constructor(){
        super()
        this.state = {
            items: [],
            DataisLoaded: false
        }

     }
    
     async componentDidMount(){
         fetch("https://type.fit/api/quotes")
         .then((res) => res.json())
         .then((json) => {
             this.setState({
                 items: json,
                 DataisLoaded: true
             })
         })
     }

    render() {

        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div>

        return (
            <div className = "content-wrapper" style ={{backgroundColor:'white'}}>
                
                <h1> Fetch Quotes from an api</h1>  {
                items.map((item) => ( 
                <ol>
                    Text: { item.text },
                    <br/> 
                    Author: { item.author }, 
                    
                    </ol>
                ))
            }
                
            </div>
        )
    }
}
