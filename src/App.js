import React from "react";
import Header from "./Header";
import Body from "./Body";
import Navbar from "./Navbar";
import YinYang from "./YinYang";
import Psy from "./Psy";
import BugGame from "./BugGame";
import Footer from "./Footer";
import "./scss/styles.scss";

function App() {
  return (
    <div className="container">
      <Header />
      <Navbar />
      <Body />
      <YinYang />
      <Psy />
      <BugGame />
      <Footer />
    </div>
  );
}

export default App;
