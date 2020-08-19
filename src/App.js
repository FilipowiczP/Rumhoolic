import React from "react";
import './components/main/reset.scss'
import Header from "./components/header/Header";
import Main from "./components/mainSection/Main";
import Rums from "./components/rumsSection/Rums";
import Tasting from "./components/tasting/Tasting";
import Footer from "./components/footer/Footer";
import Events from "./components/events/Events";
import Interviews from "./components/interviews/Interviews";

const App = () =>{

  return(
      <>
        <Header />
        <Main />
        <Rums />
        <Events />
        <Interviews />
        <Tasting />
        <Footer />
      </>
  )
}


export default App;
