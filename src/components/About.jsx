import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Nav2 from './Nav2'

function About() {
  
  return (<>
    <div className='w-[100vw] h-[100vh] flex flex-col'>
      <Nav2/>
    <div className='w-[100vw] h-[100vh] flex justify-between mt-[5rem]'>
      <div className='flex flex-col gap-[2rem] ml-[7rem]'>
      <div className='flex gap-[1rem] justify-center items-center mr-[14rem] '>
        <div className='text-9xl font-bold text-red-500'>Fast</div>
        <div className='text-5xl font-bold '>Food <br /> Delivery</div>
         <img src="Group 4.png" className='h-[9rem]' alt="" />
      </div>
      <div className='text-xl w-[50rem]'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur distinctio dolore nesciunt exercitationem officia excepturi id minus necessitatibus veniam asperiores! ipsum dolor sit amet, consectetur adipisicing elit. Earum blanditiis enim accusamus dolorem fugiat. Consequuntur illum quae qui. Quod blanditiis a quia possimus, minima deleniti provident explicabo maxime culpa quaerat quidem beatae eaque ex aut nihil qui error, doloribus adipisci tempore corrupti totam voluptas vel, hic accusamus. Numquam, minima provident, illum aliquid ipsum eos aspernatur itaque unde fugiat libero ipsam!
      </div>
      <div className='flex flex-col gap-[1rem]'>
        <Link to="/menu">
      <button className="bg-red-400 p-[.7rem] w-[10rem] rounded-md font-bold shadow-md text-white hover:bg-red-300 cursor-pointer">Order Now</button></Link>
      <div className='flex flex-col '>
        <span className='text-xl font-semibold'>5 Star Rating</span>
        based on 17889 reviews
      </div>
      
      </div>
      </div>
      <img src="17372 [Converted] 1.png" className='h-[55%] w-[25%] absolute right-[9rem]' alt="" />
    
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default About
