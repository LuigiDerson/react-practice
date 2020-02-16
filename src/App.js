import React from 'react'
import './App.css'
import { Toggle } from 'utilities'
import { Modal } from 'elements'
import Button from '@material-ui/core/Button'
import logo from './logo.svg'
import Accordion from './components/accordion/Accordion'

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
      <Accordion singleOpen>
        <div label="Section 1" id="0">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
            accusantium dolor temporibus ea ut rem? Magnam nulla facilis quaerat
            quibusdam soluta, ad molestiae dicta dolorem aliquam porro odit quod
            quasi.
          </p>
        </div>
        <div label="Section 2" id="1">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
            accusantium dolor temporibus ea ut rem? Magnam nulla facilis quaerat
            quibusdam soluta, ad molestiae dicta dolorem aliquam porro odit quod
            quasi.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
            accusantium dolor temporibus ea ut rem? Magnam nulla facilis quaerat
            quibusdam soluta, ad molestiae dicta dolorem aliquam porro odit quod
            quasi.
          </p>
        </div>
        <div label="Section 3">
          <p>Hey you</p>
        </div>
      </Accordion>
    </div>
  )
}

export default App
