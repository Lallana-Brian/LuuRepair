import { BrowserRouter } from "react-router-dom";
import HomeSwiper from "./components/swiperHome/HomeSwiper";
import Navbar from "./components/navbar/Navbar";
import { useEffect } from "react";
import FeaturedServices from "./components/serviceCard/FeaturedServices";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <HomeSwiper />
      <FeaturedServices />
    </BrowserRouter>
  );
}

export default App;
