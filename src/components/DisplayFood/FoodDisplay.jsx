import React, { useContext } from 'react'
import styles from './FoodDisplay.module.css';
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../foodItem/foodItem';

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return (
    <div className={styles.foodDisplay} id="food-display">
      <h2 id='food'>Populer Food</h2>
      <div className={styles.food_dis_list}>
        {food_list.map((item, index)=> {
            if(category==='All' || category===item.category){
                return <FoodItem key={index} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image} />
            }
           
        })}
      </div>
    </div>
  )
}

export default FoodDisplay;
