
import React, { Component } from 'react'
import { withRouter, Route } from 'react-router-dom'
import styles from '../styles/Search.scss'
const token = 'vorpal'

class Search extends Component {
  state={
    input: null
  }

  update = (query) => {
    this.setState({ input: query })
  }

_go = e => {
  e.preventDefault()
  const query = this.refs.query.value
  const path = query.length > 0 ? `/search/${query}` : '/'
  this.props.history.push(path)
  this.update(query)
}

searchWord = (searchTerm) => {
  const url = `https://jabberdexicon.herokuapp.com/entries?access_token=${token}`
  window.fetch(url)
  .then(r => r.json())
  .then(data => {
    const searchFilter = data.filter(item => item.term.includes(searchTerm))
    console.log(searchFilter)
  })
}

  _focus = (e) => {
    e.target.setSelectionRange(0, e.target.value.length)
  }

  _submit = e => {
    e.preventDefault()
    this.props.searchWord(this.refs.searchText.value)

  render () {
    return (
      <div className={this.props.clicked ? 'hidden' : 'userSearch'}>
        <form onChange={this.go}>
          <input type='search' className='searchBox' onFocus={this._focus} onSubmit={this.preventDefault} ref='query' placeholder='Search' />
          {/* <button className='searchBtn' type='submit'>Go </button> */}
        </form>
          <Route path='/search' />
      </div>
    )
  }
}

export default withRouter(Search)
