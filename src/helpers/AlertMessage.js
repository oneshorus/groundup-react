import React from 'react'

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Snackbar from '@mui/material/Snackbar';


function AlertMessage({ message, status }) {
    // const [open, setOpen] = useState(status)

    return (
        <Snackbar
        open={status}
        key={'topright'}
        // autoHideDuration={5000}
        // onClose={() => setOpen(false)}
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