import React, { useEffect, useState } from 'react';
import './DisplayBooks.css';

function DisplayBooks() {
  const [filter, setFilter] = useState('');
  const [books, setBooks] = useState([]);

  const handleInputChange = (event) => {
    setFilter(event.target.value.toUpperCase());
  };

  useEffect( () => {
    const getAllBooks = async () => {
      const response = await fetch("http://localhost:5000/book/get");
      const bookList = []
      if (response.ok) {
        const result = await response.json();
        result["books"].forEach(book => {
          const bookInfo = { title: book.title, authors: book.authors, issued: book.issued }
          // console.log(bookInfo)
          bookList.push(bookInfo)
        });
        console.log(bookList)
        setBooks(bookList);
      }
    }
    getAllBooks();
  }, [])
  useEffect(() => {
    console.log("Main book array", books)
  },[books])
  const filterTable = () => {
    const rows = [
      { name: 'Alfreds Futterkiste', country: 'Germany' },
      { name: 'Berglunds snabbkop', country: 'Sweden' },
      { name: 'Island Trading', country: 'UK' },
      { name: 'Koniglich Essen', country: 'Germany' },
      { name: 'Laughing Bacchus Winecellars', country: 'Canada' },
      { name: 'Magazzini Alimentari Riuniti', country: 'Italy' },
      { name: 'North/South', country: 'UK' },
      { name: 'Paris specialites', country: 'France' },
    ];

    return books.map((book, index) => (
      <tr key={index} style={{ display: book.title.toUpperCase().includes(filter) ? '' : 'none' }}>
        <td>{book.title}</td>
        <td>{book.authors}</td>
        <td>{book.issued}</td>
      </tr>
    ));
  };

  return (
    <>
    <div className='bookdisplay'>
      <input
        type="text"
        className="myInput"
        onChange={handleInputChange}
        placeholder="Search for names.."
        title="Type in a name"
      />
      <table className="myTable">
        <thead>
          <tr className="header">
            <th style={{ width: '60%' }}>Title</th>
            <th style={{ width: '30%' }}>Authors</th>
            <th style={{ width: '10%' }}>Issued</th>
          </tr>
        </thead>
        <tbody>{filterTable()}</tbody>
      </table>
    </div>
    </>
  );
}

export default DisplayBooks;
