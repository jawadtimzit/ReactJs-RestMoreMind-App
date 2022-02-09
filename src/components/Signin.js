import React, { Component } from 'react'
import axios from 'axios';
const initialState = {

          email: "",
          password: "",
          emailError:"",
          passwordError:"",
}

export default class Signin extends Component {
      constructor(props){
        super(props)
        this.state = {
          initialState,
          treehouseId:0
        
        }
        
      }
      componentDidMount(){
        this.setState({treehouseId : this.props.match.params.id});
         //this.props.match.params.id;  
         }
      handleChange = event =>{
        const isCheckbox = event.target.type ==="checkbox";
        this.setState({
          [event.target.name]: isCheckbox
          ? event.target.value
          :event.target.value
        });
        
      }

      handleSubmit = event =>{
        event.preventDefault();
        const isValid = this.validate();
        if(isValid){
        //console.log("http://localhost:8080/api/v1/Signin?email="+this.state.email+"&password="+this.state.password);
        axios.get("http://localhost:8080/api/v1/Signin?email="+this.state.email+"&password="+this.state.password).then((res)=>{
           if(res.data!=undefined && res.data!="")
           {
             //console.log(res.data);
             this.props.history.push('/Reservation/'+res.data.userID+'/'+this.state.treehouseId);
           }
          else
          {
            console.log(res.data);
            alert("Signin Credentials are Wrong");
          }
      });
        //to clear and reset the form so we can input again 
        this.setState(initialState);
        // on submit also here you can add code for moving to next page once information 
        //are correct move to either reservation page or sign up if not a memeber 
        }
      };
      

      validate = () =>{
        let emailError="";
        let passwordError="";
      

      if(!this.state.email.includes('@')){
          emailError = 'invalid email';
          
      }

      {/*if password blank*/}
      if(!this.state.password){
        passwordError="password cannot be blank";
      }

      if(this.state.password.trim().length<6){
        passwordError = "Password must have at least 6 characters";
      }

      

      if(emailError || passwordError){
      this.setState({emailError, passwordError});
      return false;
      }
      return true;
    };

    render() {

        return (
        
          <div className ="content-wrapper" >         
          <div className="container-fluid" style={{backgroundColor: 'white',
          backgroundImage:'inherit(120deg, #FF4081, #81D4FA)'}} >
            <div className="row justify-content-center mt-0">
              <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
                <div className="card px-0 pt-4 pb-0 mt-3 mb-3" style={{zIndex:'0', border:'none',
              borderRadius:'0.5rem', position:'relative'}}>        
                        
                  <div className="form-card" style={{textAlign:'left', color:'#9E9E9E',background:'white', border:'none', borderRadius:'o',
                  boxShadow:'0 2px 2px 2px', padding:'20px 40px 30px 40px', 
                  boxSizing: 'border-box', width:'94%', margin: '0 3% 20% 3%', position:'relative'}}>
                              
                    <h2 className="fs-title" style={{fontSize:'25', color:'#2C3E50', marginBottom:'10px',fontWeight:'bold', textAlign:'left'}}>Sign In Information</h2>
                              
                      <div className="card-body login card body">
                        <p className="login-box-msg">Sign in to start your session</p>
      
      
     
                    <fieldset style = {{ background:'white', border:'0', borderRadius:'0.5rem',
                            boxSizing:'border-box', width: '100%', margin:'0', paddingBottom:'20px', position:'relative' }}>
                  
                    <form onSubmit = {this.handleSubmit}>
                      
                      <div className="input-group mb-3">
                        <input type="email" name="email"  className="form-control" placeholder="Email" 
                        value ={this.state.email} onChange={this.handleChange}/>
                        <div className="input-group-append">
                          <div className="input-group-text">
                          <span className="fas fa-envelope" /> 
                          <div style = {{fontSize:'12', color:'red'}}>
                            {this.state.emailError}
                          </div>
                         </div>
                        </div>
                      </div>

                      <div style={{fontSize:'12', color:'red'}}>
                        {this.state.passwordError}
                      </div>
                      <div className="input-group mb-3" >
                        <input type="password" name="password" className="form-control" placeholder="Password" 
                        value={this.state.password} onChange={this.handleChange}/>
                          <div className="input-group-append">
                            <div className="input-group-text">
                              <span className="fas fa-lock" /> 
                            </div>
                          </div>
                      </div>
        
                      <div className="row">
                        <div className="col-8">
                          <div className="icheck-primary">
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember">
                              Remember Me
                            </label>
                          </div>
                        </div>
                        {/* /.col */}
                        <div className="col-4">
                          <button type="submit"  className="btn btn-block btn-primary ">Sign In</button>  
                        </div>
                        {/* /.col */}
                      </div>
                    </form>
                    </fieldset>
                    </div>

                        <p className="mb-1">
                          <a href="forgot-password.html">I forgot my password</a>
                        </p>
                        <p className="mb-0">
                          <a href={"/addusers/"+this.state.treehouseId} className="text-center">Register a new membership</a>
                        </p>

                    </div>    
                  </div>
                </div>
              </div>
            </div>
          </div>   
        )
    }
}
