import React from 'react'
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './Search.css';
import './Home.css';
import Search from './Search';
function Home() {
  return (
    <div className='home'>
        <div className='home_header'>
            <div className='home_headerLeft'>
                    <p>About</p>
                    <p>Store</p>    
            </div>
            <div className='home_headerRight'>
                         <p>Gmail</p>
                         <p>Images</p>
                         <AppsIcon /><br />
                         <AccountCircleIcon />
            </div>
        </div>
        <div className='home_body'>
            <img src= "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png" alt="google_img" />
        
        <div className='home__inputContainer'>
            <Search />
        </div>
        </div>
    </div>
  )
}

export default Home