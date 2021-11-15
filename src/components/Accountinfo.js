import React, { Component } from 'react';
import axios from 'axios';
import { accordionSummaryClasses } from '@mui/material';
export default class Accountinfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      fname:"",
      lname:"",
      password:"",
      phone:0,
      credit_card:0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value =  target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    //alert('An essay was submitted: ' + event);
    const user={
      "email":this.state.email,
      "fname":this.state.fname,
      "lname":this.state.lname,
      "password":this.state.password,
      "phone":this.state.phone,
      "credit_card":this.state.credit_card,
      "email_Confirmed":"yes",
      "isActive":1};
    const reservation={"reservationID":0,"start_Date":"2021-11-10","end_Date":"2021-11-12","isactive":1,"admin_AdminSsn":1,"treehouse_TreehouseID":1,"payment_PaymentID":1}
    const objectNew={"user":user,"reservation":reservation}
    axios.post("http://localhost:8080/api/v1/saveReservation",objectNew);
    console.log(objectNew);
    event.preventDefault();
  }
    render() {
        return (
          
 <div className = "content-wrapper" >              
<div className="container-fluid" style={{backgroundColor: 'white',
backgroundImage:'inherit(120deg, #FF4081, #81D4FA)'}} >
  <div className="row justify-content-center mt-0">
    <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
      <div className="card px-0 pt-4 pb-0 mt-3 mb-3" style={{zIndex:'0', border:'none',
    borderRadius:'0.5rem', position:'relative'}}>
        <h2 style={{textAlign:'center'}}><strong>Sign Up Your User Account</strong></h2>
        <p style={{textAlign:'center'}}>Fill all form field to go to next step</p>
        <div className="row">
          <div className="col-md-12 mx-0">
            <form   onSubmit={this.handleSubmit} style={{textAlign:'center', position:'relative', marginTop:'20px'}}>
              
              <fieldset style = {{ background:'white', border:'0', borderRadius:'0.5rem',
              boxSizing:'border-box', width: '100%', margin:'0', paddingBottom:'20px', position:'relative' }}>
                
                
                <div className="form-card" style={{textAlign:'left', color:'#9E9E9E', background:'white', border:'none', borderRadius:'o',
                boxShadow:'0 2px 2px 2px', padding:'20px 40px 30px 40px', 
                boxSizing: 'border-box', width:'94%', margin: '0 3% 20% 3%', position:'relative'}}>
                  
                  
                  <h2 className="fs-title" style={{fontSize:'25', color:'#2C3E50', marginBottom:'10px',fontWeight:'bold', textAlign:'left'}}>Account Information</h2> 
                  <input type="text" name="email" className="input-group-append" className="input-group-text" className="form-control" style={{marginTop:'20px'}}   onChange={this.handleInputChange}  value={this.state.email}  placeholder="Email"  /> 
                  <input type="text" name="fname" className="input-group-append" className="input-group-text" className="form-control" style={{marginTop:'20px'}}    onChange={this.handleInputChange}  value={this.state.fname}  placeholder="First Name" />
                  <input type="text" name="lname" className="input-group-append" className="input-group-text" className="form-control" style={{marginTop:'20px'}}       onChange={this.handleInputChange}  value={this.state.lname}  placeholder="Last Name" />
                  <input type="password" name="password"  className="input-group-append" className="input-group-text" className="form-control" style={{marginTop:'20px'}} onChange={this.handleInputChange}  value={this.state.password}  placeholder="Password" /> 
                  <input type="number" name="phone"  className="input-group-append" className="input-group-text" className="form-control" style={{marginTop:'20px'}}    onChange={this.handleInputChange}  value={this.state.phone}  placeholder="Phone Number" />
                  <input type="number" name="credit_card"  className="input-group-append" className="input-group-text" className="form-control" style={{marginTop:'20px'}}  onChange={this.handleInputChange}  value={this.state.credit_card}  placeholder="Credit Card" />
                  
                  
                </div> 
               
                <button type="submit">Submit</button>
                 {/*<a className="btn btn-primary" href ="personalinfo" style={{width:''}} > Next Step</a>*/}
              
              
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
