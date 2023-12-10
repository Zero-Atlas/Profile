import classes from "./Certificate.module.css";
import cert_1 from "../../Assets/Cert_WEB.PNG";
import cert_2 from "../../Assets/Cert_PRF.PNG";
import cert_3 from "../../Assets/Cert_RJS.PNG";
import cert_4 from "../../Assets/Cert_NJS.PNG";

export default function Certificate() {
  const images = [cert_1, cert_2, cert_3, cert_4];
  const names = [
    "BUILDING YOUR FIRST WEBSITE",
    "PROGRAMMING TECHNIQUES WITH JAVASCRIPT",
    "FRONT-END WEB DEVELOPMENT WITH REACT",
    "BACK-END WEB DEVELOPMENT WITH NODEJS",
  ];
  const contents = [
    "Part of CCDN program of FUNIX.",
    "Part of CCDN program of FUNIX.",
    "Part of CCDN program of FUNIX.",
    "Part of CCDN program of FUNIX.",
  ];
  return (
    <div className={classes.wp + " grid-contain"}>
      <h2>Certificates and rewards</h2>
      <ul className="d-grid grid-2-col">
        {images.map((item, i) => (
          <li key={i} className={classes["cert-item"]}>
            <div className={classes.img}>
              <img src={item} alt={names[i] + " Huỳnh Đắc An"} />
            </div>
            <div className={classes.text}>
              <h3>{names[i]}</h3>
              <p>{contents[i]}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
