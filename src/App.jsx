import React from "react"
import './App.css'
import Card from "./components/card"
import oy from "./image/onlyyesterday.jpeg"
import futph from "./image/fromupthepoppyhill.jpeg"
import hmc from "./image/howlsmovingcastle.jpeg"
import ow from "./image/oceanwaves.jpeg"
import tbath from "./image/theboyand theheron.jpeg"
import kkds from "./image/kiki's delivery services.jpeg"
import woth from "./image/whisper of the heart.jpeg"
import wmwt from "./image/when marnie was there.jpeg"
import sa from "./image/spirited away.jpeg"
import twr from "./image/images.jpeg"
import mnt from "./image/Totoroposter.jpeg"
import a from "./image/arriety.jpeg"


const App = () => {
  return (
    <div className="App">
      <div className="header">
        <img className="logo" src='src/image/flowers.png' alt="Description" /> 
        <h1>Ghibli Studio's Films</h1>
      </div>
      <div className="container">
        <Card name="Only Yesterday" img={oy} link="https://en.wikipedia.org/wiki/Only_Yesterday_(1991_film)"/>
        <Card name="From Up on Poppy Hill" img={futph} link="https://en.wikipedia.org/wiki/From_Up_on_Poppy_Hill"/>
        <Card name="Howl's Moving Castle" img={hmc} link="https://en.wikipedia.org/wiki/Howl%27s_Moving_Castle_(film)"/>
        <Card name="Ocean Waves" img={ow} link="https://en.wikipedia.org/wiki/Ocean_Waves_(film)"/>
        <Card name="The Boy and The Heron" img={tbath} link="https://en.wikipedia.org/wiki/The_Boy_and_the_Heron"/>
        <Card name="Kiki's Delivery Services" img={kkds} link="https://en.wikipedia.org/wiki/Kiki%27s_Delivery_Service"/>
        <Card name="Whisper of The Heart" img={woth} link="https://en.wikipedia.org/wiki/Whisper_of_the_Heart"/>
        <Card name="When Marnie Was There" img={wmwt} link="https://en.wikipedia.org/wiki/When_Marnie_Was_There_(film)"/>
        <Card name="Spirited Away" img={sa} link="https://en.wikipedia.org/wiki/Spirited_Away"/>
        <Card name="The Wind Rises" img={twr} link="https://en.wikipedia.org/wiki/The_Wind_Rises"/>
        <Card name="My Neighbor Totoro" img={mnt} link="https://en.wikipedia.org/wiki/My_Neighbor_Totoro"/>
        <Card name="Arriety" img={a} link="https://en.wikipedia.org/wiki/Arrietty"/>
      </div>  
    </div>
  )
}

export default App
