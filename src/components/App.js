import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Search from './Search'
import Definition from './Definition'
import NewWord from './NewWord'
import WordList from './WordList'
import styles from '../styles/App.scss'
const token = 'example'

class App extends Component {
  state = {
    active: [],
    search: [],
    clicked: false
  }

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

  addWord = (newTerm, newDef) => {
    const url = `https://jabberdexicon.herokuapp.com/entries?access_token=${token}`
    window.fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'entry': {
          'term': newTerm,
          'definition': newDef
        }
      })
    }).then(r => r.json())
      .then(data => {
        this.loadWords()
        console.log(data)
      })
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

  _click = () => {
    this.setState({ clicked: true })
    console.log('click')
  }

  render () {
    return <Router>
      <div className={styles.App}>
        <header>
          <h1>Welcome to the Jabberdome, motherfuckers</h1>
        </header>
        <main>
          <NewWord addWord={this.addWord} />
          <Search />
          <Route path='/entry/:slug' component={Definition} />
          <WordList active={this.state.active} />
        </main>
        <footer>
          <div className={styles.copyright}>
            <p>&copy; dannyoceanxo, 2017</p>
          </div>
        </footer>
      </div>
    </Router>
  }
}
export default App
