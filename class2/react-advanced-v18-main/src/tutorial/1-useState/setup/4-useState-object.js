import React, { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    message: 'random message',
  })
  const changeMessage = () => {
    setPerson({ ...person, message: 'hello world' }) //using spread opr. to copy the properties, and change the property we want
  }
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button type='button' className='btn' onClick={changeMessage}>
        change text
      </button>
    </>
  )
}

export default UseStateObject
