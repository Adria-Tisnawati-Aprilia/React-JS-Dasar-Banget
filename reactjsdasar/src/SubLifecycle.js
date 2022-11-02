import React, { Component } from 'react'

export default class SubLifecycle extends Component {

    componentWillUnmount() {
        this.props.ubahMinuman("Good Day Freeze")
    }
    
    render() {
        return (
        <div>
            SubLifecycle
        </div>
        )
    }
}
