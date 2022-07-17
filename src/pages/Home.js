import { Link } from "react-router-dom";
//const beers = require('../assets/beers.png')
import beers from '../assets/beers.png'
import randomBeer from "../assets/random-beer.png"
import newBeer from "../assets/new-beer.png"


function Home () {
    return (
        <div id="Home">
            <Link to={`/beers`}>
                <div id="all_beers">
                    <img src={beers} alt="beers"></img>
                    <h3>All beers</h3>
                    <p>Irure sunt est ea id do sit enim nisi enim tempor deserunt Lorem. Nostrud aliquip fugiat et consequat eu aliquip deserunt. Cillum nulla excepteur ullamco exercitation sunt ad.</p>
                </div>
            </Link>
            <Link to={`/random-beer`}>
                <div id="random_beers">
                    <img src={randomBeer} alt="random beers"></img>
                    <h3>Random beer</h3>
                    <p>Irure sunt est ea id do sit enim nisi enim tempor deserunt Lorem. Nostrud aliquip fugiat et consequat eu aliquip deserunt. Cillum nulla excepteur ullamco exercitation sunt ad.</p>
                </div>
            </Link>
            <Link to={`/new-beer`}>
                <div id="new_beers">
                    <img src={newBeer} alt="new beer"></img>
                    <h3>New beer</h3>
                    <p>Irure sunt est ea id do sit enim nisi enim tempor deserunt Lorem. Nostrud aliquip fugiat et consequat eu aliquip deserunt. Cillum nulla excepteur ullamco exercitation sunt ad.</p>
                </div>
            </Link>
        </div>
    )
}

export default Home