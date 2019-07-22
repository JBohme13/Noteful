import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import NotefulContext from './NotefulContext'
import './Main.css'

export default class Main extends Component {
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
                          component={route.main}
                        />
                    )})
                }
            </div>
        )
    }
}