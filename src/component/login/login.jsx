import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import './login.scss'
import Login from '../../service/lmsservice'
const loginlms = new Login();
export default class login extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:''
        }
        
    }
    showpass = () => {
        let x = document.getElementById("outlined-basic1");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }
    handlelogin=()=>{
        let data={
            username:this.state.username,
            password:this.state.password
        }
        loginlms.loginlms(data).then((data)=>{
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        })
    }

    
    render() {
        return (
            <div className='login'>
                <div className="img-container"><img className='img1'/></div>
                <div className='inputs'>
                    <img className='l1'/><br/>
                    <span className='hdr1'>Welcome back!</span><br/>
                    <span className='hdr2'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed <br/>diam nonumyundefined</span><br/><br/><br/>
                    <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e)=>{this.setState({username:e.target.value})}}/><br/><br/>
                    <TextField  type='password' id="outlined-basic1" label="Password" variant="outlined" onChange={(e)=>{this.setState({password:e.target.value})}}/><br/>
                    <img className='eye1' onClick={this.showpass}/>
                    <span className='frgt'>Forgot Password?</span><br/><br/>
                    <button onClick={this.handlelogin}>Login</button>
                </div>
            </div>
        )
    }
}
