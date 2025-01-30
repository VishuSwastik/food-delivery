import React, { useContext } from 'react'
import styles from './Cart.module.css';
import { StoreContext } from '../../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const {cartItems, food_list, RemoveFromCart, getTotalCardAmount } = useContext(StoreContext);


  const navigate = useNavigate();
  return (
    <div className={styles.cart}>
      <div className={styles.Cart_item}>
        <div className={styles.cart_item_title}>
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartItems[item.id]>0){
            return(
              <div>
                 <div className={styles.cart_items_item}>
                     <img src={item.image} alt="" />
                     <p>{item.name}</p>
                     <p>${item.price}</p>
                     <p>{cartItems[item.id]}</p>
                     <p>${item.price*cartItems[item.id]}</p>
                     <p onClick={()=> RemoveFromCart(item.id)} className={styles.cross}>X</p>
              </div>
                <hr />
              </div>
             
            )
          }
        })}
      </div>
      <div className={styles.cart_buttom}>
        <div className={styles.cart_totat}>
          <h2>Cart Total</h2>
          <div>
            <div className={styles.cart_total_details}>
              <p>SubTotal</p>
              <p>${getTotalCardAmount()}</p>
              <hr />
            </div>
            <div className={styles.cart_total_details}>
              <p>Delivery Fee</p>
              <p>${2}</p>
              <hr />
            </div>
            <div className={styles.cart_total_details}>
              <b>Total</b>
              <b>${getTotalCardAmount()+2}</b>
            </div>
           
          </div>
          <button onClick={()=>navigate('/Order')}>PROCEED TO PAY</button>
        </div>
        <div className={styles.cart_promo}>
            <div>
              <p>if you have promo code enter here</p>
              <div className={styles.cart_promo_input}>
                <input type="text" placeholder='promo code' />
                <button>Submit</button>
              </div>
            </div>
           </div>
      </div>
    </div>
  )
}

export default Cart
