import React from 'react'
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      
      <div className={styles.header_content}>
        <h2>Delicious Meals Delivered to Your Doorstep!</h2>
        <p> where your favorite meals are just a tap away! Explore a wide range of local restaurants and enjoy quick, convenient delivery right to your doorstep.</p>
       <button><a href='#food'>View Menu</a></button>
      </div>
    </div>
  )
}

export default Header
