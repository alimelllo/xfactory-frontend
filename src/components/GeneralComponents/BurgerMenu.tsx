import { slide as Menu} from 'react-burger-menu'
import { Link } from 'react-router-dom';
import { useUserContext } from '../../Context/UserContextProvider';
import burgerMenu from '../../images/burgerMenu.png';

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
    <Menu styles={styles} customBurgerIcon={ <img className="w-1/12" src={burgerMenu} /> }>
        <div className="flex flex-col w-full">
          <p className="menu-item font-bold text-[2rem] mt-5 pb-2 border-b-[2px] border-b-solid border-b-[#454545] w-full">Game  </p>
          <Link to='/'><p className="menu-item text-[1.5rem] py-2 pl-3 hover:scale-110 cursor-pointer transition-all duration-200">Home</p> </Link>
          <p className="menu-item text-[1.5rem] py-2 pl-3 hover:scale-110 cursor-pointer transition-all duration-200">Connect Wallet</p> 
          <p className="menu-item text-[1.5rem] py-2 pl-3 hover:scale-110 cursor-pointer transition-all duration-200">Settings</p> 
          <p className="menu-item text-[1.5rem] py-2 pl-3 hover:scale-110 cursor-pointer transition-all duration-200" onClick={() => { localStorage.removeItem('session'); isLoggedInHandler(!isLoggedIn)}}>Log out </p> 
        </div>
    </Menu>
    )
}

export default BurgerMenu;