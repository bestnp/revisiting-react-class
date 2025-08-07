
import {
  BeakerIcon,
  HomeIcon,
  ShoppingCartIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  MusicalNoteIcon,
  ShoppingBagIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductCategory from "./components/ProductCategory";
import ProductHighlight from "./components/ProductHighlight";

import Navbar from "./components/Navbar";
import ProductCategory from "./components/ProductCategory";
import ProductHighlight from "./components/ProductHighlight";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <ProductHighlight />
      <ProductCategory />
      <Footer />
    </>
  );
}

export default App;
