import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  BrowserRouter,
  useLocation,
} from "react-router-dom";
import HomePage from "./comps/HomePage";
import Nav from "./comps/Nav";
import ProductsPage from "./comps/ProductsPage";
import AboutUs from "./comps/AboutUs";
import Footer from "./comps/utilcomps/Footer";
import ContactUs from "./comps/ContactUs";
import Catalogue from "./comps/Catalogue";
import { useEffect } from "react";

export const Routes = () => {

  return (
    <Router>
      <Nav />
      <div className=" w-screen h-[70px] lg:h-[120px] "></div>
      <Switch>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Switch>
      { true && <Footer />}
    </Router>
  );
};
