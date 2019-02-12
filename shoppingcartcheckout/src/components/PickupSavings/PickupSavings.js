import React, { Component } from 'react';
import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';

var styles = {
    pickupSavings: {
        textDecoration: 'underline'
    },
    totalSavings: {
        color: 'red',
        fontWeight: 800,

    }
}

export default class PickupSavings extends Component {
    render() {
        const tooltip = (
            <Tooltip id="tooltip">
                <p>
                    Picking up your order in the store helps
                    cut costs and we pass the savings on to you.
                </p>
            </Tooltip>
        );

        return (
            <Row className="show-grid">
                <Col md={6}>
                    <OverlayTrigger placement="bottom" overlay={tooltip}>
                    <div style={styles.pickupSavings}>Pickup Savings</div>
                    </OverlayTrigger>
                </Col>
                <Col style={styles.totalSavings} md={6}>
                    {`$${this.props.price}`}
                </Col>
            </Row>
        )
    }
}