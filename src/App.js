import React from 'react';
import logo from './logo.svg';
//import './App.css';
import './style.css'
import image from './spotify.png'
import songs from'./songlist'

function App() {
  return (
    <div className="App">
      <img className="" src={image}/>
      <button className="button">P A U S E</button>
     <h1 className="text">Songs</h1>
     <div>
  {songs.map(item => <div>
    <h2>{item.id}. {item.name}
    <br></br>
  <h5>Artist: {item.artist}</h5>
    <hr></hr>
    </h2>
    </div>)}
     </div>
    </div>
  );
}

export default App;
