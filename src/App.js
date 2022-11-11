import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from '../../webpage-stage-1/src/pages/Homepage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={ <Homepage/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
