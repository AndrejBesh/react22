import React, { useState } from 'react'
//useState - function
// starts with use
// component must be uppercase
// invoke inside function/component body
// don't call hooks conditonally
const UseStateBasics = () => {
  const [text, setText] = useState('random title')
  const changeTitleHandler = () => {
    if (text === 'random title') {
      setText('Hello world')
    } else {
      setText('random title')
    }
  }
  return (
    <>
      <h1>{text}</h1>
      <button type='button' className='btn' onClick={changeTitleHandler}>
        Change Title
      </button>
    </>
  )
}

export default UseStateBasics
