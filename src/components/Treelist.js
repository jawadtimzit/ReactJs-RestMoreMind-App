import React, { Component } from 'react'
import treehouseservice from '../services/treehouseservice';

 

export default class Treelist extends Component {

    constructor(props){
        super(props);
        this.state = {
            treehouses: [],
            treehouseid:null,    
        }
    }
    
    componentDidMount(){
        treehouseservice.getTreehouses().then((res)=>{  {/*call the method getTreehouse from treehouseservice componenet*/}
            this.setState({treehouses: res.data});
        });
        
    }

    savetreeID =e =>{  {/* save the tree house id when click on the treehouse reserve button*/}
            
            {/*set data to the state of treehouseid*/}
            this.setState({  
                treehouseid: e.target.id   
            });
            console.log(" the treehouseid => ", e.target.id);
            
            
        this.props.history.push('/addusers');
    }

    
    
    

    render() {
        
        
        return (
            <div>
                
                

               <div className = "content-wrapper">
                <div className = "card card-success">
                                
                                <div className="card-body" >
                                <div className="row">
                                   
                                   { this.state.treehouses.map(
                                        treehouse =>
                                        
                                        <div className="col-md-12 col-lg-6 col-xl-4">
                                            <div className="card mb-2" style={{}}>
                                            
                                            
                                           {/*} <div className="card mb-2 bg-gradient-dark">*/}
                                        <p key = {treehouse.treehouse_id} >
                                            
                                            <img src ={treehouse.image_url} style={{ width:'330px', marginLeft:'8px', height:'300px'}}/>
                                           <p style={{marginLeft:'15px'}}> Treehouse Name : {treehouse.name} </p>
                                           <p style={{marginLeft:'15px'}}> Treehouse Size : {treehouse.size} </p>
                                            <p style={{marginLeft:'15px'}}> Description : {treehouse.description} </p>
                                            <p style={{marginLeft:'15px'}}> Price : {treehouse.price} </p>
                                            <a id = {treehouse.treehouse_id} onClick={this.savetreeID.bind(this)}
                                            className ="btn btn-primary"  style={{marginLeft:'150px'}}>Reserve</a>
                                            
                                        </p>
                                        
                                        </div> 
                                        </div>
                                       
                                        
                                    )
                                   } 
                                   
                                   </div>
                                   </div>
                          
                </div>    
                
                
            </div>
            
            </div>
        )
    }
}
