import classes from './Info.module.css'

export default function Info(){
  return<div className={classes.wp}>
    <article className={classes.overview}>
      <h1>Overview</h1>
    </article>
    <article className={classes.info}>
      <h1>Personal Info</h1>
    </article>
  </div>
}