import { SiIfood} from "react-icons/si";
import { IoMdSearch } from "react-icons/io"
import { IoBag } from "react-icons/io5";
import { useContext, useEffect } from "react";
import { dataContext } from "../context/userContext";
import { food_items } from "../food";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ThemeController from "./ThemeController";
function Nav() {
  let {input, setInput, cate, setCate, showCart, setShowCart}=useContext(dataContext)
  useEffect(()=>{
    let newList= food_items.filter((item)=>item.food_name.includes(input) || item.food_name.toLowerCase().includes(input) )
    setCate(newList)
  },[input])
  let items = useSelector(state=>state.cart)
  
  return (
    <div className='w-full h-[100px] flex justify-between items-center '>
      <div className="w-[60px] h-[60px] bg-transparent border-1 border-white flex justify-center items-center rounded-md m-[2rem] shadow-lg hover:scale-110  cursor-pointer transition-all duration-500">
       <Link to="/"><SiIfood className="color-red-400 w-[35px] h-[35px] rounded-md text-red-500"/></Link> 
        </div>
      <form
      className="flex  bg-transparent p-[14px] w-[62%] gap-[1rem] rounded-md m-[1rem] shadow-lg hover:scale-102 transtition-all duration-500  border-1 border-white"
      onSubmit={(e)=>e.preventDefault()}>
        <IoMdSearch className="w-[35px] h-[30px] rounded-md text-red-500"/>
        <input 
        type="text" 
        placeholder="Search Items..." 
        className="w-[100%] outline-none font-semibold"
        onChange={(e)=>setInput(e.target.value)}
        value={input}/>
      </form>
      <div className="flex justify-center items-center gap-[4rem]">
        <ThemeController />
      <div 
      className="w-[60px] h-[60px] flex justify-center items-center rounded-md  shadow-lg relative hover:scale-110  cursor-pointer transition-all duration-500 right-10 bg-transparent border-1 border-white"
      onClick={()=>{setShowCart(true)}}>
        <span className="absolute top-0 right-2 font-bold ">{items.length}</span>
        <IoBag className="color-red-400 w-[35px] h-[35px] rounded-md text-red-500 "/>

      </div>
      
    </div>
    </div>
  )
}

export default Nav;
//w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md m-[2rem] shadow-lg hover:scale-110  cursor-pointer transition-all duration-500