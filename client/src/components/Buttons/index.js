import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import PhoneForwardedOutlinedIcon from '@material-ui/icons/PhoneForwardedOutlined';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function IconLabelButtons(props) {
    const classes = useStyles();

    return (
        <div>
            <Tooltip title="Send Location" arrow>
                <IconButton
                    color="primary"
                    size="large"
                    onClick={props.quick}
                >
                    <SendOutlinedIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Call Contact" arrow>
                <IconButton
                    color="primary"
                    size="large"
                    onClick={() => { console.log('calling contact') }}
                >
                    <PhoneForwardedOutlinedIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Take Photo" arrow>
                <IconButton
                    color="primary"
                    size="large"
                    onClick={() => { console.log('taking photo') }}
                >
                    <CameraAltOutlinedIcon />
                </IconButton>
            </Tooltip>
            <hr />
            <Button
                variant="outlined"
                color="secondary"
                size="large"
                className={classes.button}
                onClick={props.stop} 
            >
                End Workout
      </Button>
            <br />
            <br />
        </div>
    );
}
