import { useUserContext } from "../../Context/UserContextProvider";
import mainIntro from '../../images/mainIntro.png';
import { slide as Menu} from 'react-burger-menu'
import burgerMenu from '../../images/burgerMenu.png';

const Main = () : any => {

    const { isLoggedInHandler ,  isLoggedIn } : any = useUserContext()

    const styles = {
      bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '36px',
        top: '28px'
      },
      bmBurgerBars: {
        background: '#373a47'
      },
      bmBurgerBarsHover: {
        background: '#a90000'
      },
      bmCrossButton: {
        height: '24px',
        width: '24px'
      },
      bmCross: {
        background: '#bdc3c7'
      },
      bmMenuWrap: {
        position: 'fixed',
        height: '100%'
      },
      bmMenu: {
        background: '#1a1a1a',
        marginTop : '0',
        fontSize: '1.15em' , 
        
      },
      bmMorphShape: {
        fill: '#373a47'
      },
      bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
      },
      bmItem: {
        display: 'inline-block'
      },
      bmOverlay: {
        background:' rgba(0, 0, 0, 0.3)'
      }
   }


return (
 <div className="h-[45rem]" style={{ backgroundImage : `url(${mainIntro})` , backgroundSize :'cover'}}>
    <Menu styles={styles} customBurgerIcon={ <img className="w-1/12" src={burgerMenu} /> }>
        <div className="flex flex-col w-full">
          <p className="menu-item font-bold text-[2rem] mt-5 pb-2 border-b-[2px] border-b-solid border-b-[#454545] w-full">Game  </p>
          <p className="menu-item text-[1.5rem] py-2 pl-3 hover:scale-110 cursor-pointer transition-all duration-200">Settings</p> 
          <p className="menu-item text-[1.5rem] py-2 pl-3 hover:scale-110 cursor-pointer transition-all duration-200" onClick={() => { localStorage.removeItem('session'); isLoggedInHandler(!isLoggedIn)}}>Log out </p> 
        </div>
       

    </Menu>
    {/* <img className="z-10" src={mainIntro} /> */}
    <div className="w-full boxshadow2 sticky top-0 shadow-2xl flex z-30 bg-[#252525f4] flex-row justify-end text-center text-[#888888] text-[1.5rem] font-[monospace] pb-7 pt-6 ">
        {/* <p className="ml-10 cursor-pointer hover:text-white hover:scale-110 transition-all duration-200 text-[1.5rem]" onClick={() => { localStorage.removeItem('session'); isLoggedInHandler(!isLoggedIn)}}> Log out</p>  */}
        <p className="mr-10"> User Name </p> 
    </div>
    <div className="flex flex-col mt-[20rem]">
    <div className="w-full py-3 text-[2.5rem] text-[#a4a4a4] rounded-[5px]"><p className="float-right mr-[5rem]">Play To Earn...</p></div>
    <div className="flex justify-end"><p className="pb-3 text-[1.5rem] text-center text-white rounded-[5px] mr-[5rem] boxshadow2 w-[15rem] bg-gradient-to-r from-[#2a6744] to-[green] cursor-pointer transition-all duration-200 hover:scale-110 tracking-[1px] hover:bg-[#0c9f0c] pt-2 mt-[2rem]">Start Playing</p></div>
    </div>
   
  </div> 
 )
}

export default Main; 