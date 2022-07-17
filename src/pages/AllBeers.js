import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllBeers() {
    const [allBeers,setAllBeers] = useState([])
    const [beerName,setBeerName] = useState("")

    useEffect(()=>{
        axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response) => {
            setAllBeers(response.data);
        })
        .catch((err)=>{
            console.log(err)
        });
    }, []); 

    useEffect(()=>{
        axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${beerName}`)
        .then((response) => {
            setAllBeers(response.data);
        })
        .catch((err)=>{
            console.log(err)
        });
    }, [beerName]); 

    return(
        <div id="beer-list">
            <label>Search</label>
            <input
                type="text"
                name="beerName"
                onChange={(e) => setBeerName(e.target.value)}
                value={beerName}
            />           
            {allBeers.map((beer)=>{
                return (
                    <div key={beer._id} className="card">
                    <Link to={`/beers/${beer._id}`}>
                        <img src={beer.image_url} alt="beer pic" />
                    </Link>    
                        <h3>{beer.name}</h3>
                        <p>{beer.tagline}</p>
                        <p>Create by: {beer.contributed_by}</p>
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}
export default AllBeers