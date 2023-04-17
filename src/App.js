import logo from './logo.svg';
import './App.css';

import {Router, Route, Routes} from "react-router-dom"
import Home from "./component/Home"
import Profile from './component/Profile';
import Error from './component/Error';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile/:handle" element={<Profile/>}/>
          <Route path="/error" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
