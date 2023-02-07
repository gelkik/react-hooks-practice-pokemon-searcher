import React from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({formPoke, onClick,frontPoke}) {

  // const frontPokeUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'

  // fetch('http://localhost:3001/pokemon')
  //     .then(res=>res.json())
  //     .then(data=>{
  //       data.forEach(dat=>{
  //         setFormPoke({
  //           Name: data.name,
  //           hp: dat.hp,
  //           frontUrl: dat.sprites.front,
  //           backUrl: dat.sprites.back
  //         })
  //     })
  //     }
  //   );
  

  return (
    <Card>
      <div>
        <div className="image">
          <img alt="oh no!" 
            src={frontPoke ?  formPoke.sprites.front : formPoke.sprites.back} 
            onClick={onClick}/>
        </div>
        <div className="content">
          <div className="header">{formPoke.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {formPoke.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
