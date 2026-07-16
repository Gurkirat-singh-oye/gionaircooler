import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import HomePage from "./comps/HomePage";
import Nav from "./comps/Nav";
import ProductsPage from "./comps/ProductsPage";
import AboutUs from "./comps/AboutUs";
import Footer from "./comps/utilcomps/Footer";
import ContactUs from "./comps/ContactUs";
import Catalogue from "./comps/Catalogue";
import ProductSpecificationsPage from "./comps/ProductSpecificationsPage";
import { useEffect } from "react";
import AdminLoginPage from "./comps/Admin/AdminLoginPage";
import DefaultLayout from "./Layouts/DefaultLayout";
import AdminLayout from "./Layouts/AdminLayout";
import AdminDashboard from "./comps/Admin/AdminDashboard";

export const Rahs = () => {
  return (
    // <Routes>
    //   { <Nav />}
    //   <div className=" w-screen h-[70px] lg:h-[88px] "></div>
    //   {/* <Route> */}
    //     <Route path="/" element={<HomePage />} />
    //     <Route path="/products" element={<ProductsPage />} />
    //     <Route path="/catalogue" element={<Catalogue />} />
    //     <Route path="/specifications" element={<ProductSpecificationsPage />} />
    //     <Route path="/contactus" element={<ContactUs />} />
    //     <Route path="/aboutus" element={<AboutUs />} />
    //   {/* </Route> */}
    //   { <Footer />}
    // </Routes>
    // routes.js
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="" element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="catalogue" element={<Catalogue />} />{" "}
          <Route
            path="specifications/:productslug"
            element={<ProductSpecificationsPage />}
          />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="aboutus" element={<AboutUs />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/login" replace />} />
          <Route path="login" element={<AdminLoginPage />} />
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};
