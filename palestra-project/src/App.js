// App.js
import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import logo from "./assets/logo-sin-fondo.png";
import Footer from "./components/Footer/Footer.jsx";
import LockHeader from "./components/LockHeader/index.tsx";
import AvatarPerfil from "./components/avatarPerfil/AvatarPerfil";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { Contact } from "./pages/Contact/Contact.jsx";
import HomePage from "./pages/HomePage/HomePage.tsx";

const App = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  return (
    <Router>
      <LockHeader
        onHeightChange={(height) => setHeaderHeight(height)}
        fixed
        slideInDown
        marca={
          <AvatarPerfil
            heigth='8rem'
            width='8rem'
            img={logo}
            alt={"logo_header"}
          />
        }
      />
      <Routes>
        <Route path='/' element={<HomePage headerHeight={headerHeight} />} />
        <Route
          path='/about'
          element={<AboutPage headerHeight={headerHeight} />}
        />
        <Route
          path='/contact'
          element={<Contact headerHeight={headerHeight} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
