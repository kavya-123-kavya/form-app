
import './App.css';
import Apple from './Apple';
import Sample from './example/Sample';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('https://form-backend-44dr.onrender.com/submit', form);
      alert('Submitted successfully!');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      alert('Submission failed');
    }
  };

  return (
    <div>

    
    <div>    
      <form onSubmit={handleSubmit}>
    <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
    <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
    <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" required />
    <button type="submit">Submit</button>
    </form>
    </div>


    <div className="App">
     <Apple/> 
     <Sample/>

    </div>
    </div>
  );
}

export default App;
