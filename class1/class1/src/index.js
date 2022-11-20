import React from 'react'
import { createRoot } from 'react-dom/client'

//stateless functional component
//always return JSX
//return single element
//div/section/article or Fragment <> </>
//use cammelCase for html atribute
//className instead of class
//formating
//Nesting Components & Tools
//creating a booklist with book componetnt with img,title,author components for reusablity
//CSS
import './index.css'
// const title = 'I Love You To The Moon and Back'
// const author = 'Amelia Hepworth'
// const img =
//   'https://m.media-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg'
const firstBook = {
  img: 'https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UY327_FMwebp_QL65_.jpg',
  title: ' I Love You To The Moon and Back',
  author: 'Amelia Hepworth',
}
const secondBook = {
  img: 'https://m.media-amazon.com/images/I/71aLultW5EL._AC_UY327_FMwebp_QL65_.jpg',
  title: 'Our Class is a Family',
  author: 'Shannon Olsen ',
}
function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore illo
        reiciendis molestiae sed quis laborum aut earum aspernatur accusamus
        nemo vitae, nulla officiis minus.
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  )
  // rendering other components inside the root component
}
const Book = (props) => {
  // const Book = ({img,title,author}) => { // direct destructing
  const { img, title, author } = props
  //       With destructing
  //  <article className='book'>
  //   <img src={props.img} alt='book' />
  //   <h1>{props.title}</h1>
  //   <h4>{props.author}</h4>
  // </article>
  return (
    <article className='book'>
      <img src={img} alt='book' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {props.children}
    </article>
  )
}
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<BookList />)
