import './App.css';

import Akira from './components/akira/akira'; 
import Loader from './components/loader/loader';

function App() {

  return (
    <div className="App">
      <Loader/>
      <Akira></Akira>
    </div>
  );
}

export default App;
