import React, { Component } from 'react'
export default class ClassComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name : "andi",
            age : 20,
            nilai : [90,-91,-92,-93,-94,-95,-96,-97,67,79],
        };
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.datatitle}</h1>
                <h3>{this.props.menambah}</h3>
               <h1>Nama saya {this.state.name} </h1>
               <h2>Usia saya {this.state.age} tahun</h2>
               <h3>nilai ujian saya setiap mingggunya {this.state.nilai}</h3>
            </div>
        )
    }
}

