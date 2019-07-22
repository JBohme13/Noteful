import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import NotefulContext from './NotefulContext'

export default class Sidebar extends Component {
    static contextType = NotefulContext;
    render() {
        const value = this.context;
        return(
            <div className='main-container'>
                {
                    value.routes.map((route, i) => {
                      return(
                        <Route
                          key={i}
                          path={route.path}
                          exact={route.exact}
                          component={route.sidebar}
                        />
                    )})
                }
            </div>
        )
    }
}