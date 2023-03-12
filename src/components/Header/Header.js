import React from 'react';

import { Settings, Person2 } from '@mui/icons-material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

import "./Header.css"

function Header() {
    const styles = {
        backgroundImage: `url('/assets/img/logo.png')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '53px',
        width: '200px',
      };

    return (
        <div className='header'>
            <div className='header-item logo' style={styles}></div>
            <div className='header-item page'>DASHBOARD</div>
            <div className='header-item page alert'>ALERTS</div>
            <div className='header-item icon setting'><Settings /></div>
            <div className='header-item icon'><Person2 /></div>
            <div className='header-item icon'><NotificationsNoneIcon /></div>
            <div className='header-item spacer'></div>
            <div className='header-item greeting'>Welcome Admin!</div>
        </div>
    )
}

export default Header