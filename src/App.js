import React from 'react';
import NaveBar from './Components/NaveBar/NaveBar';
import{Action,Originals} from './urls'
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
    <NaveBar/>
    <Banner/>
    <RowPost url={Originals}title='Netflix Originals'  />
    <RowPost url={Action}title='Action' isSmall  />

    </div>
          
  );
}

export default App;
