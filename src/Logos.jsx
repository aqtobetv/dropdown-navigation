import Databiz from './assets/images/client-databiz.svg'
import Audiophile from './assets/images/client-audiophile.svg'
import Meet from './assets/images/client-meet.svg'
import Maker from './assets/images/client-maker.svg'

function Logos({isDesktop}){    
    return (
        <div className="logos">
            <img src={Databiz} alt="Databiz" width={isDesktop? 113: 82} height={isDesktop? 20:15}/>
            <img src={Audiophile} alt="Audiophile" width={isDesktop? 73: 52} height={isDesktop? 35:26}/>
            <img src={Meet} alt="Meet" width={isDesktop? 90: 63} height={isDesktop? 20:14}/>
            <img src={Maker} alt="Maker" width={isDesktop? 82:60} height={isDesktop? 25:18}/>
        </div>    

    )
}
export default Logos;