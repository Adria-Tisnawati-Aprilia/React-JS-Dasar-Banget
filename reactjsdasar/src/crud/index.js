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
        
        if(this.state.id === "") {
            this.setState({
                minumans: [
                    ...this.state.minumans,
                    {
                        id: this.state.minumans.length+1,
                        nama: this.state.nama,
                        deskripsi: this.state.deskripsi,
                        harga: this.state.harga
                    },
                ],
            });
        } else {
            const minumanYangTidakDiPilih = this.state.minumans
                .filter((minuman) => minuman.id !== this.state.id)
                .map((filterMinuman) => {
                    return filterMinuman;
                });
            
                this.setState({
                    minumans: [
                minumanYangTidakDiPilih,
                {
                    id: this.state.minumans.length+1,
                    nama: this.state.nama,
                    deskripsi: this.state.deskripsi,
                    harga: this.state.harga
                },
            ],
        });
        }
        
        
                this.setState({
                    nama : "",
                    deskripsi : "",
                    harga : 0,
                    id : ""
                })
            }
            
            editData = (id) => {
                const minumanYangDiPilih = this.state.minumans
                .filter((minuman) => minuman.id === id)
                .map((filterMinuman) => {
                    return filterMinuman
                })
                
                this.setState({
                    nama : minumanYangDiPilih[0].nama,
                    deskripsi : minumanYangDiPilih[0].deskripsi,
                    harga : minumanYangDiPilih[0].harga,
                    id : minumanYangDiPilih[0].id,
                })
        }
    
    render() {
        return (
            <div>
                <NavbarComponent />
                <div className="container mt-4">
                    <Tabel minumans = {this.state.minumans} editable = {this.editData}/>
                    <Formulir {...this.state} handleChange={ this.handleChange} handleSubmit={this.handleSubmit}/>
                </div>
            </div>
        )
    }
}
