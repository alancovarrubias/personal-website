import React from "react";
import Header from "./Header";
import Main from "./Main";
import Navbar from "./Navbar";
import YinYang from "./components/YinYang";
import Psy from "./components/Psy";
import BugGame from "./components/SquashBug";
import Footer from "./Footer";
import "./scss/styles.scss";

function App() {
  return (
    <div className="container">
      <Header />
      <YinYang />
      <Navbar />
      <Main />
      <Psy />
      <BugGame />
      <Footer />
    </div>
  );
}

export default App;
