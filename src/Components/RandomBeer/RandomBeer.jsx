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
          <img src={getRandomBeers.image_url} alt={getRandomBeers.name} />
          <h2>{getRandomBeers.name}</h2>
          <h4>{getRandomBeers.tagline}</h4>
          <h6>{getRandomBeers.first_brewed}</h6>
          <h6>{getRandomBeers.attenuation_level}</h6>
          <p>{getRandomBeers.description}</p>
          <h3>{getRandomBeers.contributed_by}</h3>   
                      
      </div>
    </div>
  )
}

export default RamdomBeer