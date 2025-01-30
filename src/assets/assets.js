import Logo from './logo.png';
import search from './search.png';
import cart from './cart.png';
import rating from './rating.png';
import add from './add.png';
import git from './git.png';
import instra from './instra.png';
import face from  './facebook.png';
import cross from './cross.png';
import star from './stars.png';
import filled from './filled.png'

import menu_1 from './Indian.png';
import menu_2 from './Mexican.png';
import menu_3 from './italian.png';
import menu_4 from './seafood.png';
import menu_5 from './drinks.png';
import menu_6 from './salad.png';
import menu_7 from './burgers.png';
import menu_8 from './apt.png';
import menu_9 from './desserts.png';
import menu_10 from './asian.png';


import food_1 from './f_1.png';
import food_2 from './f_2.png';
import food_3 from './f_3.png';
import food_4 from './f_4.png';
import food_5 from './f_5.png';
import food_6 from './f_6.png';
import food_7 from './f_7.png';
import food_8 from './f_8.png';
import food_9 from './f_9.png';
import food_10 from './f_10.png';
import s_1 from './s_1.png';
import s_2 from './s_2.png';
import s_3 from './s_3.png';
import s_4 from './s_4.png';
import s_5 from './s_5.png';
import m_1 from './m_1.png';
import m_2 from './m_2.png';
import m_3 from './m_3.png';
import m_4 from './m_4.png';
import m_5 from './m_5.png';
import m_6 from './m_6.png';
import d_1 from './d_1.png';
import d_2 from './d_2.png';
import d_3 from './d_3.png';
import d_4 from './d_4.png';
import d_5 from './d_5.png';
import i_1 from './I_1.png';
import i_2 from './i_2.png';
import i_3 from './i_3.png';
import i_4 from './i_4.png';
import i_5 from './i_5.png';
import a_1 from './a_1.png';
import a_2 from './a_2.png';
import a_3 from './a_3.png';
import a_4 from './a_4.png';
import l_1 from './l_1.png';
import l_2 from './l_2.png';
import l_3 from './l_3.png';
import l_4 from './l_4.png';
import l_5 from './l_5.png';



export const assets ={
  Logo,
  search,
  cart,
  rating,
  add,
  git,
  face,
  instra,
  cross,
  star,
  filled,
};

export const menu_item = [
  {
    menu_name:"Indian",
    menu_img: menu_1
  },
  {
    menu_name:"Mexican",
    menu_img: menu_2
  },
  {
    menu_name:"Italian",
    menu_img: menu_3
  },
  {
    menu_name:"Seafood",
    menu_img: menu_4
  },
  {
    menu_name:"Drink",
    menu_img: menu_5
  },
  {
    menu_name:"Salad",
    menu_img: menu_6
  },
  {
    menu_name:"Burger",
    menu_img: menu_7
  },
  {
    menu_name:"Appetizers",
    menu_img: menu_8
  },
  {
    menu_name:"Dessert",
    menu_img: menu_9
  },
  {
    menu_name:"Asian",
    menu_img: menu_10
  },
];

export const food_list =[
  {
    id: 1,
    name: "Margherita Pizza",
    image: food_1,
    price: 8.99,
    description: "Classic pizza with fresh mozzarella, tomatoes, and basil.",
   
    category: "Italian"
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    image: food_2,
    price: 9.99,
    description: "Delicious pizza topped with pepperoni and mozzarella cheese.",
    category: "Italian"
  },
  {
    id: 3,
    name: "BBQ Chicken Pizza",
    image: food_3,
    price: 10.99,
    description: "Grilled chicken with BBQ sauce, red onions, and cilantro.",
    category: "Italian"
  },
  {
    id: 4,
    name: "Veggie Pizza",
    image: food_4,
    price: 8.49,
    description: "Loaded with fresh vegetables and mozzarella cheese.",
    category: "Italian"
  },
  {
    id: 5,
    name: "Hawaiian Pizza",
    image: food_5,
    price: 10.49,
    description: "Topped with ham, pineapple, and mozzarella cheese.",
    category: "Italian"
  },
  {
    id: 6,
    name: "Four Cheese Pizza",
    image: food_6,
    price: 11.99,
    description: "A blend of mozzarella, cheddar, parmesan, and gorgonzola.",
    category: "Italian"
  },
 
  {
    id: 7,
    name: "Meat Lovers Pizza",
    image: food_7,
    price: 12.99,
    description: "Loaded with pepperoni, sausage, ham, and bacon.",
    category: "Italian"
  },
  {
    id: 8,
    name: "Pesto Chicken Pizza",
    image: food_8,
    price: 11.49,
    description: "Grilled chicken with pesto sauce and sun-dried tomatoes.",
    category: "Italian"
  },
  {
    id: 9,
    name: "Spinach and Feta Pizza",
    image: food_8,
    price: 9.49,
    description: "Fresh spinach, feta cheese, and mozzarella on a thin crust.",
    category: "Italian"
  },
  {
    id: 9,
    name: "Cheeseburger",
    image: food_9,
    price: 10.99,
    description: "Juicy beef patty with cheddar cheese, lettuce, and tomato.",
    category: "Burger"
  },
  {
    id: 10,
    name: "Bacon Burger",
    image: food_10,
    price: 11.99,
    description: "Beef patty topped with crispy bacon and American cheese.",
    category: "Burger"
  },
  {
    id: 11,
    name: "Veggie Burger",
    image: food_9,
    price: 9.99,
    description: "A delicious plant-based burger with fresh toppings.",
    category: "Burger"
  },
  {
    id: 12,
    name: "Mushroom Swiss Burger",
    image: food_10,
    price: 12.49,
    description: "Beef patty topped with sautéed mushrooms and Swiss cheese.",
    category: "Burger"
  },
  {
    id: 13,
    name: "BBQ Burger",
    image: food_9,
    price: 11.49,
    description: "Grilled beef patty with BBQ sauce, onion rings, and cheddar.",
    category: "Burger"
  },
  {
    id: 14,
    name: "Caesar Salad",
    image: s_1,
    price: 7.99,
    description: "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan.",
    category: "Salad"
  },
  {
    id: 15,
    name: "Greek Salad",
    image: s_2,
    price: 8.49,
    description: "Fresh tomatoes, cucumbers, olives, and feta cheese with olive oil.",
    category: "Salad"
  },
  {
    id: 16,
    name: "Garden Salad",
    image: s_3,
    price: 6.99,
    description: "Mixed greens with a variety of fresh vegetables and dressing.",
    category: "Salad"
  },
  {
    id: 17,
    name: "Cobb Salad",
    image: s_4,
    price: 9.99,
    description: "Chopped salad with chicken, bacon, eggs, avocado, and blue cheese.",
    category: "Salad"
  },
  {
    id: 18,
    name: "Spinach Salad",
    image:s_5,
    price: 8.99,
    description: "Fresh spinach with strawberries, walnuts, and balsamic vinaigrette.",
    category: "Salad"
  },
  {
    id: 19,
    name: "Tacos",
    image: m_1,
    price: 8.99,
    description: "Soft or crispy tortillas filled with various meats, vegetables, and sauces.",
    category: "Mexican"
  },
  {
    id: 20,
    name: "Enchiladas",
    image: m_2,
    price: 10.49,
    description: "Corn tortillas rolled around a filling and covered with chili sauce.",
    category: "Mexican"
  },
  {
    id: 21,
    name: "Guacamole",
    image: m_3,
    price: 5.99,
    description: "A creamy avocado dip mixed with lime, onions, and tomatoes.",
    category: "Mexican"
  },
  {
    id: 22,
    name: "Chiles Rellenos",
    image: m_4,
    price: 12.99,
    description: "Stuffed poblano peppers, typically filled with cheese or meat.",
    category: "Mexican"
  },
  {
    id: 23,
    name: "Tamales",
    image:m_5,
    price: 9.49,
    description: "Corn dough filled with meats or sweet fillings, wrapped in corn husks.",
    category: "Mexican"
  },
  {
    id: 24,
    name: "Quesadillas",
    image:m_6,
    price: 7.99,
    description: "Flour tortillas filled with cheese and other ingredients, grilled until melted.",
    category: "Mexican"
  },
  {
    id: 25,
    name: "Churros",
    image: d_1,
    price: 4.99,
    description: "Fried dough pastries rolled in sugar, often served with chocolate sauce.",
    category: "Dessert"
  },
  {
    id: 26,
    name: "Flan",
    image: d_2,
    price: 3.49,
    description: "A creamy caramel custard dessert, smooth and delicious.",
    category: "Dessert"
  },
  {
    id: 27,
    name: "Tres Leches Cake",
    image: d_3,
    price: 5.99,
    description: "A moist cake soaked in three types of milk, topped with whipped cream.",
    category: "Dessert"
  },
  {
    id: 28,
    name: "Dulce de Leche",
    image: d_4,
    price: 3.99,
    description: "A sweet caramel-like sauce made from slowly heating sweetened milk.",
    category: "Dessert"
  },
  {
    id: 29,
    name: "Capirotada",
    image: d_5,
    price: 4.49,
    description: "A traditional bread pudding made with cinnamon, raisins, and cheese.",
    category: "Dessert"
  },
  {
    id: 30,
    name: "Butter Chicken",
    image: i_1,
    price: 300,
    description: "A creamy tomato-based curry with tender chicken pieces.",
    category: "Indian"
  },
  {
    id: 31,
    name: "Biryani",
    image: i_2,
    price: 400,
    description: "A fragrant rice dish cooked with spices and marinated meat.",
    category: "Indian"
  },
  {
    id: 32,
    name: "Samosa",
    image: i_3,
    price: 100,
    description: "Crispy pastry filled with spiced potatoes and peas.",
    category: "Indian"
  },
  {
    id: 33,
    name: "Palak Paneer",
    image:i_4,
    price: 250,
    description: "Cottage cheese cubes in a spiced spinach gravy.",
    category: "Indian"
  },
  {
    id: 34,
    name: "Chole Bhature",
    image:i_5,
    price: 200,
    description: "Spicy chickpeas served with deep-fried bread.",
    category: "Indian"
  },
  {
    id: 35,
    name: "Bruschetta",
    image: a_1,
    price: 150,
    description: "Grilled bread topped with diced tomatoes, garlic, and basil.",
    category: "Appetizers"
  },
  {
    id: 36,
    name: "Spring Rolls",
    image:a_2,
    price: 120,
    description: "Crispy rolls filled with vegetables or meat, served with dipping sauce.",
    category: "Appetizers"
  },
  {
    id: 37,
    name: "Virgin Mojito",
    image: a_3,
    price: 150,
    description: "A refreshing blend of mint, lime, and soda water.",
    category: "Drink"
  },
  {
    id: 38,
    name: "Spiced Tamarind Mocktail",
    image: a_4,
    price: 180,
    description: "A tangy and spicy drink made with tamarind and spices.",
    category: "Drink"
  },
  {
    id: 39,
    name: "Sushi",
    image: l_1,
    price: 1200,
    description: "Japanese dish consisting of vinegared rice accompanied by various ingredients, such as seafood and vegetables.",
    category: "Asian"
  },
  {
    id: 40,
    name: "Pad Thai",
    image: l_2,
    price: 300,
    description: "A stir-fried rice noodle dish commonly served as street food in Thailand.",
    category: "Asian"
  },
  {
    id: 41,
    name: "Dim Sum",
    image:l_3,
    price: 500,
    description: "A variety of small, flavorful dishes served in small steamer baskets or on small plates, popular in Chinese cuisine.",
    category: "Asian"
  },
  {
    id: 42,
    name: "Grilled Salmon",
    image: l_4,
    price: 2500,
    description: "Fresh salmon fillet grilled to perfection, often served with lemon and herbs.",
    category: "Seafood"
  },
  {
    id: 43,
    name: "Shrimp Scampi",
    image: l_5,
    price: 2200,
    description: "Shrimp sautéed in garlic, butter, and white wine, served over pasta.",
    category: "Seafood"
  },
  
]