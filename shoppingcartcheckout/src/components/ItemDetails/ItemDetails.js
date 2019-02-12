import React, { Component } from 'react';
import { Button, Collapse, Row, Col } from 'react-bootstrap';

export default class ItemDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }
    render() {
        return (
            <div>
                <Button
                    className="item-details-button"
                    variant="link"
                    onClick={() => this.setState({open: !this.state.open})}
                >
                    {this.state.open === false ? `See` : `Hide` } item details 
                    {this.state.open === false ? ` +` : ` -` }
                </Button>
                <Collapse in={this.state.open}>
                    <div>
           
                                    <img
                                        width={100}
                                        height={100}
                                        alt="thumbnai"
                                        src="https://i5.walmartimages.com/asr/fbf69bea-1c49-4ab9-a0c3-a8611e65011f_1.ce6786aef21d03365502a874338d813e.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
                                    />
                        <p>Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Green</p>
                        <strong> {`$${this.props.price}`}</strong>
                            <br />
                            <strong className="price-strike">{`$${this.props.price}`}</strong>

                    </div>
                </Collapse>
            </div>
        )
    }
}