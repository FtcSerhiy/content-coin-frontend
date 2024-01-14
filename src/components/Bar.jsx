import subscribes from '../assets/subscribes.svg'
import search from '../assets/search.svg'
import settings from '../assets/settings.svg'
import user from '../assets/user.svg'
import './Bar.css'

export function Bar() {
    return <nav className="nav-bar">
        <div className="logo">
            <img src="https://ethereum.org/assets/svgs/eth-diamond-purple.svg" alt="" />
        </div>
        <div className="instruments">
            <ul>
                <li><button><img src={search} alt="Search icon" /></button></li>
                <li><button><img src={subscribes} alt="Your subscribes channels" /></button></li>
                <li><button><img src={settings} alt="Settings icons" /></button></li>
            </ul>
        </div>
        <div className="user">
            <img src={user} alt="User default icon" />
        </div>
    </nav>
}