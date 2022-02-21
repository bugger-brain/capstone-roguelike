import { useEffect, useState } from "react";
import { findAll } from "../services/hero-api";

function Hero(){
    const [heroes, setHeroes] = useState([]);


    useEffect(() => {
        findAll()
        .then(json => setHeroes(json))
        .catch(console.error)
    }, []); 

    return (
        <div>
            {heroes.map(h => <div>{h.hp}</div>)}
        </div>
    );
}

export default Hero;