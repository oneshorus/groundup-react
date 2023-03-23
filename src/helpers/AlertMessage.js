import React from 'react'

import { Alert, AlertTitle, Snackbar } from '@mui/material';


function AlertMessage({ notification }) {
    // const [open, setOpen] = useState(status)

    return (
        <Snackbar
        open={notification?.status}
        key={'topright'}
        // autoHideDuration={5000}
        // onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert severity={notification?.type}>
                <AlertTitle>{notification?.type.toUpperCase()}</AlertTitle>
                {notification?.message}
            </Alert>
        </Snackbar>
    )
}

export default AlertMessage