
import './Sidebar.css'
import Sidebarrow from './Sidebarrow'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags'
import PeopleIcon from '@mui/icons-material/People'
import ChatIcon from '@mui/icons-material/Chat'
import StorefrontIcon from '@mui/icons-material/Storefront'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Shortcuts from './Shortcuts';
import { useStateValue } from './StateDataprovider'


const Sidebar = () => {
  const [{user} , dispatch ]=useStateValue();

  return (
    <div className='Sidebar'>
        <Sidebarrow src={user.photoURL} title={user.displayName}/>
        <Sidebarrow  Icon ={LocalHospitalIcon}
        title="COVID-19 Information Center"/>
        <Sidebarrow Icon= {EmojiFlagsIcon} title="pages"/>
        <Sidebarrow Icon={PeopleIcon} title="Friends" />
        <Sidebarrow Icon={ChatIcon} title="Messenger"/>
        <Sidebarrow Icon ={StorefrontIcon} title="Marketplace"/>
        <Sidebarrow Icon ={VideoLibraryIcon} title="videos"/>
        <Sidebarrow Icon ={ExpandMore} title="See more"/>
        <hr style={{color:'lightgray',marginTop:'10px' }}/>
        <h3 className="shortcuts-tag">Your Shortcuts</h3>
        <div className='shortcuts'>
          <Shortcuts src="https://scontent.fktm14-1.fna.fbcdn.net/v/t1.6435-9/79878191_465751864133535_7379879899118436352_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=re3TyNwON5UAX8boN4Z&_nc_ht=scontent.fktm14-1.fna&oh=00_AT8YE8GZFE9_37RhJUEtX9iITMpwJ1Zfleen5hH_wsUiGg&oe=62F9F2A7"
          title="Photography" />
          <Shortcuts src="https://scontent.fktm14-1.fna.fbcdn.net/v/t1.18169-9/18157775_302258726862099_90682792191421075_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=llPMzN6Lqg4AX_0nUFn&_nc_ht=scontent.fktm14-1.fna&oh=00_AT_MTpFCQPFrtuGKq9d7vVTDe-FVbETuTcF707Vh4HIfRw&oe=62F91519"
          title="Photography" />
          <Shortcuts src="https://scontent.fktm14-1.fna.fbcdn.net/v/t1.6435-9/79878191_465751864133535_7379879899118436352_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=re3TyNwON5UAX8boN4Z&_nc_ht=scontent.fktm14-1.fna&oh=00_AT8YE8GZFE9_37RhJUEtX9iITMpwJ1Zfleen5hH_wsUiGg&oe=62F9F2A7"
          title="Photography" />

        </div>
    </div>
    
  )
}

export default Sidebar