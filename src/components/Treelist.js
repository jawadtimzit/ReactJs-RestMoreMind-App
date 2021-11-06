import React, { Component } from 'react'
import treehouseservice from '../services/treehouseservice';
 

export default class Treelist extends Component {

    constructor(props){
        super(props);
        this.state = {
            treehouses: []
        }
    }
    
    componentDidMount(){
        treehouseservice.getTreehouses().then((res)=>{  {/*call the method getTreehouse from treehouseservice componenet*/}
            this.setState({treehouses: res.data});
        });
    }

    render() {

        return (
            <div>
                <h2 className="text-center"> Treehouseslist</h2>
                <div className = "content-wrapper">
                                
                                   { this.state.treehouses.map(
                                        treehouse =>
                                        <p key = {treehouse.treehouseID}>
                                            <img src ={treehouse.imageUrl} style={{width:'400px', marginLeft:'15px'}}/>
                                           <p style={{marginLeft:'15px'}}> Treehouse Name : {treehouse.name} </p>
                                           <p style={{marginLeft:'15px'}}> Treehouse Size : {treehouse.size} </p>
                                            <p style={{marginLeft:'15px'}}> Description : {treehouse.description} </p>
                                            <p style={{marginLeft:'15px'}}> Price : {treehouse.price} </p>
                                            
                                        </p>
                                        
                                        
                                    )
                                   } 
                          
                </div>    
                
                
            </div>
        )
    }
}
