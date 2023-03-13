import React, {useState} from 'react'

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Snackbar from '@mui/material/Snackbar';


function AlertMessage({ message }) {
    const [open, setOpen] = useState(true)

    return (
        <Snackbar
        open={open}
        key={'topright'}
        autoHideDuration={5000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {message}
            </Alert>
        </Snackbar>
    )
}

export default AlertMessage