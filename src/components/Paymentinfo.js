import React, { Component } from 'react'

export default class Paymentinfo extends Component {
    render() {
        return (
            <div className="content-wrapper">
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
                <div className="form-card" style={{textAlign:'left', color:'#9E9E9E',background:'white', border:'none', borderRadius:'o',
                boxShadow:'0 2px 2px 2px', padding:'20px 40px 30px 40px', 
                boxSizing: 'border-box', width:'94%', margin: '0 3% 20% 3%', position:'relative'}}>
                  <h2 className="fs-title" style={{fontSize:'25', color:'#2C3E50', marginBottom:'10px',fontWeight:'bold', textAlign:'left'}}>Payment Information</h2>
                  <div className="radio-group">
                    <div className="radio" data-value="credit"><img src="https://i.imgur.com/XzOzVHZ.jpg" width="200px" height="100px" /></div>
                    <div className="radio" data-value="paypal"><img src="https://i.imgur.com/jXjwZlj.jpg" width="200px" height="100px" /></div> <br />
                  </div> <label className="pay">Card Holder Name*</label> <input type="text" name="holdername" placeholder style={{padding:'0px 8px 4px 8x',
                  border:'none', borderBottom: '1px', borderRadius:'0px', marginBottom:'25px', marginTop:'2px', width:'100%', boxSizing:'border-box',
                  fontFamily:'-moz-initial', color:'#2C3E50', fontSize:'16px', letterSpacing:'1px' , boxShadow:'none', border:'none', borderBottom:'2px', outlineWidth:'0' }}/>
                  <div className="row">
                    <div className="col-9"> <label className="pay">Card Number*</label> <input type="text" name="cardno" placeholder style={{padding:'0px 8px 4px 8x',
                  border:'none', borderBottom: '1px', borderRadius:'0px', marginBottom:'25px', marginTop:'2px', width:'100%', boxSizing:'border-box',
                  fontFamily:'-moz-initial', color:'#2C3E50', fontSize:'16px', letterSpacing:'1px' , boxShadow:'none', border:'none', borderBottom:'2px', outlineWidth:'0' }} /> </div>
                    <div className="col-3"> <label className="pay">CVC*</label> <input type="password" name="cvcpwd" placeholder="***" style={{padding:'0px 8px 4px 8x',
                  border:'none', borderBottom: '1px', borderRadius:'0px', marginBottom:'25px', marginTop:'2px', width:'100%', boxSizing:'border-box',
                  fontFamily:'-moz-initial', color:'#2C3E50', fontSize:'16px', letterSpacing:'1px' , boxShadow:'none', border:'none', borderBottom:'2px', outlineWidth:'0' }}/> </div>
                  </div>
                  <div className="row">
                    <div className="col-3"> <label className="pay">Expiry Date*</label> </div>
                    <div className="col-9"> <select className="list-dt" id="month" name="expmonth"
                    style={{border:'none', outline:'0',borderBottom:'1px solid #ccc', padding:'2px 5px 3px 5px',
                    margin:'2px', borderBottom:'2px solide skyblue'}}>
                        <option selected>Month</option>
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
                      </select> <select className="list-dt" id="year" name="expyear"
                       style={{border:'none', outline:'0',borderBottom:'1px solid #ccc', padding:'2px 5px 3px 5px',
                       margin:'2px', borderBottom:'2px solide skyblue'}}>
                        <option selected>Year</option>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                        <option>2026</option>
                        
                      </select> </div>
                  </div>
                </div> 
                
                <a className ="btn btn" href ="personalinfo" style = {{ width:'100px', background:'#616161', fontWeight:'bold',
                color:'white', boder:'0', borderRadius:'0px', cursor:'pointer', padding:'10px 5px', margin:'10px 5px', boxShadow:'0 0 0 2px white, 0 0 0 3px #616161'}}>Previous</a>   
                
                <a className ="btn btn" href ="successpay"  style={{width:'100px', background:'skyblue', fontWeight:'bold', color:'white',
                border:'0', borderRadius:'0px', cursor:'pointer', padding:'10px 5px', margin:'10px 5px', boxShadow:'0 0 0 2px white, 0 0 0 3px skyblue'
              }}>Confirm</a>
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
