import classes from "./Background.module.css";

export default function Background() {
  return (
    <div className={classes.wp + " grid-dynamic"}>
      {/* education */}
      <article className={classes.skill}>
        <div className={classes.title}>
          <h2>Education</h2>
          <i>icon</i>
        </div>
        <ul>
          <li className={classes["edu-item"]}>
            <h3>BACK-END WEB DEVELOPMENT WITH NODEJS</h3>
            <p className={classes.time}>5/2023-7/2023</p>
            <p>Part of CCDN program of FUNiX.</p>
          </li>
          <li className={classes["edu-item"]}>
            <h3>FRONT-END WEB DEVELOPMENT WITH REACT</h3>
            <p className={classes.time}>3/2023-4/2023</p>
            <p>Part of CCDN program of FUNiX.</p>
          </li>
          <li className={classes["edu-item"]}>
            <h3>PROGRAMMING TECHNIQUES WITH JAVASCRIPT</h3>
            <p className={classes.time}>1/2023-2/2023</p>
            <p>Part of CCDN program of FUNiX.</p>
          </li>
          <li className={classes["edu-item"]}>
            <h3>BUILDING YOUR FIRST WEBSITE</h3>
            <p className={classes.time}>12/2022</p>
            <p>Part of CCDN program of FUNiX.</p>
          </li>
          <li className={classes["edu-item"]}>
            <h3>
              HCMUTE - Ho Chi Minh University of Technology and Education{" "}
            </h3>
            <p className={classes.time}>08/2015 - 10/2022</p>
            <p>Major - Automobile Engineer</p>
            <p>GPA: 7.1/10</p>
          </li>
        </ul>
      </article>
      {/* skill */}
      <article className={classes.skill}>
        <div className={classes.title}>
          <h2>Skills and Techniques</h2>
          <i>icon</i>
        </div>
        <ul>
          <li className={classes["skill-item"]}>
            <h3>Programming</h3>
            <div className={classes.scale}>
              <p>HTML/CSS : Knowledge</p>
              <div className={classes.level}>
                <span className={classes.acquired}></span>
                <span className={classes.acquired}></span>
                <span className={undefined}></span>
                <span className={undefined}></span>
              </div>
            </div>
            <div className={classes.scale}>
              <p>JavaScript : Knowledge</p>
              <div className={classes.level}>
                <span className={classes.acquired}></span>
                <span className={classes.acquired}></span>
                <span className={undefined}></span>
                <span className={undefined}></span>
              </div>
            </div>
            <div className={classes.scale}>
              <p>ReactJS : Basic</p>
              <div className={classes.level}>
                <span className={classes.acquired}></span>
                <span className={undefined}></span>
                <span className={undefined}></span>
                <span className={undefined}></span>
              </div>
            </div>
            <div className={classes.scale}>
              <p>NodeJs : Basic</p>
              <div className={classes.level}>
                <span className={classes.acquired}></span>
                <span className={undefined}></span>
                <span className={undefined}></span>
                <span className={undefined}></span>
              </div>
            </div>
            <div className={classes.scale}>
              <p>RESTful API : Basic</p>
              <div className={classes.level}>
                <span className={classes.acquired}></span>
                <span className={undefined}></span>
                <span className={undefined}></span>
                <span className={undefined}></span>
              </div>
            </div>

            <p>Basic skill in MySQL(with Sequelize), MongoDB(with Mongoose)</p>
          </li>
          <li className={classes["skill-item"]}>
            <h3>Language</h3>
            <p>- English (Good reading and listening skill)</p>
          </li>
        </ul>
      </article>
      {/* experience */}
      <article className={classes.exp}>
        <div className={classes.title}>
          <h2>Working experience</h2>
          <i>icon</i>
        </div>
        <ul>
          <li className={classes["exp-item"]}>
            <h3>Powersteam VN</h3>
            <p className={classes.time}>08/2020 - 02/2021</p>
            <p>Technician:</p>
            <ul>
              <li>Training for new technicians</li>
              <li>Maintenance and clear up cars</li>
            </ul>
          </li>
          <li className={classes["exp-item"]}>
            <h3>Cartek VN</h3>
            <p className={classes.time}>05/2019 - 11/2019</p>
            <p>Collaborators:</p>
            <ul>
              <li>Create static web using Dreamweaver</li>
              <li>Work in team with dropbox</li>
            </ul>
          </li>
        </ul>
      </article>
    </div>
  );
}
