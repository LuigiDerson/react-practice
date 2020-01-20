import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Toggle } from 'utilities';
import { Modal } from 'elements';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
      <Toggle>
        {({ on, toggle }) => (
          <>
            <Button variant="contained" color="primary" onClick={toggle}>
              Login
            </Button>
            <Modal on={on} toggle={toggle}>
              <h1>Sing up</h1>
            </Modal>
          </>
        )}
      </Toggle>
    </div>
  );
}

export default App;
