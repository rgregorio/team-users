import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App">
          <p className="App-intro">
            <Link to="/team" className="App-link">Teams page</Link><br></br>
              Go there to see the challange working.
          </p>
        </header>        
      </div>
    );
  }
}
export default App;