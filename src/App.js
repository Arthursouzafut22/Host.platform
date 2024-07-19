import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre";
import Login from "./Pages/Forms/Login";
import LoginCriar from "./Pages/Forms/LoginCriar";
import Footer from "./Components/Footer";
import { AuthProvider  } from "./Hooks/UseContext";
import React from "react";


function App() {
  return (
    <main className="App">
      <BrowserRouter>
      <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logincriar" element={<LoginCriar />} />
          </Routes>
          <Footer />
          </AuthProvider>
      </BrowserRouter>
    </main>
  );
}

export default App;
