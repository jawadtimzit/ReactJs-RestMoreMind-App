import React, { Component } from 'react'

export default class Successpay extends Component {
    render() {
        return (
            <div className = "content-wrapper">
            
            <div className="container-fluid" style={{backgroundColor: 'white',
            backgroundImage:'inherit(120deg, #FF4081, #81D4FA)'}} >
            <div className="row justify-content-center mt-0">
         <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
         <div className="card px-0 pt-4 pb-0 mt-3 mb-3" style={{zIndex:'0', border:'none',
    borderRadius:'0.5rem', position:'relative'}}>
            
            <div className="row">
            <div className="col-md-12 mx-0">

            <form style={{textAlign:'center', position:'relative', marginTop:'20px'}}>
            <fieldset style = {{background:'white', border:'0', borderRadius:'0.5rem',
              boxSizing:'border-box', width: '100%', margin:'0', paddingBottom:'20px', position:'relative' }}>
                <div className="form-card" style={{textAlign:'left', color:'#9E9E9E', background:'white', border:'none', borderRadius:'o',
                boxShadow:'0 2px 2px 2px', padding:'20px 40px 30px 40px', 
                boxSizing: 'border-box', width:'94%', margin: '0 3% 20% 3%', position:'relative'}}>
                  <h2 className="fs-title text-center">Success !</h2> <br /><br />
                  <div className="row justify-content-center">
                    <div className="col-3"> <img src="https://img.icons8.com/color/96/000000/ok--v2.png" className="fit-image" /> </div>
                  </div> <br /><br />
                  <div className="row justify-content-center">
                    <div className="col-7 text-center">
                      <h5>You Have Successfully Paid</h5>
                    </div>
                  </div>
                </div>
              </fieldset>
              </form>
              </div>
              </div>
              </div>
              </div>
              </div>
              </div>
              </div>
        )
    }
}
