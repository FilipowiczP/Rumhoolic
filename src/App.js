import React from "react";
import './components/main/reset.scss'
import Header from "./components/header/Header";
import Main from "./components/mainSection/Main";
import Rums from "./components/rumsSection/Rums";
import Tasting from "./components/tasting/Tasting";
import Footer from "./components/footer/Footer";

const App = () =>{

  return(
      <>
        <Header />
        <Main />
        <Rums />
        <Tasting />
        <Footer />
      </>
  )
}


export default App;
