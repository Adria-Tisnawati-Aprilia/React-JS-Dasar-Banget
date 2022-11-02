import React, { Component } from 'react'
import Formulir from './Formulir'
import NavbarComponent from './NavbarComponent'
import Tabel from './Tabel'

export default class Crud extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            minumans : [],
            nama : "",
            deskripsi : "",
            harga : 0,
            id : ""
        }
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.nama] : event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        
        this.setState({
            minumans: [
                ...this.state.minumans,
                {
                    id: this.state.minumans.length+1,
                    nama: this.state.nama,
                    deskripsi: this.state.deskripsi,
                    harga: this.state.harga
                },
                
                this.setState({
                    nama : "",
                    deskripsi : "",
                    harga : 0,
                    id : ""
                })
            ]
        })
    }
    
    render() {
        return (
            <div>
                <NavbarComponent />
                <div className="container mt-4">
                    <Tabel minumans = {this.state.minumans}/>
                    <Formulir {...this.state} handleChange={ this.handleChange} handleSubmit={this.handleSubmit}/>
                </div>
            </div>
        )
    }
}
