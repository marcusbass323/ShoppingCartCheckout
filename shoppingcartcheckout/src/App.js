import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import SubTotal from './components/Subtotal/Subtotal';
import PickupSavings from './components/PickupSavings/PickupSavings';
import TaxesFees from './components/TaxesFees/TaxesFees';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal'
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

this.state = {
  total: 100,
  PickupSavings: -3.85,
  taxes: 0,
  EstimatedTotal: 0
    }
}

  render() {
    return (
      <div className="container">
        <Col className="purchase-card">        
          <SubTotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.PickupSavings} />
          <TaxesFees taxes={this.state.taxes.toFixed(2)} />
          <hr/>
        <EstimatedTotal price={this.state.EstimatedTotal.toFixed(2)} />
        </Col>        
      </div>
    );
  }
}

export default App;
