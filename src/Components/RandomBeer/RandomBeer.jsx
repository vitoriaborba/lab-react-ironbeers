import Navbar from '../Navbar/Navbar'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RamdomBeer() {
  const [getRandomBeers, setGetRandomBeers] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        console.log(response.data)
        setGetRandomBeers(response.data)
      })
      .catch((err) => {
        console.log(err);
      })
  },[])

  return (
    <div>
       <Navbar></Navbar>
       <div>
          <h2>{getRandomBeers.name}</h2>
          <img src={getRandomBeers.image_url} alt={getRandomBeers.name} />
          <h4>{getRandomBeers.tagline}</h4>
                      
      </div>
    </div>
  )
}

export default RamdomBeer