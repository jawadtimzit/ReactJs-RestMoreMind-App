import React, { Component } from 'react'


{/*This is the compenent for the top small boxes that have meditation, fitness, sleep,
and quote Componenents*/ }

export default class Topsmallboxes extends Component {
   
  
  render() {
        return (
            <div style={{backgroundColor:''}}>
            <div className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    {/*<p className="m-0">Are you experiencing stress and anxiety?</p> */}
                    {/*<p> It doesn't have to be. Find more joy with RestMoreMind!</p>*/}
                  </div>{/* /.col */}
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">


                      <li className="breadcrumb-item active" >
                          <a href="https://www.facebook.com/groups/theloveoftreehouses"  className="text-primary"> 
                            <i className="fab fa-facebook-square fa-2x"/> 
                          </a>
                     </li>

                      <li className="breadcrumb-item active">
                          <a href="#" className="text-primary">
                            <i className="fab fa-twitter-square fa-2x" />
                          </a>
                      </li>

                      <li className="breadcrumb-item active">
                          <a href="#" className="text-green">
                            <i className="fas fa-rss-square fa-2x" />
                          </a>
                      </li>



                      <li className="breadcrumb-item active">
                        <a href="#" className="text-red">
                          <i className="fas fa-envelope-square fa-2x" />
                        </a>
                      </li>


                    </ol>
                  </div>{/* /.col */}
                </div>{/* /.row */}
              </div>{/* /.container-fluid */}
            </div>
            

    <section className="content">
      <div className="container-fluid">
        {/* Small boxes (Stat box) */}
        <div className="row">
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-white">
              <div className="inner">
                <h1 style = {{fontSize:14, color:'blue'}}>Meditation</h1>
                {/*<p style = {{fontSize:10}}>Improve health</p>*/}
              </div>
              <div className="icon">
               { /*<i className="ion ion-bag" />*/}
              </div>
              <a href="/meditation" className="small-box-footer" style={{backgroundColor:'lightgreen', fontSize:12}}> Improve health <i className="fas fa-arrow-circle-right" /></a>
            </div>
          </div>



          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-white">
              <div className="inner">
                <h1 style = {{fontSize:14, color: 'blue'}} >Fitness</h1>
                {/*<p style = {{fontSize:10}}>Increase sense of well-being</p>*/}
              </div>
              <div className="icon">
                {/*<i className="ion ion-stats-bars" />*/}
              </div>
              <a href="fitness" className="small-box-footer" style={{backgroundColor:'lightgreen', fontSize:12}}> Increase sense of well-being<i className="fas fa-arrow-circle-right" /></a>
            </div>
          </div>




          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-white">
              <div className="inner">
                <h1 style = {{fontSize:14, color:'blue'}}>Sleep</h1>
        {/*<p style = {{fontSize:10}}>Improve energy and mode</p>*/}
              </div>
              <div className="icon">
                {/*<i className="ion ion-person-add" />*/}
              </div>
              <a href="sleep" className="small-box-footer" style={{backgroundColor:'lightgreen', fontSize:12}}> Improve energy and mode<i className="fas fa-arrow-circle-right" /></a>
            </div>
          </div>




          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-white">
              <div className="inner">
                <h1 style = {{fontSize:14, color:'blue'}}>Quotes</h1>
                {/*<p style = {{fontSize:10}}>Stay motivated</p>*/}
              </div>
              <div className="icon">
                {/*<i className="ion ion-pie-graph" />*/}
              </div>
              <a href="quotes" className="small-box-footer" style={{backgroundColor:'lightgreen', fontSize:12}}>Stay motivated <i className="fas fa-arrow-circle-right" /></a>
            </div>
          </div>
          {/* ./col */}
        </div>

        </div>
        
        </section>
        </div>
        
        


        )
    }
}
