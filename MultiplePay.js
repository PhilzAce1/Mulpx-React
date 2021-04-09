import React, { Component } from 'react';
import '../assets/css/MultiplePay.css';

export class MultiplePay extends Component {
    render() {
        return (
            <div className="container">
                <div className="row m-2">
                    <div className="col-4 box pt-2">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="logo-bg mr-1 px-1 py-4 rounded">
                            <img
                                src="https://img.icons8.com/fluent-systems-filled/30/000000/select-cell.png"
                                alt="logo"
                            />
                            </div>
                            <div>
                            <strong>Multiple Pay</strong>
                            <br/>
                            <small>Send payments to many people at a go.!</small>
                            </div>
                            <button
                            type="button"
                            className="btn rounded-pill button"
                            >
                            Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MultiplePay
