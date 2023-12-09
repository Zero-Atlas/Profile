import classes from "./Info.module.css";

export default function Info() {
  return (
    <div className={classes.wp}>
      <article className={classes.overview}>
        <h2>Overview</h2>
        <ul>
          <li>
            Newbie in programming with good basic and quick learning skills
          </li>
          <li>
            Strengths: Front-end technology and Back-end web application
            development
          </li>
          <li>
            Knowledge in HTML, CSS, JavaScript - Experience with popular
            React.js workflows (such as Redux)
          </li>
          <li>Knowing RESTful APIs</li>
          <li>
            Knowledge in: JavaScript (ReactJS, NodeJs), MySQL (Sequelize),
            MongoDB (Mongoosse), JSON, API
          </li>
          <li>Proficiency in operating systems: Windows</li>
          <li>Ability to learn and apply new technology quickly</li>
          <li>Current working location: HCM, Viet Nam</li>
        </ul>
      </article>
      <article className={classes.info}>
        <h2>Personal Info</h2>
        <ul className={classes.text}>
          <li>
            <span>Name:</span> Huỳnh Đắc An
          </li>
          <li>
            <span>Phone:</span> 0977065543
          </li>
          <li>
            <span>Birth:</span> 13/07/97
          </li>
          <li>
            <span>Email:</span> andachuynh@gmail.com
          </li>
          <li>
            <span>Github:</span>{" "}
            <a href="https://github.com/Zero-Atlas" target="_blank" rel="noopener noreferrer">
              https://github.com/Zero-Atlas
            </a>
          </li>
          <li>
            <span>Leetcode:</span>{" "}
            <a href="https://leetcode.com/Zero-Atlas/" target="_blank" rel="noopener noreferrer">
              https://leetcode.com/Zero-Atlas
            </a>
          </li>
        </ul>
      </article>
    </div>
  );
}
