import React, { Component } from 'react'

export default class Meditation extends Component {
    render() {
        return (
            
                
                <div className="container-fluid">
        {/* Small boxes (Stat box) */}
        <div className="row">
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-info">
              <div className="inner">
                <h2>Meditation</h2>
                <p>Improve health</p>
              </div>
              <div className="icon">
               { /*<i className="ion ion-bag" />*/}
              </div>
              <a href="#" className="small-box-footer"> <i className="fas fa-arrow-circle-right" /></a>
            </div>
          </div>
          </div>


            </div>
        )
    }
}
