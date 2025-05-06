import  { useEffect } from 'react'
import BookItem from '../bookItem/BookItem';
import  { useState } from 'react'
const Books = ({  }) => {


  const [booksModificados, setBooks] = useState([]);

  useEffect(()=> {

fetch("http://localhost:3000/books").then(res=>res.json()).then(data=>setBooks([...data])).catch(err=>console.log(err));



},[]);


  return (

    <div>
   
 
   {

booksModificados.map((unLibro,index) => (


    <BookItem

    key={index}
libroTitle={unLibro.bookTitle}
libroAuthor={unLibro.bookAuthor}
libroRating={unLibro.bookRating}
libroPageCount={unLibro.pageCount}
libroImgUrl={unLibro.imgUrl}

  

/>
)
   )

  

   }

  </div>




)
}

export default Books