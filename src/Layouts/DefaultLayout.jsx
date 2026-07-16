import { Outlet } from 'react-router-dom';
import Nav from '../comps/Nav';
import Footer from '../comps/utilcomps/Footer';
function DefaultLayout() {
  return (
    <>
      <Nav />
        <div className=" w-screen h-[70px] lg:h-[88px] "></div>{" "}
      <Outlet />
      <Footer />
    </>
  );
}

export default DefaultLayout;