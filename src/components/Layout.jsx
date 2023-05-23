import { Outlet } from "react-router-dom";
import Navigation from "../pages/Navigation";
const Layout = () => (
  <>
    <Navigation />
    <Outlet />
  </>
);

export default Layout;
