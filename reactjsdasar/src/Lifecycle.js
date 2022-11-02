import React, { Component } from 'react'
import SubLifecycle from './SubLifecycle';

export default class Lifecycle extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            minuman : 'Refresh Juice',
            data : {},
            tampilHalamanSub : false,
        };
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    data : json
                });
            })
    }
    ubahMinuman(value) {
        this.setState({
            minuman: value
        })
    }
    
    render() {
        
        return (
            <div>
                <h2>{this.state.minuman}</h2>
                
                {this.state.tampilHalamanSub && <SubLifecycle ubahMinuman= {(value) => this.ubahMinuman(value)}/>}
                
                <button onClick={() =>this.setState({tampilHalamanSub : !this.state.tampilHalamanSub})}>Tampil Halaman Sub</button>
            </div>
        );
    }
}
