import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, useTheme } from '@mui/material';
import { tokens } from '../../theme';

export default function FormDialog(props) {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return (
        <React.Fragment>
        <Dialog
            open={props.open}
            onClose={props.handleClose}
            PaperProps={{
            component: 'form',
            onSubmit: (event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const formJson = Object.fromEntries(formData.entries());
                props.handleAgree({
                    "name":formJson["team-name"],
                    "email":formJson["team-email"],
                    "age":formJson["team-age"],
                    "phone":formJson["team-phone"],
                    "address":formJson["team-address"],
                    "city":formJson["team-city"],
                    "zipCode":formJson["team-zip"],
                    "access":formJson["team-access"],
                })
            },
            }}
        >
            <DialogTitle>Member Info</DialogTitle>
            <DialogContent>
            <TextField
                required
                margin="dense"
                id="team-name"
                name="team-name"
                label="Name"
                type="text"
                fullWidth
                variant="standard"
                defaultValue={props.member?props.member.name:""}
            />
            <TextField
                required
                margin="dense"
                id="team-email"
                name="team-email"
                label="Email"
                type="email"
                fullWidth
                variant="standard"
                defaultValue={props.member?props.member.email:""}
            />
            <TextField
                required
                margin="dense"
                id="team-age"
                name="team-age"
                label="Age"
                type="text"
                fullWidth
                variant="standard"
                defaultValue={props.member?props.member.age:""}
            />
            <TextField
                required
                margin="dense"
                id="team-phone"
                name="team-phone"
                label="Phone Number"
                type="text"
                fullWidth
                variant="standard"
                defaultValue={props.member?props.member.phone:""}
            />
            <TextField
                required
                margin="dense"
                id="team-address"
                name="team-address"
                label="Address"
                type="text"
                fullWidth
                variant="standard"
                defaultValue={props.member?props.member.address:""}
            />
            <TextField
                required
                margin="dense"
                id="team-city"
                name="team-city"
                label="City"
                type="text"
                fullWidth
                variant="standard"
                defaultValue={props.member?props.member.city:""}
            />
            <TextField
                required
                margin="dense"
                id="team-zip"
                name="team-zip"
                label="Zip Code"
                type="text"
                fullWidth
                variant="standard"
                defaultValue={props.member?props.member.zipCode:""}
            />
                <FormControl margin="dense">
                    <FormLabel id="demo-row-radio-buttons-group-label">Access</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="team-access"
                        defaultValue={props.member?props.member.access:""}
                    >
                        <FormControlLabel value="Admin" control={<Radio />} label="Admin" />
                        <FormControlLabel value="User" control={<Radio />} label="User" />
                        <FormControlLabel value="Manager" control={<Radio />} label="Manager" />
                    </RadioGroup>
                </FormControl>
            </DialogContent>
            <DialogActions>
            <Button onClick={props.handleClose} sx={{color: colors.redAccent[300]}}>Cancel</Button>
            <Button type="submit" sx={{color: colors.greenAccent[500]}}>{props.method=="update"?"Edit":"Add"}</Button>
            </DialogActions>
        </Dialog>
        </React.Fragment>
    );
}
