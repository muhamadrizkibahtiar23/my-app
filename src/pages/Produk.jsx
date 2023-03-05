import React, { Component } from 'react'
import "../CSS/Produk.css"
// import Jumbotron from "./Gambar"


class Produk extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stock: this.props.stock,
            sub: "beli",
            status: "tersedia",
            disabled: false


        }
    }

    ButtonBeli = () => {
        this.setState({
            stock: this.state.stock - 1
        })
        if (this.state.stock === 1) {
            this.setState({
                status: "Habis",
                disabled: true
            })
        }
    }
    render() {
        // let Produk = [
        //     { src:'/assets/Vivobook 13 Slate OLED.PNG', alt='1'},
        //     { src:'/assets/ROG Strix SCAR 17.PNG', alt='2'},
        //     { src:'/assets/BR1100F.PNG', alt='3'},
        //     { src:'/assets/ROG Zephyrus G15 GA503.PNG', alt='4'},
        //     { src:'/assets/TUF Gaming F15 2022.PNG', alt='5'},
        //     { src:'/assets/ExpertBook B1 B1400.PNG', alt='6'}
        // ]


        return (
            <div className="boxsize">
                <h3>{this.props.nama}</h3>
                <div>{this.props.src}</div>
                {/* <img src='/assets/Vivobook 13 Slate OLED.PNG' alt='1'/> */}
                {/* <div>{
            Produk.map((index)=><img src={index.src}alt={index.alt} width="350" height="auto"/>)
            }</div> */}
                <p>Rp {this.props.harga}</p>
                <p>{this.state.stock}</p>
                <button className="btn-click" onClick={this.ButtonBeli} disabled={this.state.disabled}>Beli</button>
                <p>{this.state.status}</p>
            </div>
        )
    }
}

export default Produk