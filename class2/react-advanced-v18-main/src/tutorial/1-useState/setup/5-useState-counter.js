import React, { useState } from 'react'

const UseStateCounter = () => {
  const [counter, setCounter] = useState(0)
  const resetHandler = () => {
    setCounter(0)
  }
  const increaseLaterHandler = () => {
    setTimeout(() => {
      // setCounter(counter + 1) we need to get the value of the previous state - functional aproach
      setCounter((prevState) => {
        return prevState + 1
      })
    }, 2000)
  }
  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>Regular Counter</h2>
        <h1>{counter}</h1>
        <button
          type='button'
          className='btn'
          onClick={() => setCounter(counter - 1)}
        >
          Decrease
        </button>
        <button type='button' className='btn' onClick={resetHandler}>
          Reset
        </button>
        <button
          type='button'
          className='btn'
          onClick={() => setCounter(counter + 1)}
        >
          Increase
        </button>
      </section>
      <section style={{ margin: '4rem 0' }}>
        <h2>More Complex Counter</h2>
        <h1>{counter}</h1>
        <button type='button' className='btn' onClick={increaseLaterHandler}>
          Increase Later
        </button>
      </section>
    </>
  )
}

export default UseStateCounter
