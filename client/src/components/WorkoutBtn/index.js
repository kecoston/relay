import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 150
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    },
    button: {
        marginTop: theme.spacing(2)
    }
}));

export default function AlertDialog() {
    const classes = useStyles();
    const [age, setAge] = React.useState("");
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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

                        <form
                            item
                            xs={4}
                            className={classes.root}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                item
                                xs={12}
                                id="standard-basic"
                                label="Workout Title"
                            />
                        </form>

                        <FormControl item xs={4} className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">
                                Select Contact
                </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl item xs={4} className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">
                                Time Interval
                </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </DialogContentText>

                    <DialogActions >
                        <Button onClick={handleClose} color="primary">
                            Close
                </Button>
                        <Button onClick={handleClose} color="primary" autoFocus>
                            Start
                </Button>
                    </DialogActions>

                </DialogContent>
            </Dialog>
        </div>
    );
}
