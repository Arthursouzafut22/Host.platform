import { BrowserRouter, Route, Routes } from "react-router-dom";
// import React, { useContext } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Planos from "./Pages/Planos";
import Login from "./Pages/Forms/Login";
import LoginCriar from "./Pages/Forms/LoginCriar";
import Footer from "./Components/Footer";


function App() {
  return (
    <main className="App">
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/planos" element={<Planos />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logincriar" element={<LoginCriar />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
