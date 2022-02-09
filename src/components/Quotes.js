import React, { Component } from 'react'

export default class Quotes extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          items: [],
          isLoaded: false,
          index: 0
        };
        this.handleIndex = this.handleIndex.bind(this)
      }
      
      handleIndex(event){
        this.setState({index: event.target.value})
      }
      componentDidMount() {
        fetch("https://type.fit/api/quotes")
          .then(res => res.json())
          .then(json => {
            this.setState({
              isLoaded: true,
              items: json
            });
          });
      }
      render() {
        var { isLoaded, items, index } = this.state;
        const selected = items [index] || items[0]
        if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <div className="content-wrapper" style={{backgroundColor:'skyblue'}}>


           
             
                
               <div classname="head-text" style={{position:'relative'}}>
                <div classname="head-image">
                <img src="./quote1.jpg" width="100%" height={550} style={{}} /> 
                </div>
                <div className="text-on-image" style={{position:'absolute',
                    right:"40%", bottom:"15%"}}>
                <h3> "Stop focusing on how stressed you are </h3>
                <h3> and remember how blessed you are." </h3>
                </div>
                </div>

              

                <br/>  <br/>  <br/>  
                <input type='text' onChange={(e)=>this.handleIndex(e)} placeholder='Enter a valid index'
                style={{marginLeft:'30px'}}/>
                <br/> <br/>
              <ul>
                 <p style={{fontSize:'20px'}}  key={selected.id}>
                    Today's Quote: {selected.text}  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  By: {selected.author}
                 </p>
              </ul>
              
              
            </div>
          );
        }
      }
    }

