import React, { Component } from 'react'

class Definition extends Component {
  render () {
    const showWord = this.props.active.map((item) => {
      return <p key={item.id}> {item.term} </p>
    })
    return (
      <div className='info'>
        {showWord}
      </div>
    )
  }
}

export default Definition
