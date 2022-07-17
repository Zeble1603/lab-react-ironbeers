import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function NewBeer() {
    const [name,setName] = useState("")
    const [tagline,setTagline ] = useState("")
    const [description ,setDescription ] = useState("")
    const [first_brewed ,setFirstBrewed] = useState("")
    const [brewers_tips ,setTips] = useState("")
    const [attenuation_level ,setAttLevel] = useState(0)
    const [contributed_by ,setContributed] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        // Prevent page reload on submit    
        e.preventDefault();
        

        const body = { name: name, 
            tagline: tagline,
            description : description,
            first_brewed : first_brewed,
            brewers_tips : brewers_tips,
            attenuation_level : attenuation_level,
            contributed_by : contributed_by,
        };
        axios
        .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
        .then((response) => {
            setName("")
            setTagline("")
            setDescription("")
            setFirstBrewed("")
            setTips("")
            setAttLevel(0)
            setContributed("")
            // Navigate to the `/` page
            navigate('/');
        });
    }

    return(
        <>
            <h3>New beer</h3>
            <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />

            <label>Tagline</label>
            <input
                type="text"
                name="tagline"
                onChange={(e) => setTagline(e.target.value)}
                value={tagline}
            />

            <label>Description</label>
            <input
                type="text"
                name="description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />

            <label>First brewed</label>
            <input
                type="text"
                name="first_brewed"
                onChange={(e) => setFirstBrewed(e.target.value)}
                value={first_brewed}
            />

            <label>Brewer tips</label>
            <input
                type="text"
                name="brewers_tips"
                onChange={(e) => setTips(e.target.value)}
                value={brewers_tips}
            />

            <label>Attenuation level</label>
            <input
                type="number"
                name="attenuation_level"
                onChange={(e) => setAttLevel(e.target.value)}
                value={attenuation_level}
            />

            <label>Contributed by</label>
            <input
                type="text"
                name="contributed_by"
                onChange={(e) => setContributed(e.target.value)}
                value={contributed_by}
            />
            <button type="submit">Create beer</button>
            </form>
        </>
    )
}
export default NewBeer