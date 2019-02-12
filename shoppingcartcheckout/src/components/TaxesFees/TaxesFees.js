import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

export default class TaxesFees extends Component {
    render() {
        return (
            <Row ClassName="show-grid">
                <Col md={6}>Est. taxes & fees (Based on 89141)</Col>
                <Col md={6}>{`$${this.props.taxes}`}</Col>
            </Row>
        )
    }
}