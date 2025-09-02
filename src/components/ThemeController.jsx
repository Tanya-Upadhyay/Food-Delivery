function ThemeController() {
  
 
  return (
    
    <div className="w-[60px] h-[60px] bg-transparent border-1 border-white flex justify-center items-center rounded-md  shadow-lg hover:scale-110  cursor-pointer transition-all duration-500 "
    >
       
      <input type="checkbox" value="luxury" className="toggle theme-controller text-red-500" />
    </div>
  )
}

export default ThemeController;
