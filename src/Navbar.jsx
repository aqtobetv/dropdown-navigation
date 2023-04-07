
function NavLinks({isMenuExpanded, sublinkStates}){      

    const [isSublinkOneOpened,isSublinkTwoOpened] = sublinkStates
    function Sidebar(){
        return (
            <>            
                <nav className="navlinks">
                    <button className={isSublinkOneOpened ? "collapsed-buttons--up collapsed-buttons" : "collapsed-buttons"}>
                        Features
                    </button>                        
                    <ul className={isSublinkOneOpened ? "subLinks--show subLinks" : "subLinks"} >
                        <li><a href="" className='todo'>Todo List</a></li>
                        <li><a href="" className='calendar'>Calendar</a></li>
                        <li><a href="" className='reminders'>Reminders</a></li>
                        <li><a href="" className='planning'>Planning</a></li>
                    </ul>
                    <button className={isSublinkTwoOpened ? "collapsed-buttons--up collapsed-buttons" : "collapsed-buttons"}>
                    Company
                    </button>
                    <ul className={isSublinkTwoOpened ? "subLinks--show subLinks--second subLinks" : "subLinks"} >
                        <li><a href="">History</a></li>
                        <li><a href="">Our Team</a></li>
                        <li><a href="">Blog</a></li>               
                    </ul>
                    <a href="" className='links'>Careers</a>
                    <a href="" className='links'>About</a>              
                </nav>
                <div className="authorization">
                    <a className='login'>Login</a>
                    <a className='register'>Register</a>            
                </div>   
            </>  
        )
    }
    
    return (     
        <>
            {isMenuExpanded ? <div className="sidebar-background"><div className="sidebar"><Sidebar /></div></div>: <Sidebar /> }        
        </>               
    )
}

export default NavLinks;
