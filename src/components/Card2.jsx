import { IoTrash } from "react-icons/io5";
import { DecrementQty, IncrementQty, RemoveItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";


function Card2({name, id, price, image, qty}) {
   let dispatch = useDispatch() 
  return (
    <div className='flex justify-between items-center p-[1rem] m-[1rem] w-[100vw] bg-blue-50 rounded-lg shadow-lg'>
      <div className="flex justify-center items-center gap-[1rem]">
        <div>
            <img src={image} alt="" className='w-[12rem] h-[8rem] rounded-md shadow-lg'/>
        </div>
        <div>
            <div className='text-lg text-gray-500 font-bold'>
                {name}
            </div>
            <div className='flex justify-center items-center w-[7rem] h-[2.5rem] mt-[.5rem] rounded-lg overflow-hidden border-2 border-red-400 shadow-lg text-red-400'>
               <button 
               className='w-[30%] h-full text-xl font-bold flex justify-center items-center bg-white cursor-pointer hover:bg-red-100'
               onClick={()=>qty>1?dispatch(DecrementQty(id)):1}>-</button>
               
               <span className='w-[40%] h-full bg-blue-100 flex justify-center items-center text-red-400 font-semibold'>{qty}</span>
               <button 
               className='w-[30%] h-full text-xl font-bold flex justify-center items-center bg-white cursor-pointer hover:bg-red-100'
               onClick={()=>dispatch(IncrementQty(id))}>+</button>               
            </div>
        </div>
        </div>
        <div className="flex flex-col text-xl text-red-400 absolute right-[3rem] gap-[.2rem]">
        Rs {price}/-
        <IoTrash 
        className="h-[2rem] w-[2rem] cursor-pointer" 
        onClick={()=>{dispatch(RemoveItem(id))}}/>
      </div>
    </div>
      
    
  )
}

export default Card2;
