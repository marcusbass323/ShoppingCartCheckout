import React, { Component } from "react";

export default class Billing extends Component {

    render(){
        return (
                <div>
            <h1 className="checkout">Payment</h1>
            <div className="billingContainer">
                <div>
                <div>
                <h4>Enter Payment Details</h4>    
                <br/> 
                <div>
                <input type="text" placeholder="Name on Card"/>
                </div>   
                <br/>        
                <div>
                <input type="text" placeholder="CC#"/>
                </div>
                <br/>   
                <div>
                <input type="text" placeholder="EXP"/>
                </div>
                <br/>   
                <div>
                <input type="text" placeholder="CVV"/>
                </div>
                </div>
                <br/>   
                <button className="buyNow">Buy Now</button>
            </div>
            </div>
            </div>
        )
    }
    
}

