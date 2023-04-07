import { useEffect, useRef, useState} from 'react'
import './App.css'
import Logo from './assets/images/logo.svg'
import HeroImageMobile from './assets/images/image-hero-mobile.png'
import HeroImageDesktop from './assets/images/image-hero-desktop.png'
import Logos from './Logos'
import Menu from './Menu'
import Navbar from './Navbar'


function App() {
  const [isMenuExpanded, setMenuState] = useState(false)
  const [isDesktop, setDesktopState] = useState(window.innerWidth >= 1000)
  const [sublinkStates, setSublinkState] = useState([false, false])
  console.log(import.meta.env)
  console.log(import.meta.env.VITE_TEST)


  useEffect(() => {
    function handleWindowResize(){
      setDesktopState(window.innerWidth >= 1000)
    }  
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  },[isDesktop])
  

function handleClick(e){
  if (e.target.classList.contains('collapsed-buttons')){  
    if (e.target.parentElement.firstChild === e.target){      
      setSublinkState(prev => [!prev[0], prev[1] && false])         
    } else if (e.target.parentElement.children[2] === e.target){     
  
      setSublinkState(prev => [prev[0] && false, !prev[1]])       
    }
  } else {
    setSublinkState([false, false])
  }
 
}
  
  return (
    <div className="App" onClick={e => handleClick(e)}>      
      <header>
        <img src={Logo} alt="logo" width={83} height={27} />
        <Menu isMenuExpanded = {isMenuExpanded} setMenuState= {setMenuState}/>    
        <Navbar isMenuExpanded = {isMenuExpanded} sublinkStates= {sublinkStates}/>
      </header>
      <main>
        <picture >
          <source media="(min-width: 1000px)" srcSet={HeroImageDesktop} sizes="" />
          <img src={HeroImageMobile} alt="image not found" className="heroimage"/>
        </picture>
        <section className='main-section'>
          <h1 className='main-title'>Make remote work</h1>
          <p className='main-paragraph'> 
            Get your team in sync, no matter your
            location. Streamline processes, create
            team rituals, and watch productivity soar.
          </p>
          <button className='LearnMore'>Learn more</button>
          <Logos isDesktop= {isDesktop}/>  
        </section>
      </main>
    </div>
  )
}

export default App
