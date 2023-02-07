import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [formPoke,setFormPoke]=useState([])
  const [frontPoke,setFrontPoke]=useState(true);

  const pokeObj = {
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: ''
    }

  const [formData,setFormData] = useState(pokeObj);
  // const [filtered,setFiltered]=useState([]);
  //const frontPokeUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
    
  useEffect(()=>{
    fetch('http://localhost:3001/pokemon')
          .then(res=>res.json())
          .then(data=>{
            setFormPoke(data)
          })
  },[])

  function handleClick(){
    setFrontPoke((frontPoke)=>!frontPoke);
  }


  function handleSearch(e){
    let pokeName = e.target.value;
    formPoke.map((poke)=>{
      if (pokeName===poke.name){
        console.log(poke);
        setFormPoke([poke]);
      }
    })
  }

  function handleChange(e){
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  function handleSubmit(e){
    // const {name,hp,front,back} = e.target;
    e.preventDefault();

    const requestObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }
    // setFormData({...formData,
    //   [e.target.name]:e.target.value
    // });
    fetch('http://localhost:3001/pokemon',requestObj)
    .then(res=>res.json())
    .then(data=>{
      setFormData(pokeObj);
      setFormPoke(data);
    })
    //   method:'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(formData)
    // })
    // .then(res=>res.json())
    // .then(data=>setFormData(data))
    setFormData(e.target.value);
  }


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm 
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <br />
      <Search 
        // filtered={filtered}
        handleSearch={handleSearch}
      />
      <br />
      <PokemonCollection 
        formPoke={formPoke}
        handleClick={handleClick}
        frontPoke={frontPoke}
      />
    </Container>
  );
}

export default PokemonPage;
