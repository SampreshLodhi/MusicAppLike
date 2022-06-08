import './App.css'
import Artist from './components/Artist';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Spotify from './components/Spotify';
function App() {
  return (
    <div className="App">
      <Spotify />
      <Routes>
        <Route exact path='/' element={<Login />}/>
        <Route exact path='/songs' element={<Home />} />
        <Route exact path='/artists' element={<Artist />} />
      </Routes>
    </div>
  );
}

export default App;
