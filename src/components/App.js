import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Search from './Search'
import ShowSearch from './Showsearch'
import Result from './Result'
import NewWord from './NewWord'
import Letters from './Letters'
import BrowseLetter from './BrowseLetter'
import EditItem from './EditItem'
const token = 'vorpal'

class App extends Component {
  state = {
    active: [],
    search: [],
    clicked: false
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
        <nav>
          <ul>
            <li><Link to='/browse/A'>A</Link></li>
            <li><Link to='/browse/B'>B</Link></li>
            <li><Link to='/browse/C'>C</Link></li>
            <li><Link to='/browse/D'>D</Link></li>
            <li><Link to='/browse/E'>E</Link></li>
            <li><Link to='/browse/F'>F</Link></li>
            <li><Link to='/browse/G'>G</Link></li>
            <li><Link to='/browse/H'>H</Link></li>
            <li><Link to='/browse/I'>I</Link></li>
            <li><Link to='/browse/J'>J</Link></li>
            <li><Link to='/browse/K'>K</Link></li>
            <li><Link to='/browse/L'>L</Link></li>
            <li><Link to='/browse/M'>M</Link></li>
            <li><Link to='/browse/N'>N</Link></li>
            <li><Link to='/browse/O'>O</Link></li>
            <li><Link to='/browse/P'>P</Link></li>
            <li><Link to='/browse/Q'>Q</Link></li>
            <li><Link to='/browse/R'>R</Link></li>
            <li><Link to='/browse/S'>S</Link></li>
            <li><Link to='/browse/T'>T</Link></li>
            <li><Link to='/browse/U'>U</Link></li>
            <li><Link to='/browse/V'>V</Link></li>
            <li><Link to='/browse/W'>W</Link></li>
            <li><Link to='/browse/X'>X</Link></li>
            <li><Link to='/browse/Y'>Y</Link></li>
            <li><Link to='/browse/Z'>Z</Link></li>
          </ul>
        </nav>
        <main>
          <NewWord addWord={this.addWord} />
          <Search />
          <Route path='/entry/:slug' component={Definition} />
          <Route path='/browse/:letter' component={Browse} />
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
