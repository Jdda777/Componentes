import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Cards from "./assets/componentes/Cards.jsx";
import Card from "./assets/componentes/card/Card.jsx";
import Video from "./assets/componentes/card/video.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card 
      lang={"Tiburon"}
      img={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/TDpGUipa.jpg/1280px-TDpGUipa.jpg"}
      fcolor={"green"}
      scolor={"blue"}
      />
      <Video />
      <h1>Juan Mendoza</h1>
    </>
  );
}

export default App;
