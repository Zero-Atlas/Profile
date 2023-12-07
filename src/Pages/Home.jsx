import { Outlet } from "react-router";
import Banner from "../Components/Banner/Banner";
import Navigator from "../Components/Navigator/Navigator";
import classes from "./Home.module.css";

export default function Home() {
  return (
    <div className="grid-contain">
      <Banner />
      <Navigator />
      <main className={classes.content}>
        <Outlet />
      </main>
    </div>
  );
}
