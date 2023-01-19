import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classes from './index.module.css'
import { increment, decrement } from '../../store/slice/counterSlice'

export const TestReduxToolkit = () => {
  const state = useSelector(state => state)
  const count = state.counter.value
  const dispatch = useDispatch()
  return (
    <div className={classes.wrapper}>
      <div>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <span style={{ margin: '0 10px' }}>{count}</span>
        <button
          type='primary'
          aria-label="Increment value"
          onClick={() => dispatch(increment(3))}
        >
          Increment
        </button>
      </div>
    </div>
  )
}







