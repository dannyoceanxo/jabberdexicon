import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Home extends Component {
  render () {
    return <div>
      <div className='addItemBox'>
        <NavLink to='/addWord' className='HomeLink'>
          <button className='addInfo'>
            <i className='fa fa-plus' />
          </button>
        </NavLink>
    </div>
    <header>
      <div className='topNav'>
        <NavLink to='/' className='homeLink'>
          <h1><jabberdexicon</h1>
        </NavLink>
      </div>
    </header>
  </div>
  }
}

export default Home
