import React, { useState } from "react";
import Background from "./components/Background/Index";
import Navbar from "./components/Navbar/Index";
import Home from "./pages/Home/Index";
import About from "./pages/About/Index";
import Services from "./pages/Services/Index";
import Work from "./pages/Work/Index";
import Contact from "./pages/Contact/Index";
import Footer from "./pages/Footer/Index";
import { ToastContainer } from "react-toastify";

function App() {
  const [mode, setMode] = useState();
  return (
    <>
      <ToastContainer position="top-center" />
      <Background>
        <div className="h-1/2 lg:h-screen bg-gradient-to-t from-indigo-200 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden">
          <Navbar setmode={setMode} />
          <Home mode={mode} />
        </div>
        <About />
        <Services />
        <Work />
        <Contact />
        <Footer />
      </Background>
    </>
  );
}

export default App;
