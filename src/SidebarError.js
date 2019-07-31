import React, { Component } from 'react'

export default class SidebarError extends Component {
    constructor(props) {
        super(props);
        this.state= {
            hasError: false,
        }
    }

    static getDerivedStatefromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return(
                <h2>'Something went wrong, please try again'</h2>
            );
        }
        return this.props.children;
    }
}