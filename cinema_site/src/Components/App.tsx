import '../css/App.css';
import './General';
import {Button} from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import General from './General';

function App(){
  
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path='/' element={<General />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
