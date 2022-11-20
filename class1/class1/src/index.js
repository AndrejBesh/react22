import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
const books = [
  {
    id: 1,
    img: 'https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UY327_FMwebp_QL65_.jpg',
    title: ' I Love You To The Moon and Back',
    author: 'Amelia Hepworth',
  },
  {
    id: 2,
    img: 'https://m.media-amazon.com/images/I/71aLultW5EL._AC_UY327_FMwebp_QL65_.jpg',
    title: 'Our Class is a Family',
    author: 'Shannon Olsen ',
  },
  {
    id: 3,
    img: 'https://m.media-amazon.com/images/I/A12jXeTksPL._AC_UY327_FMwebp_QL65_.jpg',
    title: 'The Day You Begin',
    author: ' Jacqueline Woodson and Rafael López  ',
  },
]

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book} /> //spreading all the properties from the object, with that we don't send the whole object trough the props
      })}
    </section>
  )
}
const Book = ({ img, title, author }) => {
  // const { img, title, author } = props
  return (
    <article className='book'>
      <img src={img} alt='book' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<BookList />)
