import React, { Component } from 'react';
import axios from 'axios';
import Paypal from "./Paypal";
export default class ReservationDates extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
           setCheckout:false,
           startDate:null,
           endDate:null,
           treehouseId:0,
           userID:0,
           treehouse:null,
           reservationId:0
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
    };
    
    componentDidMount(){

       
        this.setState({userID : this.props.match.params.userId});
        this.setState({treehouseId : this.props.match.params.treehouseId});
         //this.props.match.params.id;
        axios.get('http://localhost:8080/api/v1/getTreeHouseById?Id='+this.props.match.params.treehouseId).then((res)=>{
               this.setState({treehouse:res.data});
        });
         }

    handleInputChange(event) {
        const target = event.target;
        const value =  target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmitForm(event)
    {
        console.log(this.state.treehouseId+"   "+this.state.userID);
        const reservation={"start_Date":this.state.startDate,"end_Date":this.state.endDate,"isactive":0,"admin_AdminSsn":1,"user_UserID":this.state.userID,"treehouse_TreehouseID":this.state.treehouseId,"payment_PaymentID":1};
        console.log(reservation);
        if(this.state.startDate !=null && this.state.endDate)
        {
            if(this.state.startDate<this.state.endDate)
            {
                axios.get("http://localhost:8080/api/v1/getValidatedDate?StartDate="+this.state.startDate+"&EndDate="+this.state.endDate+"&treehouseID="+this.state.treehouseId).then((res)=>{
                      if(res.data==0)
                      {
                           axios.post("http://localhost:8080/api/v1/saveReservation", reservation).then((res)=>{
                                if(res.data.reservationID>0)
                                {
                                    console.log(res.data.reservationID);
                                    this.setState({setCheckout:true, reservationId:res.data.reservationID});
                                    
                                    alert("Congratulation you have reserved the tree house"); 
                                }
                            });
                      }
                      else
                      {
                          alert("please choose another dates There is a clash between reservation dates");
                      }
                });
            }
            else
            {
                alert("Start Date is Greater than End date");
            }
        }
        else
        {
            alert("Please select Reservation Dates");
        }
    }
    render() {
        return (
            <div className = "content-wrapper">
                <div className="container-fluid" style={{backgroundColor: 'white',backgroundImage:'inherit(120deg, #FF4081, #81D4FA)'}} >
                    <div className="row justify-content-center mt-0">            
                        <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
                            <div className="card px-0 pt-4 pb-0 mt-3 mb-3" style={{zIndex:'0', border:'none',borderRadius:'0.5rem', position:'relative'}}>
                                <div className="row">
                                    <div className="col-md-12 mx-0">
                                        <form style={{textAlign:'center', position:'relative', marginTop:'20px'}}>
                                            <fieldset style = {{background:'white', border:'0', borderRadius:'0.5rem',boxSizing:'border-box', width: '100%', margin:'0', paddingBottom:'20px', position:'relative' }}>
                                                <div className="form-card" style={{ textAlign:'left', color:'#9E9E9E', background:'white', border:'none', borderRadius:'o',boxShadow:'0 2px 2px 2px', padding:'20px 40px 30px 40px', boxSizing: 'border-box', width:'94%', margin: '0 3% 20% 3%', position:'relative'}}>
                                                    <h2 className="fs-title" style={{fontSize:'25', color:'#2C3E50', marginBottom:'10px',fontWeight:'bold', textAlign:'left'}}>Reservation Dates</h2> 
                                                    <input type="date" onChange={this.handleInputChange}  value={this.state.startDate} name="startDate" style={{padding:'0px 8px 4px 8x',border:'none', borderBottom: '1px', borderRadius:'0px', marginBottom:'25px', marginTop:'2px', width:'100%', boxSizing:'border-box',fontFamily:'-moz-initial', color:'#2C3E50', fontSize:'16px', letterSpacing:'1px' , boxShadow:'none', border:'none', borderBottom:'2px', outlineWidth:'0'  }} required/> 
                                                    <input type="date" onChange={this.handleInputChange}  value={this.state.endDate} name="endDate" style={{padding:'0px 8px 4px 8x',border:'none', borderBottom: '1px', borderRadius:'0px', marginBottom:'25px', marginTop:'2px', width:'100%', boxSizing:'border-box',fontFamily:'-moz-initial', color:'#2C3E50', fontSize:'16px', letterSpacing:'1px' , boxShadow:'none', border:'none', borderBottom:'2px ', outlineWidth:'0' }}  required/>
                                                </div> 
                                                <a  className ="btn btn" onClick={this.handleSubmitForm}  style = {{ width:'100px', background:'#616161', fontWeight:'bold',color:'white', boder:'0', borderRadius:'0px', cursor:'pointer', padding:'10px 5px', margin:'10px 5px', boxShadow:'0 0 0 2px white, 0 0 0 3px #616161'}}>Reserve</a>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {(this.state.setCheckout)?<Paypal treehouseInfo={this.state.treehouse.price} reservationId={this.state.reservationId}/>:""}
            </div>
        )
    }
}

