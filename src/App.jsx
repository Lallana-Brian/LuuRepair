import HomeSwiper from "./components/swiperHome/HomeSwiper";
import Navbar from "./components/navbar/Navbar";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <HomeSwiper />
    </>
  );
}

export default App;
