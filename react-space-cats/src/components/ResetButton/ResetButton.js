import React, { Component } from 'react';

import './ResetButton.css';

export default class ResetButton extends Component {
    render() {
        return (
            <button onClick={this.props.reset}>RESET</button>
        )
    }
}