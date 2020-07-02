import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import styled from 'styled-components'

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

function increment() {
  return { type: INCREMENT }
}

function decrement() {
  return { type: DECREMENT }
}

export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

// Same as combineReducers
export function counterApp(state = {}, action) {
  return {
    counter: counterReducer(state.counter, action),
  }
}

const Counter = () => {
  // const { counter } = useSelector((state) => state.counter{ counter })
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)

  const handleOnClick = () => {
    setTimeout(() => {
      dispatch(increment())
    }, 1000)
  }
  return (
    <div>
      <H1>{counter}</H1>
      <button onClick={handleOnClick} type="button">
        +
      </button>
      <button onClick={() => dispatch(decrement())} type="button">
        -
      </button>
    </div>
  )
}

const H1 = styled.h1`
  font-size: 3rem;
  color: #fff;
`
export default Counter
