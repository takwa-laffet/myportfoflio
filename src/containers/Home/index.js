import "./App.css";
import { useState } from "react";

import Mode from "../../components/Mode/Mode";
import Header from "../../components/Header/Header";
import { About } from "../../components/About/About";
import { Bio } from "../../components/Bio/Bio";
import { Footer } from "../../components/Footer/Footer";
import Project from "../../components/Project/Project";

function Home() {
  const [darkmode, setQuietMode] = useState(false);

  const handleModeChange = () => {
    setQuietMode(!darkmode);
  };

  return (
    <div className={darkmode ? "dark-mode" : "white-mode"}>
      <Mode setMode={darkmode} handleModeChange={handleModeChange} />
      <Header />
      <About />
      <Bio />
      <Project />
      <Footer />
    </div>
  );
}

export default Home;
