import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import './App.css'
// import { Toggle } from 'utilities'
// import { Modal } from 'elements'
// import Button from '@material-ui/core/Button'
// import Accordion from './components/accordion/Accordion'
import HoverMenu from './components/hoverMenu/HoverMenu'

import rootReducer from './reducers'

const store = configureStore({
  reducer: rootReducer,
})

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HoverMenu />
        {/* <Toggle>
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
      </Toggle> */}
        {/* <Accordion>
        <div label="Section 1">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
            accusantium dolor temporibus ea ut rem? Magnam nulla facilis quaerat
            quibusdam soluta, ad molestiae dicta dolorem aliquam porro odit quod
            quasi.
          </p>
        </div>
        <div label="Section 2">
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
      </Accordion> */}
      </div>
    </Provider>
  )
}

export default App
