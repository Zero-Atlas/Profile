import classes from './Projects.module.css'
import cv from '../../Assets/Project_CV.PNG'
import booking from '../../Assets/Project_Booking.PNG'
import novel from '../../Assets/Project_Novel.PNG'
import { Link } from 'react-router-dom'

export default function Projects(){
  const images=[cv,booking,novel]
  const name=['cv','booking','novel']

  return<div className={classes.wp}>
  <h2>Project</h2>
  <ul className='d-grid grid-3-col'>
    {images.map((item,i)=>
    <li key={i} className={classes.project}>
      <Link to={'/project/'+name[i]} >
      <div className={classes.img}><img src={item} alt={name[i]+' Huỳnh Đắc An'} /></div>
      </Link>

    </li>
      )}
  </ul>
</div>
}