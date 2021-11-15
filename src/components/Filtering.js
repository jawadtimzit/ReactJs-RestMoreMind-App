import React, { Component } from 'react'
import Treelist from './Treelist'

export default class Filtering extends Component {
    render() {
        return (
            
                
 <div className = "content-wrapper" style={{backgroundColor:'white'}}>           
<section className="content">
  <div className="container-fluid">
    <div className="row">
      <div className="col-12">
        <div className="card card-dark">
          <div className="card-header">
            <h4 className="card-title">Filtering System</h4>
          </div>
          <div className="card-body">
            <div>
             
              <div className="btn-group w-100 mb-2" className="float-left" style={{marginBottom:'10px'}}>
                  &nbsp;&nbsp;
              {/*when the button is clicked we will navigate to list of treehouses*/}
              <a className="btn btn-success" href="treehouses" data-filter={1}> Display All Trees </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {/*    <a className="btn btn-light" href="javascript:void(0)" data-filter={2}> Select by Price </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
        </div> 
            
              <div className="mb-2">
                {/*can fix width to 2 px if want select buttons to be sided on left*/}
                <div className="float-left" >
                  <select className="custom-select" style={{width: '200px'}} >
                    
                  <option > Scroll down </option>
                    <option value={Treelist}> All Treehouses 
                    {Treelist.display}
                    </option>
                   
                    
                    <option > Seattle </option>
                    <option value="index"> Bellevue </option>
                    <option value="sortData"> Kirkland </option>
                    <option value="index"> Tacoma </option>
                    <option value="sortData"> Everett </option>
                    <option value="sortData"> Lynnwood </option>
                    <option value="index"> Spokane </option>
                    <option value="sortData"> Bellingham </option>
                  </select>
                 {/*} <div className="btn-group">
                    <a className="btn btn-default" href="javascript:void(0)" data-sortasc> Ascending </a>
                    <a className="btn btn-default" href="javascript:void(0)" data-sortdesc> Descending </a>
        </div>*/}
                          &nbsp;&nbsp;&nbsp;
                    <select className="custom-select" style={{width: '200px'}} >
                    
                    <option value="index"> Slect by Price </option>
                    <option value="sortData"> Descending</option>
                    <option value="sortData"> Ascending </option>
                    
                  </select>


                  &nbsp;&nbsp;&nbsp;
                  <select className="custom-select" style={{width: '200px'}}>
                    
                    <option value="index"> Select by Size </option>
                    <option value="sortData"> 350 sqft </option>
                    <option value="sortData"> 400 sqft </option>
                    <option value="sortData"> 500 sqft </option>
                    <option value="sortData"> 600 sqft </option>
                    <option value="sortData"> 650 sqft </option>
                    <option value="sortData"> 700 sqft </option>
                    <option value="sortData"> 750 sqft </option>
                  </select>

                  &nbsp;&nbsp;&nbsp;
                  <select className="custom-select" style={{width: '200px'}}>
                    
                    <option value="index"> Select by Category </option>
                    <option value="sortData"> Quite </option>
                    <option value="sortData"> Ocean View </option>
                    <option value="sortData"> Montagne View </option>
                    <option value="sortData"> Hiking Distance </option>
                    <option value="sortData"> Swiming Pool </option>
                  </select>
               </div>


                




                


              </div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div></div></section>
    </div>   
    


            
        )
    }
}
