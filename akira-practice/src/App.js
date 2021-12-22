import './App.css';

import Akira from './components/akira/akira'; 
import Loader from './components/loader/loader';

function App() {

  return (
    <div className="App">
      <Loader/>
      <Akira/>
      <div className="reverse-akira">

      </div>
    </div>
  );
}

export default App;
