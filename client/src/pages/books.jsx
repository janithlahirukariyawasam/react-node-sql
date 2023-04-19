import React, { useEffect, useState } from "react";
import axios from "axios";

function Books() {
  const [bookset, setBooks] = useState([]);
  useEffect(()=>{
    const fetchedBooks = async ()=>{
        try{
            const res = await axios.get('http://localhost:8800/books')
            setBooks(res.data)
        }catch(err){
            console.log(err)
        }
    }
    fetchedBooks();
  },[])

  return (
    <div>
    <h1>Book Shop</h1>
    <div className="books">
      {bookset.map((book) => (
        <div key={book.id} className="book">
          <img src={book.cover} alt="" />
          <h2>{book.title}</h2>
          <p>{book.desc}</p>
          <span>${book.price}</span>
        </div>
      ))}
    </div>
    </div>
  );

}
export default Books;
