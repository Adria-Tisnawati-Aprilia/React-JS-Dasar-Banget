import React, { Component } from 'react'

export default class Passing extends Component {

    // gantiMinuman(minuman_baru) {
    //     this.setState({
    //         minuman : minuman_baru
    //     })
    // }
    
    render() {
        const {minuman, gantiMinuman} = this.props;
        return (
            <div>
                <h2>
                    Passing state yang menjadi props : {minuman} 
                </h2>
                <button onClick={() => gantiMinuman("Good Day Freeze" )} > Ganti Minuman</button>
            </div>
        )
    }
}
