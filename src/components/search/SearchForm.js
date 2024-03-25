// src/components/SearchForm.js

import React, { useState } from 'react';
import axios from 'axios';

const SearchForm = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null); 

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5122/api/Search/search?q=${query}`);
      console.log(response.data);
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('An error occurred while fetching data. Please try again later.');
    }
  };

// useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('/search?query=...');
//         setBlogPosts(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);
  

  return (
    <div>
      <input
        type="text"
        placeholder="Search blogs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}

      <ul>
        {results.map((blog) => (
          <li key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <p>{blog.author}</p>
            <p>{blog.postedDate}</p>
            {/* Display other properties as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchForm;
