import React from "react";
import Header from "./Header";
import Main from "./Main";
import Navbar from "./Navbar";
import YinYang from "./YinYang";
import Psy from "./Psy";
import SquashBug from "./SquashBug";
import Footer from "./Footer";
import "./scss/styles.scss";

function App() {
  return (
    <div className="container">
      <div className="stars">
        <Header />
        <YinYang />
      </div>
      <Navbar />
      <div className="clouds">
        <Main />
        <Psy />
      </div>
      <div className="grass">
        <SquashBug />
      </div>
      <div className="sand">
        <Footer />
      </div>
    </div>
  );
}

export default App;
