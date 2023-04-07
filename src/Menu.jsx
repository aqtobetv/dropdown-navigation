import IconMenu from './assets/images/icon-menu.svg'
import IconClose from './assets/images/icon-close-menu.svg'

function Menu({isMenuExpanded, setMenuState}){    
    return (
        <img src={isMenuExpanded ? IconClose : IconMenu } alt="IconMenu" className={isMenuExpanded ? 'MenuButton MenuButton--expanded' : 'MenuButton'}
        onClick={() => setMenuState(prev => !prev)}/>

    )
}
export default Menu;