import React, { Component } from 'react';
import axios from 'axios'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/login">
        Relay
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class Signup extends Component {

	state = {
		userName: "",
		password: "",
	};

	handleInputChange = event => {
		let value = event.target.value;
		const name = event.target.name;

		// if (name === "password") {
		// 	value = value.substring(0,15);
		// }

		this.setState({
			[name]: value 
		})
	}
	handFormSubmit = event => {
		
		event.preventDefault();
		
		//request to server to add a new username/password
		axios.post('/user/', {
			userName: this.state.userName,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/'
						
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}

	render() {

		const { classes } = this.props;

		return (
			<Container component="main" maxWidth="xs">
			  <CssBaseline />
			  <div className={classes.paper}>
				<Avatar className={classes.avatar}>
				  <LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
				  Sign Up
				</Typography>
				<form className={classes.form} noValidate>
				  <Grid container spacing={2}>
					<Grid item xs={12}>
					  <TextField
						variant="outlined"
						required
						fullWidth
						id="userName"
						label="Create a username"
						name="userName"
						autoComplete="username"
						onChange={this.handleInputChange}
					  />
					</Grid>
					<Grid item xs={12}>
					  <TextField
						variant="outlined"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						onChange={this.handleInputChange}
						/>
					</Grid>
				  </Grid>
				  <Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					className={classes.submit}
                    onClick={this.handFormSubmit}>
					Sign Up
				  </Button>
				  <Grid container justify="flex-end">
					<Grid item>
					  <Link href="/" variant="body2">
						Already have an account? Sign in
					  </Link>
					</Grid>
				  </Grid>
				</form>
			  </div>
			  <Box mt={5}>
				<Copyright />
			  </Box>
			</Container>
		  );
	}
}

export default withStyles(styles)(Signup);