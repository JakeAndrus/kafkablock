import './App.css';
import JobList from '../JobList'
import React from 'react'
import { getJobs } from '../../adapters/jobs'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      jobs: getJobs()
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Get your jobs here</h1>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <JobList jobs={ this.state.jobs }></JobList>
      </div>
    );
  }
}

export default App;
