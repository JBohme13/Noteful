import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import SidebarError from './SidebarError'
import PropTypes from 'prop-types'
import './Sidebar.css'

export default class Sidebar extends Component {
    render() {
        return(
          <SidebarError>
            <section className='sidebar-container'>
              {
                this.props.routes.map((route, i) => {
                  return(
                    <Route
                      key={i}
                      path={route.path}
                      exact={route.exact}
                      component={route.sidebar}
                    />
                  )
                })
              }
            </section>
          </SidebarError>
        )
    }
}

Sidebar.propTypes = {
  routes: PropTypes.array,
}

Sidebar.defaultProps = {
  routes: [],
}