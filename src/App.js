import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5258/api/Blogs')
      .then(response => setBlogs(response.data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div>
      <h1>Blogs</h1>
      {blogs.map(blog => (
        <div key={blog.blogId}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <small>By {blog.author} on {new Date(blog.publishedDate).toLocaleDateString()}</small>
        </div>
      ))}
    </div>
  );
}

export default App;
