const Book = ({ img, title, author }) => {
  return (
    <article className='book'>
      <img src={img} alt='book' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}
export default Book
