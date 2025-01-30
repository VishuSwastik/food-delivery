import React, { useState } from 'react'
import styles from './Home.module.css';
import Header from '../../Header/Header';
import ExploreMenu from '../../ExploreMenu/ExploreMenu';
import FoodDisplay from '../../DisplayFood/FoodDisplay';
const Home = () => {
     const [category, setCategory] = useState("All")

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home
