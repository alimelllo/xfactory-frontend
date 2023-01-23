import BurgerMenu from '../GeneralComponents/BurgerMenu';

const Header = () => {
    return (
    <>
    
    <BurgerMenu />
    
    <div className="w-full boxshadow2 sticky top-0 shadow-2xl flex z-30 bg-[#161616e7] flex-row justify-end text-center text-[#888888] text-[1.5rem] font-[monospace] pb-7 pt-6 ">
        <p className="mr-10">{localStorage.getItem("userName")}</p> 
    </div> 
   
   </> 
   )
}

export default Header;