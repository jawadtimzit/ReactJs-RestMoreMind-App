import React, { Component } from 'react'

export default class Accountinfo extends Component {
    render() {
        return (
            
 <div className = "content-wrapper">              
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
            <form style={{textAlign:'center', position:'relative', marginTop:'20px'}}>
              {/* progressbar */}
             {/*} <ul id="progressbar" style={{marginBottom:'30px', overflow:'hidden', color:'lightgrey', 
            }}>
              
                <li className="active" id="account" style={{color: '#000000', listStyleType:'none',fontSize:'12',width:'25',float:'left',position:'relative', content:'\f007'}}><strong>Account</strong></li> 
                <li id="personal" style={{listStyleType:'none',fontSize:'12',width:'25',float:'left',position:'relative'}}><strong>Personal</strong></li>
                <li id="payment" style={{listStyleType:'none',fontSize:'12',width:'25',float:'left',position:'relative'}}><strong>Payment</strong></li>
                <li id="confirm" style={{listStyleType:'none',fontSize:'12',width:'25',float:'left',position:'relative'}}><strong>Finish</strong></li>
              </ul> {/* fieldsets */}
              <fieldset style = {{ background:'white', border:'0', borderRadius:'0.5rem',
              boxSizing:'border-box', width: '100%', margin:'0', paddingBottom:'20px', position:'relative' }}>
                
                
                <div className="form-card" style={{textAlign:'left', color:'#9E9E9E', background:'white', border:'none', borderRadius:'o',
                boxShadow:'0 2px 2px 2px', padding:'20px 40px 30px 40px', 
                boxSizing: 'border-box', width:'94%', margin: '0 3% 20% 3%', position:'relative'}}>
                  
                  
                  <h2 className="fs-title" style={{fontSize:'25', color:'#2C3E50', marginBottom:'10px',fontWeight:'bold', textAlign:'left'}}>Account Information</h2> <input type="email" name="email" placeholder="Email Id" style={{padding:'0px 8px 4px 8x',
                  border:'none', borderBottom: '1px', borderRadius:'0px', marginBottom:'25px', marginTop:'2px', width:'100%', boxSizing:'border-box',
                  fontFamily:'-moz-initial', color:'#2C3E50', fontSize:'16px', letterSpacing:'1px' , boxShadow:'none', border:'none', borderBottom:'2px', outlineWidth:'0' }}/> <input type="text" name="uname" placeholder="UserName" style={{padding:'0px 8px 4px 8x',
                  border:'none', borderBottom: '1px', borderRadius:'0px', marginBottom:'25px', marginTop:'2px', width:'100%', boxSizing:'border-box',
                  fontFamily:'-moz-initial', color:'#2C3E50', fontSize:'16px', letterSpacing:'1px' , boxShadow:'none', border:'none', borderBottom:'2px', outlineWidth:'0' }}/> <input type="password" name="pwd" placeholder="Password" style={{padding:'0px 8px 4px 8x',
                  border:'none', borderBottom: '1px', borderRadius:'0px', marginBottom:'25px', marginTop:'2px', width:'100%', boxSizing:'border-box',
                  fontFamily:'-moz-initial', color:'#2C3E50', fontSize:'16px', letterSpacing:'1px' , boxShadow:'none', border:'none', borderBottom:'2px', outlineWidth:'0' }}/> <input type="password" name="cpwd" placeholder="Confirm Password" 
                  style={{padding:'0px 8px 4px 8x',
                  border:'none', borderBottom: '1px', borderRadius:'0px', marginBottom:'25px', marginTop:'2px', width:'100%', boxSizing:'border-box',
                  fontFamily:'-moz-initial', color:'#2C3E50', fontSize:'16px', letterSpacing:'1px' , boxShadow:'none', border:'none', borderBottom:'2px', outlineWidth:'0' }} />
                </div> 
               
                
                <a className ="btn btn" href ="personalinfo" style={{width:'100px', background:'skyblue', fontWeight:'bold', color:'white',
                border:'0', borderRadius:'0px', cursor:'pointer', padding:'10px 5px', margin:'10px 5px', boxShadow:'0 0 0 2px white, 0 0 0 3px skyblue'
                
              }} > Next Step</a>
              
              
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
