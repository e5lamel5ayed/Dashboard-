import React from 'react'
import {Routes, Route, BrowserRouter} from "react-router-dom";
import About from './pages/About';
import Settings from './pages/Settings';
import Home from './pages/Home';
import Messges from './pages/Messges';
// import Maseggs from './pages/Maseggs';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/about" exact element={<About/>}></Route>
        <Route path="/settings" exact element={<Settings/>}></Route>
        <Route path="/messges" exact element={<Messges/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
