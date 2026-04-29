import React from "react";
import './scss/app.scss';

import Header from "./components/Header";
import Home from "./pages/Home";

import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Header/>

                <div className="content">
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
