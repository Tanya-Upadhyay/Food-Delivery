import { LuLeafyGreen } from "react-icons/lu";
import { GiRoastChicken } from "react-icons/gi";
import { AddItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
function Card({name, image, id, price, type}) {
  let dispatch= useDispatch()
  return (
    <div  className=" bg-transparent border-1 border-white h-[27rem] w-[22rem] flex flex-col justify-center items-center rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-all duration-500 ">
      <div >
        <img src={image} alt="" className="w-[21rem] h-[15rem] rounded-md " />
      </div>
      <div className="font-semibold m-[1rem] text-3xl ">
         {name} 
      </div>
      <div className="flex gap-[7rem] text-red-500  text-2xl ">
        Rs {price}/-
        <div className="flex gap-[0.5rem] justify-center items-center">
        {type==="veg" ? <LuLeafyGreen /> : <GiRoastChicken />}
        
        {type}
        </div>
      </div>
      <button 
      className="bg-red-400 p-[.7rem] w-[90%] m-[1rem] rounded-md font-bold shadow-md text-white hover:bg-red-300 cursor-pointer"
      onClick={()=>{dispatch(AddItem({id:id, name:name, price:price , qty:1, image:image}));toast.error("Item Added")}}
      >Add to Dish</button>
    </div>
  )
}

export default Card
