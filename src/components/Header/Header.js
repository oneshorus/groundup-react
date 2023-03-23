import React from 'react';

import { Settings, Person2, NotificationsNone } from '@mui/icons-material';
import { IconButton, Tooltip, Zoom } from '@mui/material';

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
            <div className='header-item icon setting'>
                <Tooltip TransitionComponent={Zoom} title="Setting">
                    <IconButton>
                        <Settings />
                    </IconButton>
                </Tooltip>
            </div>
            <div className='header-item icon'>
                <Tooltip TransitionComponent={Zoom} title="Account">
                    <IconButton>
                        <Person2 />
                    </IconButton>
                </Tooltip>
            </div>
            <div className='header-item icon'>
                <Tooltip TransitionComponent={Zoom} title="Notification">
                    <IconButton>
                        <NotificationsNone />
                    </IconButton>
                </Tooltip>
            </div>
            <div className='header-item spacer'></div>
            <div className='header-item greeting'>Welcome Admin!</div>
        </div>
    )
}

export default Header