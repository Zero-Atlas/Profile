import { NavLink } from "react-router-dom";
import avatar from "../../Assets/avatar.jpg";
import classes from "./Navigator.module.css";

export default function Navigator() {
  return (
    <ul className={classes.navbar + " d-flex m-center gap-2"}>
      <li>
        <NavLink to={'/'}
          className={( {isActive} ) =>
            (isActive ? classes.active : undefined) + " btn"
          }
        >
          Info
        </NavLink>
      </li>
      <li>
        <NavLink to={'/background'}
          className={( {isActive} ) =>
            (isActive ? classes.active : undefined) + " btn"
          }
        >
          Background
        </NavLink>
      </li>
      <div className={classes.avatar}>
        <img src={avatar} alt="Huỳnh Đắc An" />
      </div>
      <li>
        <NavLink to={'/certificate'}
          className={( {isActive} ) =>
            (isActive ? classes.active : undefined) + " btn"
          }
        >
          Certificate
        </NavLink>
      </li>
      <li>
        <NavLink to={'/projects'}
          className={( {isActive} ) =>
            (isActive ? classes.active : undefined) + " btn"
          }
        >
          Project
        </NavLink>
      </li>
    </ul>
  );
}
