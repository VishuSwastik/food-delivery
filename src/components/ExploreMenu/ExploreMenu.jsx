import React from 'react'
import styles from './ExploreMenu.module.css';
import { menu_item } from '../../assets/assets';
const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className={styles.explore_menu} id='explore_menu'>
      <div className={styles.explore_menu_list}>
        {menu_item.map((item, index) => {
            return(
                <div onClick={() => setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className={styles.explore_menu_item}>
                    <img className={category === item.menu_name?"active":""} src={item.menu_img} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu
