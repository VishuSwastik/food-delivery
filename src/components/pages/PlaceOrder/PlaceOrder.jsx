import React, { useContext } from 'react'
import styles from './PlaceOrder.module.css'
import { StoreContext } from '../../../Context/StoreContext'
const PlaceOrder = () => {

  const {getTotalCardAmount} = useContext(StoreContext)
  return (
    <div className={styles.placeorder}>
      <div className={styles.place_order_l}>
        <p className={styles.title}>Delivery Information</p>
        <div className={styles.multi_field}>
         <input type="text" placeholder='first name'/>
         <input type="text" placeholder='last name'/>
        </div>
        <input type="email" placeholder='email address'/>
        <input type="text" placeholder='street'/>
        <div className={styles.multi_field}>
         <input type="text" placeholder='city'/>
         <input type="text" placeholder='state'/>
        </div>
        <div className={styles.multi_field}>
         <input type="text" placeholder='zip code'/>
         <input type="text" placeholder='country'/>
        </div>
        <input type="text" placeholder='phone'/>
      </div>
      <div className={styles.place_order_r}>
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
                  <button >PROCEED TO PAY</button>
                </div>
      </div>
    </div>
  )
}

export default PlaceOrder;
