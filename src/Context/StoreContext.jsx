import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)
const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        } else {
            setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const RemoveFromCart = (itemId) => {
         setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCardAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = food_list.find((product)=>product.id === Number(item));
                totalAmount += itemInfo.price * cartItems[item];
            }
   
        }
        return totalAmount;
    }

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        RemoveFromCart,
        getTotalCardAmount,
    } 
    
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;