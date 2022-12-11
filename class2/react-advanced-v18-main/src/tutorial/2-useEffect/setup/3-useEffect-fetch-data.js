import React, { useState, useEffect } from 'react'

const url = 'https://api.github.com/users'

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([])
  const getUsers = async () => {
    let res = await fetch(url)
    let data = await res.json()
    setUsers(data)
  }
  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <h3>Github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, avatar_url, login, html_url } = user
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default UseEffectFetchData
