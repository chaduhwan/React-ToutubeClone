import logo from './logo_dark.png'
import './Header.scss'
import { IconProp, config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faBars, faBell, faCircleUser, faMicrophone, faSearch, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
config.autoAddCss = false


export default function Header() {



    return (
        <div className='headerMain'>

            <div>
                <button><FontAwesomeIcon className='icon' icon={faBars as IconProp}/></button>
                <img onClick={()=>{window.location.reload()}}src={logo} alt='logo'/>
            </div>

            <div>
                <form>
                    <input placeholder=' 검색'/>
                    <button><FontAwesomeIcon className='icon' icon={faSearch as IconProp}/></button>
                    <button className='mic'><FontAwesomeIcon className='icon' icon={faMicrophone as IconProp}/></button>
                </form>
            </div>

            <div>
                <button><FontAwesomeIcon className='icon' icon={faVideo as IconProp}/></button>
                <button><FontAwesomeIcon className='icon' icon={faBell as IconProp}/></button>
                <button><FontAwesomeIcon className='icon' icon={faCircleUser as IconProp}/></button>
            </div>
        </div>
    )
}