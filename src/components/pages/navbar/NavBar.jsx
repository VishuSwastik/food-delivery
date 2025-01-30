import React from 'react'
import styles from './NavBar.module.css';
import { assets } from '../../../assets/assets';
import{Link} from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../../../Context/StoreContext';
const NavBar = ({setShowLogin}) => {
  const { getTotalCardAmount } = useContext(StoreContext);
  

  return (
    <div className={styles.navbar} >
      <div className={styles.headerlogo}>
      <Link to='/'><img src={assets.Logo} alt="" className={styles.logo} /> </Link>
      <p>FoodCourt</p>
      </div>
      <ul className={styles.navbar_menu}>
        <Link to='/'>Home</Link>
        <Link to='/review'>Review</Link>
        <a href='#explore_menu'>Menu</a>
      </ul>
      <div className={styles.right_menu}>
        <img src={assets.search} alt="" className={styles.uicon}/>
        <div className={styles.navbar_search_icon}>
         <Link to='/cart'><img src={assets.cart} alt="" className={styles.uicon}/></Link>
        
         {getTotalCardAmount() > 0 && <div className={styles.dot}></div>}
        </div>
        <button onClick={()=> setShowLogin(true)}>Sign in</button>
          
      </div>
    </div>
  )
}

export default NavBar;
