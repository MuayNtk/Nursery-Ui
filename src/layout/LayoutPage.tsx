import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Footer from "../components/footer/Footer";
import PrimarySearchAppBar from "../components/navbar/Navbar";

export default function LayoutPage() {
  return (
    <div className="flex flex-col">
      <PrimarySearchAppBar/>
      <Sidebar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
