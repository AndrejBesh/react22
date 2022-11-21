import React, { useState } from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)
  const removePerson = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  return (
    <>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removePerson(id)}>remove</button>
          </div>
        )
      })}
      {people.length !== 0 && (
        <button className='btn' onClick={() => setPeople([])}>
          clear items
        </button>
      )}
    </>
  )
}

export default UseStateArray
