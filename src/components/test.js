import React, { Component } from 'react'

export default class test extends Component {
    render() {
        return (
            <div>
                <h3>Hello from test.</h3>

                <div class="d-flex flex-row flex-nowrap">
                    <div class="card card-block mx-2" style={{minWidth: "300px"}}>Card</div>
                    <div class="card card-block mx-2" style={{minWidth: "300px"}}>Card</div>
                    <div class="card card-block mx-2" style={{minWidth: "300px"}}>Card</div>            
                </div>
            </div>
        )
    }
}
