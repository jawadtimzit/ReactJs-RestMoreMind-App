import axios from "axios";
import React, { useRef, useEffect } from "react";
// import axios from 'axios';
import { propTypes } from "react-bootstrap/esm/Image";

export default function Paypal(props) {
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking table",
                amount: {
                  currency_code: "USD",
                  value: props.treehouseInfo,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          let newDate = new Date()
          let date = newDate.getDate();
          var paymentData={"paymentID":0,"pay_Date":date,"amount":props.treehouseInfo,"isactive":1}
          axios.post("http://localhost:8080/api/v1/savePayment",paymentData).then((res)=>{
                   if(res.data!=null)
                   {
                       console.log(props.reservationId);
                       axios.get("http://localhost:8080/api/v1/activeReservation?paymentId="+res.data.paymentID+'&reservationId='+props.reservationId).then((res)=>{
                                if(res.data>0)
                                {
                                    alert("Congratulation your reservation is successfully booked");
                                }
                       });
                   }
          });
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    
    <div className = "content wrapper" style={{marginLeft:'500'}}>
      
      <div ref={paypal}></div>

    </div>
  );
}
