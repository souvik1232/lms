import React, { Component,Suspense } from 'react';
import {
    ThemeProvider,
    createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Snackbar from "@material-ui/core/Snackbar";
import './login.scss'
import Login from '../../service/lmsservice'
import { Redirect } from 'react-router-dom';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { isemailValid, ispasswordValid } from '../utility/utility';
import Image from '../assets/Image.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// const Image = React.lazy(() => import('../assets/Image.png'));
const loginlms = new Login();
class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            passflag: false,
            snackbaropen: false,
            snackbarmsg: '',
            loggedIn: '',
            usernameerrors: '',
            usernameflag: false,
            passwordflag: false,
            passworderrors: '',
        }

    }
    snackbarClose = (event) => {
        this.setState({ snackbaropen: false });
    }
    showpass = () => {
        this.setState({ passflag: !this.state.passflag })
        let x = document.getElementById("outlined-basic1");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

    formValidation = () => {
        
        const username = this.state.username;
        const password = this.state.password;
        let isValid = true;
        let usernameerrors = '';
        let passworderrors = '';
        
        if (!isemailValid(username)) {
            usernameerrors = 'Not valid';
            isValid = false;
            this.setState({ usernameflag: true })
        } else {
            this.setState({ usernameflag: false })
        }
        if (!ispasswordValid(password)) {
            passworderrors = 'Not Valid';
            isValid = false;
            this.setState({ passwordflag: true })
        } else {
            this.setState({ passwordflag: false })
        }
        this.setState({ usernameerrors, passworderrors });
        return isValid;
    }

    handlelogin = () => {
        const isValid = this.formValidation();
        console.log(isValid);
        if (isValid) {
            let req = {
                username: this.state.username,
                password: this.state.password
            }
            loginlms.loginlms(req).then((data) => {
                // console.log(data.headers.get('authorization'));
                console.log(data);
                localStorage.setItem("token", data.headers.authorization)
                this.setState({ snackbaropen: true, snackbarmsg: 'Logged In' })
                this.setState({
                    loggedIn: true
                })
            }).catch((err) => {
                console.log(err);
                this.setState({ snackbaropen: true, snackbarmsg: 'error' })
            })
        }
    }
    returnimage = ()=>{
        return (<img src={Image} alt='img'/>)
    }
    theme = createMuiTheme({
        palette: {
            primary: {
                main: '#008CFF',
            }
        },
    });


    render() {
        console.log(Image);
        if (this.state.loggedIn) {
            return <Redirect to='/dashboard/home' />
        }
        
        return (
            <div className='login'>
                <div className="img-container"><LazyLoadImage className='img1' src={Image} alt='img' effect='blur'/></div>
                {/* <div className="img-container"><img className='img1'src={Image} alt='img' /></div> */}
                <div className='inputs'>
                    <img className='l1' alt='' /><br />
                    <span className='hdr1'>Welcome back!</span><br />
                    <span className='hdr2'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed <br />diam nonumyundefined</span><br /><br /><br />
                    <ThemeProvider theme={this.theme}>
                        <div className='inpt1'><TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            error={this.state.usernameflag}
                            helperText={this.state.usernameerrors}
                            onChange={(e) => { this.setState({ username: e.target.value }) }} /></div>
                        <br /><br /><br/> <br/>
                        <div className='inpt1'><TextField
                            className='passfield'
                            type='password'
                            id="outlined-basic1"
                            label="Password"
                            error={this.state.passwordflag}
                            helperText={this.state.passworderrors}
                            variant="outlined"
                            onChange={(e) => { this.setState({ password: e.target.value }) }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            className='Visibility'
                                            aria-label="toggle password visibility"
                                            onClick={this.showpass}
                                            edge="end"
                                        >
                                            {this.state.passflag ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        /></div><br />
                        {/* <img className='eye1' onClick={this.showpass} alt='img' /> */}

                    </ThemeProvider>
                            <br/><br/>
                    <span className='frgt'>Forgot Password?</span><br /><br />
                    <button className='loginbut' onClick={this.handlelogin}>Login</button>
                </div>
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    open={this.state.snackbaropen}
                    autoHideDuration={2000}
                    onClose={this.snackbarClose}
                    message={<span id="message-id">{this.state.snackbarmsg}</span>}
                />

            </div>
        )
    }
}

export default login