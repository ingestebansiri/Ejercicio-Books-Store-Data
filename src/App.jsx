import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import './App.css'
import booksInitial from './components/data/BooksInitials'
import Books from './components/books/Books'
import NewBook from './components/newBook/NewBook'
import {useState} from 'react'


function App() {
  
const [booksModificados, setBooks] = useState(booksInitial);


const handleBookAdded = (enteredBook) => {

const newBook ={

...enteredBook,
id: Math.random().toString(),
bookRating: Array(enteredBook.bookRating).fill("*"),


};

setBooks ( (prevBooks) => {

return [...prevBooks, newBook];

}




);

};



  return (
    <>
    
    <BrowserRouter>
      
        <Link to="/">Home</Link>
        <Link to="/new">Agregar Libro</Link>
        <Link to="/modifies">Mostrar Libros</Link>
      
      <Routes>
      
        <Route path="/new" element={<NewBook    onBookAdded={handleBookAdded} />                    } />
        <Route path="*" element={<Navigate to="/" />} />

       <Route path="/modifies" element={
<Books
//libros={booksModificados}

/>                   } />
     
  
  
      </Routes>
    </BrowserRouter>








    </>
  )
}

export default App
