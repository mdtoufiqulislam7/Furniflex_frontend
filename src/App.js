import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./Pages/Login";
import Register from './Pages/Register';
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import Footer from './Components/Footer';
import Addtocard from './Components/Addtocard';

function App() {
  const token = localStorage.getItem('token'); // Get token from local storage

  return (
    <div>
      <Router>
        {token && <Navbar />} {/* Show Navbar only if token exists */}
        <Routes>
          {/* If token is present, show Product route */}
          {token ? (
            <>
            <Route exact path='/product' element={<Product />} />
            <Route exact path='/addtocard/:id' element={<Addtocard />} />
            </>
          ) : (
            <>
              {/* If no token, show Login and Register routes */}
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/' element={<Register />} />
              <Route exact path='/register' element={<Register />} />
              <Route exact path='/product' element={<Login />} /> {/* Redirect to Login for Product */}
            </>
          )}
        </Routes>
        {token && <Footer />} {/* Show footer only if token exists */}
      </Router>
    </div>
  );
}

export default App;

