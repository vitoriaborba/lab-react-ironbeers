import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

function BeerList() {
    const [getBeers, setGetBeers] = useState([]);

    useEffect(() => {
      axios
        .get('https://ih-beers-api2.herokuapp.com/beers')
        .then((response) => {
          setGetBeers(response.data)
        })
        .catch((err) => {
          console.log(err);
        })
    },[])

  return (
    <div>
       <Navbar></Navbar>
        {getBeers.map((beer) =>{
            return (
                <div key={beer._id}>
                  <Link to={`/${beer._id}`}>
                    <img src={beer.image_url} alt={beer.name} />
                    <h2>{beer.name}</h2> 
                  </Link>  
                   <h4>{beer.tagline}</h4>
                   <h3>{beer.contributed_by}</h3>
                </div>
            );
        })}
    </div>
  )
}

export default BeerList