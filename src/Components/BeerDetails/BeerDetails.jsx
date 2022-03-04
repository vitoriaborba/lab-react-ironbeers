import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import { useParams} from 'react-router-dom';

function BeerDetails() {
    const [getOneBeer, setGetOneBeer] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        
      axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        .then((response) => {
          setGetOneBeer(response.data)
        })
        .catch((err) => {
          console.log(err);
        })
    },[])

  return (
    <div>
        <Navbar></Navbar>
        <div>
          <img src={getOneBeer.image_url} alt={getOneBeer.name}/>
          <h2>{getOneBeer.name}</h2>
          <h4>{getOneBeer.tagline}</h4>
          <h6>{getOneBeer.first_brewed}</h6>
          <h6>{getOneBeer.attenuation_level}</h6>
          <p>{getOneBeer.description}</p>
          <h3>{getOneBeer.contributed_by}</h3>   
      </div>
    </div>
  )
}

export default BeerDetails