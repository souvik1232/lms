import React, { Component,createRef } from 'react'
import { Redirect } from 'react-router-dom'
import {
    ThemeProvider,
    createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './course.scss'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import Dialog from '@material-ui/core/Dialog';


export default class course extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem('token')
        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }
        this.state = {
            show: false,
            open: false,
            loggedIn
        }

    }

    theme = createMuiTheme({
        palette: {
            primary: {
                main: '#E6EBEE',
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
                    <Button className='buto1' onClick={(e) => this.handleClickOpen(e)}>Add Course</Button>
                    <div className='t1'>COURSE DETAILS</div>

                    <Card className='card-course'>
                        <Card.Body>
                            <div className='card-head1'>Course Title <img className='dot1' alt='' ref={this.target} onClick={() => this.setState({ show: !this.state.show })} /></div><br /><br />

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
                            <TextField id="outlined-basic2" size='small' label="Course ID" variant="outlined" onChange={(e) => { this.setState({ username: e.target.value }) }} /><br /><br />
                            <TextField id="outlined-basic2" size='small' label="Course Name" variant="outlined" onChange={(e) => { this.setState({ username: e.target.value }) }} /><br /><br />
                            <div className='in-div'>
                            <TextField id="outlined-basic3" size='small' label="Price" variant="outlined" onChange={(e) => { this.setState({ username: e.target.value }) }} /><br /><br />
                            <TextField id="outlined-basic3" size='small' label="Duration" variant="outlined" onChange={(e) => { this.setState({ username: e.target.value }) }} /><br /><br />
                            </div><br/>
                            <TextField type='text' size='small' id="outlined-basic4" label="Description" variant="outlined" onChange={(e) => { this.setState({ password: e.target.value }) }} /><br />
                        </ThemeProvider></div><br /><br />
                        <div className='but-container'><button className='bu1' onClick={(e) => this.handleClickOpen(e)}>Cancel</button><button className='bu2'>Add</button></div>
                    </div>
                </Dialog>
            </div>
        )
    }
}
