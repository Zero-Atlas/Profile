import banner from "../../Assets/banner.jpg";
import classes from "./Banner.module.css";

export default function Banner(props) {
  return (
    <div
      className={classes.banner}
      style={{ backgroundImage: `linear-gradient( rgba(24, 24, 24, 0.6), rgba(24, 24, 24, 0.6) ),url(${banner})` }}
    >
      <div className={classes.text}>
        <h1>Huỳnh Đắc An</h1>
        <p>Fullstack deverloper</p>
      </div>
    </div>
  );
}
