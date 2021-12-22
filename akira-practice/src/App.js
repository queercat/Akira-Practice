import './App.css';

import {Akira, ReverseAkira } from './components/akira/akira'; 
import Loader from './components/loader/loader';

import {useEffect} from 'react'
import GlassyCard from './components/glassycard/glassycard';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="App">
      <Loader/>
      <Akira/>
      <ReverseAkira/>
      <GlassyCard/>
    </div>
  );
}

export default App;
