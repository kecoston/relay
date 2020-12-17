import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import API from "../../utils/API";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function TransitionsModal() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [contacts, setContacts] = useState([]);
    const [formObject, setFormObject] = useState({})

    useEffect(() => {
        loadContacts()
    }, [])

    function loadContacts() {
        API.getContacts()
          .then(res =>
            setContacts(res.data)
          )
          .catch(err => console.log(err));
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.firstName && formObject.lastName && formObject.phoneNumber) {
          API.saveContact({
            firstName: formObject.firstName,
            lastName: formObject.lastName,
            phoneNumber: formObject.phoneNumber
          })
            .then(handleClose)
            .then(res => loadContacts())
            .catch(err => console.log(err));
        }
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button type="button" color="defaul" variant="outlined" onClick={handleOpen}>
                Add Contact
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h4>Add Contact</h4>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField id="standard-basic" label="First Name" name="firstName" onChange={handleInputChange} /><br />
                            <TextField id="standard-basic" label="Last Name" name="lastName" onChange={handleInputChange}/><br />
                            <TextField id="standard-basic" label="Phone Number" name="phoneNumber" onChange={handleInputChange}/><br />
                        </form>
                        <br />
                        <Button type="button" color="default" variant="outlined" onClick={handleFormSubmit} onClose={handleClose}> Submit </Button>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
