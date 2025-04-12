import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';


const App = () => {
  // In server.js or routes/userRoutes.js
app.get('/users/login', (req, res) => {
  res.send("Login page is working");
});

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddBlog />} />
      </Routes>
    </>
  );
};

export default App;
