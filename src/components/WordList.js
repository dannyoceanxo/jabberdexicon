import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class WordList extends Component {
  render () {
    const showWord = this.props.active.map((item) => {
      return <p key={item.id}>
        <Link to={`/entry/${item.slug}`}>{item.term}</Link>
      </p>
    })
    return (
      <div className='info'>
        {showWord}
      </div>
    )
  }
}

export default WordList
