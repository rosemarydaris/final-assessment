import React, { useState } from 'react';

const Addblog = () => {
  const [blog, setBlog] = useState({
    name: '',
    description: '',
    author: ''
  });

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Blog:', blog);
    alert('Blog submitted successfully!');
    // You can also POST this data to a server.
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Add New Blog</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Blog Name"
          value={blog.name}
          onChange={handleChange}
          required
        /><br /><br />
        <textarea
          name="description"
          placeholder="Description"
          value={blog.description}
          onChange={handleChange}
          required
        /><br /><br />
        <input
          name="author"
          placeholder="Author Name"
          value={blog.author}
          onChange={handleChange}
          required
        /><br /><br />
        <button type="submit">Submit Blog</button>
      </form>
    </div>
  );
};

export default Addblog;
