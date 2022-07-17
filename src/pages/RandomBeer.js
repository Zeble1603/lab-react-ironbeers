import { useState, useEffect } from "react";
import axios from "axios";

function RandomBeer() {
    const [beer,setBeer] = useState([])

    useEffect(()=>{
        axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then((response)=>{
            setBeer(response.data)
        })
        .catch((err)=>{
            console.log(err)
        });
    },[])

    return(
        <div id="beer-details">
            <img src={beer.image_url} alt="beer pic" />
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>First brewed on : {beer.first_brewed}</p>
            <p>Attenuation level : {beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>Create by: {beer.contributed_by}</p>
        </div>
    )
}

export default RandomBeer  