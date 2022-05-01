import './App.css';
import imageRick from './img/rick-morty.png';
import React, {useState} from 'react';
import Character from './components/Character';

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () =>{
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
    console.log(characterApi)
    setCharacters(characterApi.results);
  
  }
  
 
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters ? 
       
            <Character
             characters={characters}
             setCharacters={setCharacters}
             />
            : 
          <div className='wrapper'>
            <img src={imageRick} alt="Rick & Morty img" className='img-home'/>
            <button onClick={reqApi} className="btn-search">Buscar personajes</button>
          </div> 
        }
        
        
      </header>
    </div>
  );
}

export default App;
