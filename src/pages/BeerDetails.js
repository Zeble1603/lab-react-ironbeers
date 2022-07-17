import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BeerDetails() {
    const [beer,setBeer] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        .then((response)=>{
            console.log(response.data)
            setBeer(response.data)
        })
        .catch((err)=>{
            console.log(err)
        });
    },[id])

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

export default BeerDetails  