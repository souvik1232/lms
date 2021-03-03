import React, { Component, createRef } from 'react'
import { Redirect } from 'react-router-dom'
import {
    ThemeProvider,
    createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './mentor.scss'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import Dialog from '@material-ui/core/Dialog';

export default class mentor extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem('token')
        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }
        this.state = {
            show: false,
            open:false,
            loggedIn
        }

    }

    theme = createMuiTheme({
        palette: {
            primary: {
                main: '#008CFF',
            }
        },
    });


    handleClickOpen = (e) => {
        // e.stopPropagation();
        this.setState({
            open: !this.state.open,
        })
    };


    handleClose = () => {
        this.setState({ open: false })
    };
    target = createRef(null)
    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to='/login' />
        }
        return (
            <div>

                <div className='details'>
                    <Button className='buto1' onClick={(e) => this.handleClickOpen(e)}>Add Mentor</Button>
                    <div className='t1'>MENTOR DETAILS</div>

                    <Card className='card-mentor'>
                        <Card.Body>
                            <div className='card-head'>Mentor Name <img className='dot1' alt='' ref={this.target} onClick={() => this.setState({ show: !this.state.show })} /></div><br /><br />

                        </Card.Body>
                    </Card>
                </div>
                <Overlay target={this.target.current} show={this.state.show} placement="bottom">
                    {(props) => (
                        <Tooltip id="overlay-example" {...props}>
                            <div className='tooltip'>
                                <span className='tool1'>Edit</span><br />
                                <span className='tool2'>Delete</span>
                            </div>
                        </Tooltip>
                    )}
                </Overlay>


                <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.open} >
                    <div className='dig-container'>
                        <div className='tip'>Add Mentor</div>
                        <div><ThemeProvider theme={this.theme}>
                        <TextField id="outlined-basic2" size='small' label="Mentor ID" variant="outlined" onChange={(e) => { this.setState({ username: e.target.value }) }} /><br /><br />
                        <TextField id="outlined-basic2" size='small' label="Name" variant="outlined" onChange={(e) => { this.setState({ username: e.target.value }) }} /><br /><br />
                        <TextField id="outlined-basic2" size='small' label="Email Id" variant="outlined" onChange={(e) => { this.setState({ username: e.target.value }) }} /><br /><br />
                        <TextField id="outlined-basic2" size='small' label="Mobile Number" variant="outlined" onChange={(e) => { this.setState({ username: e.target.value }) }} /><br /><br />
                        <TextField type='text' size='small' id="outlined-basic2" label="Course" variant="outlined" onChange={(e) => { this.setState({ password: e.target.value }) }} /><br />
                    </ThemeProvider></div>
                    </div>
                    </Dialog>
            </div>
        )
    }
}
