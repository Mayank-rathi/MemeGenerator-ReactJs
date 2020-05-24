import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from "./component/MainPage";
import MemeGenerator from "./component/MemeGenerator";
import Header from "./component/Header";

function App() {
    return (
        <div>
            <Header/>
            <MemeGenerator/>
        </div>
    );
}

export default App;
