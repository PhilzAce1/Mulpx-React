import React, { Component } from 'react';
import '../assets/css/DBBrownBox.css';

export default class DBBrownBox extends Component {
    render() {
      return (
            <div className="container">
                <div className="row m-2">
                    <div className="col-2 box">
                        <div className="d-flex justify-content-between my-2">
                            <i className="fas fa-2x fa-paper-plane icon"></i>
                            <i className="fas fa-1x fa-ellipsis-v icon"></i>
                        </div>
                        <div className="d-flex align-items-start">
                            <strong className="amount">&#8358;980,768</strong>
                        </div>
                        <div className="d-flex justify-content-between mt-1">
                            <small>Available Balance</small>
                            <i className="fas fa-1.5x fa-circle-notch"></i>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}
