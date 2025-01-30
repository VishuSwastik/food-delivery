import React, { useContext } from 'react'
import styles from './foodItem.module.css';
import { assets } from '../../assets/assets';
import StoreContextProvider, { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({id, name, price, description, image}) => {

   
    const {cartItems,addToCart,RemoveFromCart} = useContext(StoreContext);


  return (
    <div className={styles.food_item}>
      <div className={styles.food_item_img_container}>
        <img className={styles.food_item_img} src={image} alt="" />
        {!cartItems[id]
          ?<img className={ styles.add} onClick={() => addToCart(id) } src={assets.add} />
           : <div className={styles.food_item_counter}>
              <h3  onClick={() =>RemoveFromCart(id)}>-</h3>
              <p>{cartItems[id]}</p>
              <h3 onClick={() =>addToCart(id)}>+</h3>
           </div>
        }
      </div>
      <div className={styles.food_item_info}>
        <div className={styles.food_item_name_rating}>
        <p>{name}</p>
        <img  src={assets.rating} alt="" />
        </div>
     
      </div>
      <p className={styles.food_item_desc}>{description}</p>
        <p className={styles.food_price}>{price}</p>
    </div>
  )
}

export default FoodItem
