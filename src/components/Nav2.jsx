
import { Link } from 'react-router-dom'
import { SiIfood} from "react-icons/si";
import ThemeController from './ThemeController';

function Nav2() {
  return (
    <div className='w-[100vw] '>
      <div className="navbar  border-white shadow-lg ">
  <div className="navbar-start">
     <div className="w-[60px] h-[60px] bg-transparent border-2 border-white flex justify-center items-center rounded-md  shadow-lg hover:scale-110  cursor-pointer transition-all duration-500 ml-[3rem]">
       <Link to="/"><SiIfood className="color-red-400 w-[35px] h-[35px] rounded-md text-red-500"/></Link> 
        </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal font-semibold text-lg">
      <li><Link to="/">About</Link></li>
      <li>
       <Link to="/menu">Menu</Link>
      </li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </div>
  <div>
    <div className='ml-[34rem]'>
    <ThemeController/>
    </div>
  </div>
</div>
    </div>
  )
}

export default Nav2;
