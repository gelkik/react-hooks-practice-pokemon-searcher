import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({formPoke,frontPoke,handleClick}) {


  // const [formPoke,setFormPoke]=useState([])
  // const [frontPoke,setFrontPoke]=useState(true);
    
  // useEffect(()=>{
  //   fetch('http://localhost:3001/pokemon')
  //         .then(res=>res.json())
  //         .then(data=>{
  //           setFormPoke(data)
  //           // data.forEach(poke=>{
  //           //   setFormPoke([...formPoke,poke])
  //           //   console.log(poke)
  //           // })
  //         })
  // },[])

  

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {formPoke.map(poke=>{
        return(
          <PokemonCard 
            key={poke.name}
            formPoke={poke} 
            onClick={handleClick} 
            frontPoke={frontPoke}
          // setFrontPoke={setFrontPoke}
          />
        )
      })}
      
    </Card.Group>
  );
}

export default PokemonCollection;
