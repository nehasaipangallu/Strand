import React from "react";
import "./style.css";
import Header from './components/header/Header'
import {
  Route,
  Routes,
  BrowserRouter,
  Switch,
  HashRouter,
} from 'react-router-dom';


export default function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <Routes className="content">
          </Routes>
          </HashRouter>
    </div>
  );
}
