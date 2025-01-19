import { Navigation } from "../components/navigation";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Navigation></Navigation>
      <Outlet />
    </div>
  );
}
