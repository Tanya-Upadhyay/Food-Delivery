
import Nav from "../components/Nav"
import Categories from "../Category"
import Card from "../components/Card"
import { food_items } from "../food"
import { dataContext } from "../context/userContext"
import { useContext } from "react"
import { RxCross2 } from "react-icons/rx"
import Card2 from "../components/Card2"
import { useDispatch, useSelector } from "react-redux"
import { toast, ToastContainer, } from "react-toastify"

import Footer from "../components/Footer"
import { EmptyCart } from "../redux/cartSlice"



  

function Home() {
      let {cate, setCate, input, showCart, setShowCart} = useContext(dataContext)
      
function filter(category){
    if(category==="All"){
        setCate(food_items)
    }else{
       let newList= food_items.filter((item)=>(item.food_category===category))
       
       return setCate(newList)
       
    } 
    
}
  let items= useSelector(state=>state.cart)
  
  let subtotal = items.reduce((total,item)=>total + (item.qty*item.price), 0)
  let deliverFee = 20;
  let taxes = subtotal * 0.005;
  let total = Math.floor(subtotal + deliverFee + taxes)
  let dispatch = useDispatch();
   
 const handlePlaceOrder =()=>{

  toast.error("Order Placed")
  dispatch(EmptyCart())
 }

  return (
    <>
    <div className="w-full min-h-screen p-[1rem]">
      <Nav/>
      
      {!input?
        (<div className="flex gap-[2.5rem] justify-center items-center m-[3rem] sm: flex-wrap gap-[1rem]">
        {Categories.map((item,index)=>{
                return <div className="bg-transparent border-1 border-white w-[10rem] h-[8rem] flex flex-col justify-center items-center gap-[1rem] rounded-lg shadow-lg hover:scale-110 hover:bg-red-100 cursor-pointer transition-all duration-500 font-bold sm: w-[5rem] h-[4rem]" 
                key={index}
                onClick={()=>filter(item.name)}>
                {item.image}
                {item.name}
                </div>
                })}
                </div>):null}
      <div className="flex flex-wrap gap-[3rem] justify-center items-center m-[1rem]">
                {cate.length>1?
                cate.map((item,index)=>{
                return <Card name={item.food_name}
                key={index}
                image={item.food_image}
                price={item.price}
                id={item.id}
                type={item.food_type} />}):
                <div className="flex flex-col justify-center items-center mt-[19rem] gap-[.7rem] text-2xl font-semibold text-gray-500">
                  <div>We are sorry:(</div>
                  <div>No Dish Found!</div>
                  </div>}
                
      </div>
      <div className={`w-[100vw] h-[100%] fixed top-0 right-0 bg-white shadow-lg transition-all duration-500 ${showCart? "translate-x-0":"translate-x-full"} md:w-[40vw] overflow-y-auto overflow-x-hidden`}>
        <header className="flex justify-between text-red-500 text-2xl m-[1rem] items-center p-[1rem] font-semibold">
          <span> Order Items</span>
          <RxCross2 className="h-[2rem] w-[2rem] cursor-pointer"
          onClick={()=>{setShowCart(false)}}/>

        </header>
        {items.length>0?
        <>
        <div>
        {items.map((item, id)=>(
          <Card2 
          name={item.name} 
          price={item.price} 
          image={item.image} 
          id={item.id} 
          qty={item.qty}
          key={id}
          />))}
        </div>
        <div className="w-[90%] border-t-2 border-b-2 border-gray-600 m-[1rem] mt-[2rem] flex flex-col gap-[.5rem] absolute right-2 ">
          <div className="flex justify-between items-center text-xl font-semibold text-gray-500 mt-[1rem]">
            <span>Subtotal : </span>
            <span className="text-red-400">Rs {subtotal}/- </span>
          </div>
          <div className="flex justify-between items-center text-xl font-semibold text-gray-500">
            <span>Delivery Fee : </span>
            <span className="text-red-400">Rs {deliverFee}/-</span>
          </div>
          <div className="flex justify-between items-center text-xl font-semibold text-gray-500 mb-[1rem]">
            <span>Taxes : </span>
            <span className="text-red-400">Rs {taxes}/-</span>
          </div>
        </div>
        
          <div className="w-[90%] flex flex-wrap justify-between items-center text-xl font-bold text-gray-500 m-[1rem] mt-[11.5rem] absolute right-2">
            <span>Total : </span>
            <span className="text-red-400">Rs {total}/-</span>
            <button className="bg-red-400 p-[.7rem] w-[90%] m-[1rem] mt-[2rem] rounded-md font-bold shadow-md text-white hover:bg-red-300 cursor-pointer"
             onClick={handlePlaceOrder}>Place Order</button>
          
          </div>
          
        </>:
        <span className="flex justify-center items-center font-semibold text-2xl text-gray-500 mt-[20rem]">Empty Cart.......</span>}
        
        
      </div>
      
    </div>
    <Footer/>
    
<ToastContainer position="top-center"/>
</>  

  )
}


export default Home;
