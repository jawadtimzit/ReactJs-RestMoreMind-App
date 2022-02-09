import React, { Component } from 'react';
import axios from 'axios';
import Treelist from './Treelist';
import treehouseservice from '../services/treehouseservice';
//import Treelist from './components/Treelist';
export default class Filtering extends Component {
   
  constructor(props){
    super(props);
    this.state = {
      treehouses:[],
        prices: [],
        sizes:[],
        cities:[],
        selectedSize:0,
        selectedPrice:0,
        selectedCity:''
    }
}

handleChangeCity=(e)=>{
  this.setState({selectedCity:e.target.value})
  //console.log(this.state.selectedCity);
}
handleChangeSize=(e)=>{
  this.setState({selectedSize:e.target.value})
  //console.log(this.state.selectedSize);
}
handleChangePrice=(e)=>{
  this.setState({selectedPrice:e.target.value})
  //console.log(this.state.selectedPrice);
}
handleFilter=()=>{
  console.log(this.state.selectedPrice+ "    "+this.state.selectedSize+"    "+this.state.selectedCity);
  axios.get("http://localhost:8080/api/v1/getFilteredTreeHouses?Size="+this.state.selectedSize+"&Price="+this.state.selectedPrice+"&CityName="+this.state.selectedCity).then((res)=>{ 
  this.setState({treehouses: res.data});
   });
}
  componentDidMount()
  {
    treehouseservice.getTreehouses().then((res)=>{  {/*call the method getTreehouse from treehouseservice componenet*/}
            this.setState({treehouses: res.data});
        });
    treehouseservice.getPrices().then((res)=>{  {/*call the method getTreehouse from treehouseservice componenet*/}
    this.setState({prices: res.data});
     });
     treehouseservice.getSizes().then((res)=>{  {/*call the method getTreehouse from treehouseservice componenet*/}
    this.setState({sizes: res.data});
     });
     treehouseservice.getCities().then((res)=>{  {/*call the method getTreehouse from treehouseservice componenet*/}
    this.setState({cities: res.data});
     });
  }
  
  
  render() {
      return (
              <div style={{backgroundColor:''}}>           
                  <section>
                    <div>
                      <div className="row">
                        <div className="col-12">
                          <div className="card card-dark">
                            <div className="card-header">
                              <h4 className="card-title">More than just a treehouse...Get inspiration for your next trip </h4>
                              <br/>
                              
                            </div>
                          <div className="card-body">
                        <div>
                        <div className="btn-group w-100 mb-2" className="float-left" style={{marginBottom:'10px'}}>
                          <a className="btn btn-success"  onClick={this.handleFilter} data-filter={1}> Display All Trees </a>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                      <div className="mb-2">
                        <div className="float-left" >
                          <select value={this.state.selectedCity} onChange={this.handleChangeCity}  className="custom-select" style={{width: '200px'} } >
                            <option> Select by Cities </option>
                            {this.state.cities.map(t=><option value={t}>{t}</option>)}
                          </select>
                          &nbsp;&nbsp;&nbsp;
                          <select className="custom-select" style={{width: '200px'}} value={this.state.selectedPrice} onChange={this.handleChangePrice}>
                            <option value="0"> Select by Price </option>
                            {this.state.prices.map(t=><option value={t}>{t} $</option>)}
                          </select>
                          &nbsp;&nbsp;&nbsp;
                          <select className="custom-select" style={{width: '200px'} } value={this.state.selectedSize} onChange={this.handleChangeSize}>
                            <option value="0"> Select by Size </option>
                            {this.state.sizes.map(t=><option value={t}>{t} sqft</option>)}
                          </select>
                          &nbsp;&nbsp;&nbsp;
                        </div>
                      </div>
                    </div>
                  <div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <img src={`${process.env.PUBLIC_URL}/images/belowfiltering.jpg`} style={{width:"100%"}}/>
    <Treelist ListTree={this.state.treehouses}></Treelist>
    </div>   
            
  )
  }
}
