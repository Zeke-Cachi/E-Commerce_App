import React from "react";
import Carousel from "./components/Carousel/Carousel";
import Navbar from "./components/Navbar/Navbar";

import product1 from "./assets/img/uno.jpg";
import product2 from "./assets/img/dos.jpg";
import product3 from "./assets/img/tres.jpg";
import product4 from "./assets/img/cuatro.jpg";
import product5 from "./assets/img/cinco.jpg";





const slides = [
  {id: 1, productImage: product1},
  {id: 2, productImage: product2},
  {id: 3, productImage: product3},
  {id: 4, productImage: product4,},
  {id: 5, productImage: product5,},
];

function App() {
  return (
  <>
    <Navbar />
    <Carousel slides={slides} />
    
  </>
  )
}

export default App;
