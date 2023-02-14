import { slide as Menu} from 'react-burger-menu'
import { Link } from 'react-router-dom';
import { useUserContext } from '../../Context/UserContextProvider';
import burgerMenu from '../../images/burgerMenu.png';
import home from '../../images/icons/home.jpg';
import wallet from '../../images/icons/wallet.png';
import settings from '../../images/icons/settings.png';
import tutorial from '../../images/icons/tutorial.png';
import logout from '../../images/icons/logout.png';
import message from '../../images/icons/message.png';
import top from '../../images/icons/top.png';
import about from '../../images/icons/about.png';



const BurgerMenu = () : any => {

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
          background: 'black'
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
    <Menu styles={styles} customBurgerIcon={ <img className="w-1/12" src={burgerMenu} /> }>
        <div className="flex flex-col w-full">
          <p className="menu-item font-bold text-[2rem] mt-5 pb-2 border-b-[2px] border-b-solid border-b-[#454545] w-full">Game  </p>
          <Link to='/'><div className='flex flex-row hover:bg-[#121212dd] hover:text-white pb-1 pl-5 mt-[1rem] hover:scale-110 cursor-pointer transition-all duration-200 hover:boxshadow3'><img className='mt-2 w-[2rem] h-[2rem] opacity-[0.7]' src={home}/><p className="menu-item text-[1.5rem] py-2 pl-3">Home</p></div></Link> 
          <div className='flex flex-row hover:bg-[#121212dd] hover:text-white pb-1 pl-5 hover:scale-110 cursor-pointer transition-all duration-200 hover:boxshadow3'><img className='mt-2 w-[2rem] h-[2rem] opacity-[0.7]' src={wallet}/><p className="menu-item text-[1.5rem] py-2 pl-3">Wallet</p></div>
          <Link to='/Messages'><div className='flex flex-row hover:bg-[#121212dd] hover:text-white pb-1 pl-5 hover:scale-110 cursor-pointer transition-all duration-200 hover:boxshadow3'><img className='mt-2 w-[2rem] h-[2rem] opacity-[0.7]' src={message}/><p className="menu-item text-[1.5rem] py-2 pl-3">Messages</p></div> </Link> 
          <div className='flex flex-row hover:bg-[#121212dd] hover:text-white pb-1 pl-5 hover:scale-110 cursor-pointer transition-all duration-200 hover:boxshadow3'><img className='mt-2 w-[2rem] h-[3rem] opacity-[0.7]' src={top}/><p className="menu-item text-[1.5rem] py-2 pl-3">Top Earns</p></div> 
          <div className='flex flex-row hover:bg-[#121212dd] hover:text-white pb-1 pl-5 hover:scale-110 cursor-pointer transition-all duration-200 hover:boxshadow3'><img className='mt-2 w-[2rem] h-[2rem] opacity-[0.7]' src={settings}/><p className="menu-item text-[1.5rem] py-2 pl-3">Settings</p></div>
          <div className='flex flex-row hover:bg-[#121212dd] hover:text-white pb-1 pl-5 hover:scale-110 cursor-pointer transition-all duration-200 hover:boxshadow3'><img className='mt-2 w-[2rem] h-[2rem] opacity-[0.7]' src={tutorial}/><p className="menu-item text-[1.5rem] py-2 pl-3">Tutorial</p></div> 
          <div className='flex flex-row hover:bg-[#121212dd] hover:text-white pb-1 pl-5 hover:scale-110 cursor-pointer transition-all duration-200 hover:boxshadow3'><img className='mt-2 w-[2rem] h-[2rem] opacity-[0.7]' src={about}/><p className="menu-item text-[1.5rem] py-2 pl-3">About</p></div> 
          <Link to='/'> <div className='flex flex-row hover:bg-[#121212dd] hover:text-white z-20 hover:boxshadow3 pb-1 pl-5 hover:scale-110 cursor-pointer transition-all duration-200 hover:boxshadow3'><img className='mt-2 w-[2rem] h-[2.25rem] opacity-[0.7]' src={logout}/><p className="menu-item text-[1.5rem] py-2 pl-3 " onClick={() => { localStorage.removeItem('session'); isLoggedInHandler(!isLoggedIn)}}>Log out </p></div></Link>
        </div>
    </Menu>
    )
}

export default BurgerMenu;