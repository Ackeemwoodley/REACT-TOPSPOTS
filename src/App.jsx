import './App.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';
import TopSpots from './TopSpots';


function App() {
  
    const [topspots, setTopspots] = useState([]);
  
    useEffect(() => {
      axios
        .get('https://ccc.helloworldbox.com/items/top_spots')
        .then(response => response.data.data)
        .then(data => setTopspots(data));
    }, []);



  return (
    <>
       {/* header for the page */}
      <div className="container-fluid">
    <div className="container text-center">
      <h1 className="display-3 fw-bold">San Diego Top Spots</h1>
      <h2 className="lead text-white fs-1">
        A list of the top 30 places to see in San Diego, California.
      </h2>
    </div>
  </div>
{/* Render TopSpots with individual spot data */}
<TopSpots spots={topspots} />
  

    </>
  )
}

export default App

