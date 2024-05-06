import React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const SnackBar = (props) => {
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });
  
    return (
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={props.open} autoHideDuration={6000} onClose={props.handleClose}>
          <Alert onClose={props.handleClose} severity="success" sx={{ width: '100%' }}>
            {props.method=="delete" && 'deleted successfully!'}
            {props.method=="update" && 'updated successfully!'}
            {props.method=="create" && 'created successfully!'}
          </Alert>
        </Snackbar>
      </Stack>
    );
}

export default SnackBar;