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
import Login from './components/log-in/Login';

export default function App() {
  return (
    <div>
      {/* <HashRouter>
        <Header />
       
          </Routes>
          </HashRouter> */}
           <Routes className="content">
          <Route exact path="/" element={<Login />}></Route>
          </Routes>
    </div>
  );
}
