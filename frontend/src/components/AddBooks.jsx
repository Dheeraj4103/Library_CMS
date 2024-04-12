import React, { useState } from 'react';
import './AddBooks.css';

function AddBooks() {
  const [formData, setFormData] = useState({
    title: '',
    authors: '',
    description: '',
    issued: '',
    location: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/book/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Book added successfully!');
        // Reset form fields after successful submission
        setFormData({
          title: '',
          authors: '',
          description: '',
          issued: '',
          location: ''
        });
      } else {
        alert('Failed to add book, May be there is a problem');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='addbooks'>
      <form onSubmit={handleSubmit}>
        <h1>Book Details Form</h1>
        <label htmlFor="name">Book Name</label>
        <input type="text" id="name" name="title" value={formData.title} onChange={handleChange}/>
        <label htmlFor="author">Book Author</label>
        <input type="text" id="authors" name="authors" value={formData.authors} onChange={handleChange}/>
        <label htmlFor="description">Book Description</label>
        <input type="text" id="description" name="description" value={formData.description} onChange={handleChange}/>
        <label htmlFor="issued">Issued</label>
        <input type="text" id="issued" name="issued" value={formData.issued} onChange={handleChange}/>
        <label htmlFor="location">Location</label>
        <input type="text" id="location" name="location" value={formData.location} onChange={handleChange}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddBooks;
