import React, { Component } from 'react';
// import iconSymbols from '/images/iconSymbols.svg';
import iconSymbols from './iconSymbols.svg';

export default class Icon extends Component {
    render() {
        return (
            <span className="custom-icon">
                <svg viewBox= "0 0 16 16" className={`icon icon-${this.props.viewClass}`}>
                    <use xlinkHref={`${iconSymbols}#icon-${this.props.icon}`} />
                </svg>
            </span>
        );
    }
}
