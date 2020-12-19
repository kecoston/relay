import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";


import Button from "@material-ui/core/Button";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

import Autocomplete from '@material-ui/lab/Autocomplete';

import API from '../../utils/API'

//MaterialUi Styles
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    },
    button: {
        marginTop: theme.spacing(2)
    }
}));

export default function WorkoutBtn() {
    //Styles set by MaterialUi
    const classes = useStyles();

    
    const [contacts, setContacts] = useState("");
    const [open, setOpen] = useState(false);
    
    const [formObject, setFormObject] = useState({
        title: "",
        interval: "",
        contactId: null 
    });


    useEffect(() => {
        loadContacts()
    }, []);

    //Load contacts into form
    function loadContacts() {
        API.getContacts()
            .then(res =>
                setContacts(res.data)
            )
            .catch(err => console.log(err));
    };


    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    // Maping contacts function MaterialUi
    const defaultProps = {
        options: contacts,
        getOptionLabel: (option) => option.firstName + " " + option.lastName
    };

 

    function handleFormSubmit(event) {
        event.preventDefault()
        if (formObject.title && formObject.interval && formObject.contactId) {
            console.log("click")
            API.saveActivities({
                title: formObject.title,
                interval: formObject.interval,
                contactId: formObject.contactId._id
            })
                .then(() =>  window.location.href =  '/workout' )
                .catch(err => console.log(err));
        }
    };


    return (

        <div>
            <Button variant="contained" onClick={handleClickOpen}>
                Begin Your Workout
            </Button>



            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Please Enter your Relay Details"}
                </DialogTitle>

                <DialogContent>
                    <DialogContentText  >



                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField id="standard-basic" name="title" value={formObject.title} label="Standard" onChange={handleInputChange} />
                        </form>

                        <FormControl item xs={4} className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">
                                Select Time Interval
                             </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                onChange={handleInputChange}
                                value={formObject.interval}
                                name="interval"

                            >
                                <MenuItem value={"00:05:00"}>00:05:00</MenuItem>
                                <MenuItem value={"00:10:00"} >00:10:00</MenuItem>
                                <MenuItem value={"00:15:00"} >00:15:00</MenuItem>
                                <MenuItem value={"00:20:00"} >00:20:00</MenuItem>
                                <MenuItem value={"00:30:00"} >00:30:00</MenuItem>
                                <MenuItem value={"01:00:00"} >01:00:00</MenuItem>

                            </Select>

                        </FormControl>


                        <Autocomplete
                            {...defaultProps}
                            id="debug"
                            name="selectedContact" 

                            value={formObject.contactId}

                            onChange={(event, newValue) => {
                                console.log(newValue)
                                setFormObject({...formObject, contactId:newValue});
                              }}

                            renderInput={(params) => <TextField {...params} label="Select Contact" margin="normal" />}
                        />

                    </DialogContentText>

                    <DialogActions >
                        <Button onClick={handleClose} color="primary">
                            Close
                </Button>
                        <Button
                            disabled={!(formObject.title && formObject.interval && formObject.contactId)}
                            onClick={handleFormSubmit}
                            color="primary" autoFocus>
                            Start

                </Button>
                    </DialogActions>

                </DialogContent>
            </Dialog>
        </div>
    );
}
