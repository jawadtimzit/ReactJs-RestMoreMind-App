import React, { Component } from 'react';
import { matchPath } from 'react-router-dom';
import treehouseservice from '../services/treehouseservice';
import Treelist from './Treelist';
export default class Addusers extends Component {
  constructor(props) {
    super(props)

     {/* create attribute proprities for the states and initialize them
     this prorties will help to get data and this data will be available in form submission
     so we add those proprities to the state and we get data from the input field, bring them inside these 
    proprities and this proprities data will be availabe upon submission ---se we declare prprities empty
    then as soon as we enter something in text field the event handler will get called and will extract value from this 
    input and we use setstate method to aasign the value to the proprities I have fname lname etc*/}

    this.state = {
      email:"",
      fname:"",
      lname:"",
      password:"",
      phone:null,
      credit_card:null,

     
      
    }

    {/*bind the methods that we passed*/}
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changePhoneNumberhandler = this.changePhoneNumberhandler.bind(this);
    this.changeCreditCardHandler = this.changeCreditCardHandler.bind(this);
    

}

  
  saveUsers=(e)=>{  {/*save method to save users*/}
      e.preventDefault();
      {/* since data are set in state proprities lets get data here inside save employee method, sowe get data to object user */}
      let user = {email:this.state.email, fname:this.state.fname, lname:this.state.lname, password:this.state.password,
        phone:this.state.phone, credit_card:this.state.credit_card, email_confirmed:"yes",
        isActive:1};
        {/* I added console here just to be able to see data in console*/}
        
        

      {/*create/save user and navigate to personalinfo page upon submissmion*/ }
        treehouseservice.createUser(user).then(res=>{
            this.props.history.push('/personalinfo');
            
        });
        
  }

  


  
 
  

  
  cancel(){ {/*routing the cancel button to treehouses list whenever the button is clicked*/}
    this.props.history.push('/treehouses');
  }

 
  changeEmailHandler=(event)=>{  {/* we capture the events and we get the value and we can assign the value to email */}
    this.setState({email: event.target.value});
  
  }

  changeFirstNameHandler=(event)=>{ {/* we capture the events and we get the value and we can assign the value to first name */}
    this.setState({fname: event.target.value});
  
  }

  changeLastNameHandler=(event)=>{  {/* we capture the events and we get the value and we can assign the value to last name */}
    this.setState({lname: event.target.value});
  
  }

  changePasswordHandler=(event)=>{  {/* we capture the events and we get the value and we can assign the value to password */}
    this.setState({password: event.target.value});
  
  }
  changePhoneNumberhandler=(event)=>{  {/* we capture the events and we get the value and we can assign the value to phone */}
    this.setState({phone: event.target.value});
  
  }

  changeCreditCardHandler=(event)=>{   {/* we capture the events and we get the value and we can assign the value to credit card*/}
    this.setState({credit_card: event.target.value});
  
  }

  
    render() {

       
        return (

            
       
 <div className = "content-wrapper" >       {/*create the form and card with some boostrap classes*/}       
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
            <form>
              
              <fieldset style = {{ background:'white', border:'0', borderRadius:'0.5rem',
              boxSizing:'border-box', width: '100%', margin:'0', paddingBottom:'20px', position:'relative' }}>
                
                
                <div className="form-card" style={{textAlign:'left', color:'#9E9E9E', background:'white', border:'none', borderRadius:'o',
                boxShadow:'0 2px 2px 2px', padding:'20px 40px 30px 40px', 
                boxSizing: 'border-box', width:'94%', margin: '0 3% 20% 3%', position:'relative'}}>
                  
                  
                  <h2 className="fs-title" style={{fontSize:'25', color:'#2C3E50', marginBottom:'10px',fontWeight:'bold', textAlign:'left'}}>Account Information</h2> 
                  {/* once we enter a text which is value in a field the change handler will get called  */}
                  <input type="text" name="email" className="input-group-append" className="input-group-text" className="form-control" style={{marginTop:'20px'}}   onChange={this.changeEmailHandler}  value={this.state.email}  placeholder="Email"  /> 
                  <input type="text" name="fname" className="input-group-append" className="input-group-text" className="form-control" style={{marginTop:'20px'}}    onChange={this.changeFirstNameHandler}  value={this.state.fname}  placeholder="First Name" />
                  <input type="text" name="lname" className="input-group-append" className="input-group-text" className="form-control" style={{marginTop:'20px'}}       onChange={this.changeLastNameHandler}  value={this.state.lname}  placeholder="Last Name" />
                  <input type="password" name="password"  className="input-group-append" className="input-group-text" className="form-control" style={{marginTop:'20px'}} onChange={this.changePasswordHandler}  value={this.state.password}  placeholder="Password" /> 
                  <input type="number" name="phone"  className="input-group-append" className="input-group-text" className="form-control" style={{marginTop:'20px'}}    onChange={this.changePhoneNumberhandler}  value={this.state.phone}  placeholder="Phone Number" />
                  <input type="number" name="credit_card"  className="input-group-append" className="input-group-text" className="form-control" style={{marginTop:'20px'}}  onChange={this.changeCreditCardHandler}  value={this.state.credit_card}  placeholder="Credit Card" />
                  
                  
                </div> 
                <div>
                <input type = "text" value = {this.props.info}/>
                </div>

                {/*create next step button that will submit user and navigate to next page that will be defined in saveUsers method*/}
                <button className="btn btn-danger"  onClick={this.cancel.bind(this)}    style={{width:''}} > Cancel</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                 {/*create next step button that will submit user data and navigate to next page that will be defined in saveUsers method
                 whenevr the save gets clicked the event handler gets called. I can bind it here or bind it in the constructor*/}
                 <button className="btn btn-primary"  onClick={this.saveUsers.bind(this)}    style={{marginLeft:'100px'}} > Save / Next Step</button>
                
                
                 
              
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
