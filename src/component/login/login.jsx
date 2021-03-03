import React, { Component } from 'react';
import {
    ThemeProvider,
    createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Snackbar from "@material-ui/core/Snackbar";
import './login.scss'
import Login from '../../service/lmsservice'
import { Redirect } from 'react-router-dom';
const loginlms = new Login();
export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            snackbaropen: false,
            snackbarmsg: '',
            loggedIn: ''
        }

    }
    snackbarClose = (event) => {
        this.setState({ snackbaropen: false });
    }
    showpass = () => {
        let x = document.getElementById("outlined-basic1");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }
    handlelogin = () => {
        let req = {
            username: this.state.username,
            password: this.state.password
        }
        loginlms.loginlms(req).then((data) => {
            // console.log(data.headers.get('authorization'));
            console.log(data);

            localStorage.setItem("token",data.data.username)
            this.setState({ snackbaropen: true, snackbarmsg: 'Logged In' })
            this.setState({
                loggedIn:true
            })
        }).catch((err) => {
            console.log(err);
            this.setState({ snackbaropen: true, snackbarmsg: 'error' })
        })
        //     .then(response => {
    //        console.log(response.headers.get("authorization"));
    //     })
    //     .catch(error => {
    //        console.log(error)
    //     });
    // }
    }
    theme = createMuiTheme({
        palette: {
            primary: {
                main: '#008CFF',
            }
        },
    });


    render() {
        if(this.state.loggedIn){
            return <Redirect to='/dashboard'/>
        }
        return (
            <div className='login'>
                <div className="img-container"><img className='img1' alt='' /></div>
                <div className='inputs'>
                    <img className='l1' alt=''/><br />
                    <span className='hdr1'>Welcome back!</span><br />
                    <span className='hdr2'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed <br />diam nonumyundefined</span><br /><br /><br />
                    <ThemeProvider theme={this.theme}>
                        <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e) => { this.setState({ username: e.target.value }) }} /><br /><br />
                        <TextField type='password' id="outlined-basic1" label="Password" variant="outlined" onChange={(e) => { this.setState({ password: e.target.value }) }} /><br />
                    </ThemeProvider>
                    <img className='eye1' onClick={this.showpass} alt='' />
                    <span className='frgt'>Forgot Password?</span><br /><br />
                    <button onClick={this.handlelogin}>Login</button>
                </div>
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    open={this.state.snackbaropen}
                    autoHideDuration={2000}
                    onClose={this.snackbarClose}
                    message={<span id="message-id">{this.state.snackbarmsg}</span>}
                // action
                />

            </div>
        )
    }
}
