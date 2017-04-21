import React, { Component } from 'react'
import WordList from './WordList'
const token = 'vorpal'

class Browse extends Component {
  state={active: []}
  // When this react component mounts
  loadWords () {
    // the URL to "get" todo items
    const url = `https://jabberdexicon.herokuapp.com/entries?access_token=${token}`
    // make an AJAX request to that URL
    window.fetch(url)
      // fetch returns a promsise, which yeilds the "response", we call it 'r'
      // The response has a method json(), that returns another promise
      .then(r => r.json())
      // then JSON is done parsing, the promise will yield the "data"
      .then(data => {
        // use the data as the state for our items
        this.setState({
          active: data
        })
      })
  }
  componentDidMount () {
    this.loadWords()
  }
  render () {
    return <div className='Browse'>
      <WordList active={this.state.active.filter((entry) => {
        return this.props.match.params.letter === entry.term[0].toUpperCase()
      })} />
    </div>
  }
}

export default Browse
