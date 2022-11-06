import './App.css';
import Home from './Views/Home/index'
import { Routes ,Route } from 'react-router-dom'
import Touristspots from './Views/touristspots';

function App() {
  return (
    <div className='body' >
      <Routes>
        <Route element={<Home/>} path="/" exact ></Route>
        <Route element={<Touristspots/>} path="/pontosturisticos" ></Route>
      </Routes>
    </div>
  );
}

export default App;
