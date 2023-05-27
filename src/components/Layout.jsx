import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Layout = () => (
  <>
    <div className="bg-primary">
      <Navigation />
      <Outlet />
    </div>
  </>
);

export default Layout;
