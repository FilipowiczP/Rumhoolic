import React from "react";
import './components/main/reset.scss'
import Header from "./components/header/Header";
import Main from "./components/mainSection/Main";
import Rums from "./components/rumsSection/Rums";
import Tasting from "./components/tasting/Tasting";
import Footer from "./components/footer/Footer";
import Events from "./components/eventsSection/Events";


const App = () =>{

  return(
      <>
        <Header />
        <main>
            <Main />
            <Rums />
            <Events />
            <Tasting />
        </main>
        <Footer />
      </>
  )
}


export default App;
