import React, { Component } from 'react'
import Passing from './Passing';

export default class StateProps extends Component {
    constructor(props) {
        super(props);
            this.state = {
                minuman : 'Refresh Juice'  
            }
    }
    
    gantiMinuman = (minuman_baru) => {
        this.setState({
            minuman : minuman_baru
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.minuman}</h2>
                <button onClick={() => this.gantiMinuman("Good Day Freeze" )} > Ganti Minuman</button>
                <Passing minuman={this.state.minuman} gantiMinuman={this.gantiMinuman}/>
            </div>
        )
    }
}
