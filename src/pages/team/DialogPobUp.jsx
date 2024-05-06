import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { tokens } from '../../theme';
import { useTheme } from '@mui/material';

const DialogPobUp = (props) => {
  
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

    return (
      <Dialog
        fullScreen={props.fullScreen}
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Are You Sure?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you really want to delete this member?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={props.handleClose} sx={{color: colors.greenAccent[500]}}>
            Cancel
          </Button>
          <Button onClick={props.handleAgree} autoFocus sx={{color: colors.redAccent[300]}}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    );
}

export default DialogPobUp;