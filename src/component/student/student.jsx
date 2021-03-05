import React, { Component, createRef } from 'react'
import { Redirect } from 'react-router-dom'
import Button from "react-bootstrap/Button";
import {
    ThemeProvider,
    createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Dialog from '@material-ui/core/Dialog';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import './student.scss'


export default class student extends Component {
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
                    <Button className='buto1' onClick={(e) => this.handleClickOpen(e)}>Add Student</Button>
                    <div className='t1'>STUDENT DETAILS</div>

                    <TableContainer >
                        <Table className aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">Student ID</TableCell>
                                    <TableCell align="right">Student ID</TableCell>
                                    <TableCell align="right">Name</TableCell>
                                    <TableCell align="right">Email ID</TableCell>
                                    <TableCell align="right">Mobile No.</TableCell>
                                    <TableCell align="right">Course</TableCell>
                                    <TableCell align="right">Mentor</TableCell>
                                    <TableCell align="right">Score</TableCell>
                                    <TableCell align="right">Week</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                
                                {/* {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                        <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                        <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                        <StyledTableCell align="right">{row.protein}</StyledTableCell>
                                    </StyledTableRow>
                                ))} */}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.open} >
                        <div className='dig-container'>
                            <div className='tip'>Add Mentor</div>
                            <div><ThemeProvider theme={this.theme}>
                                <TextField id="outlined-basic2" size='small' label="Student ID" variant="outlined" onChange={(e) => { this.setState({ username: e.target.value }) }} /><br /><br />
                                <TextField id="outlined-basic2" size='small' label="Name" variant="outlined" onChange={(e) => { this.setState({ username: e.target.value }) }} /><br /><br />
                                <TextField id="outlined-basic2" size='small' label="Email Id" variant="outlined" onChange={(e) => { this.setState({ username: e.target.value }) }} /><br /><br />
                                <TextField id="outlined-basic2" size='small' label="Mobile Number" variant="outlined" onChange={(e) => { this.setState({ username: e.target.value }) }} /><br /><br />
                                {/* <TextField type='text' size='small' id="outlined-basic2" label="Course" variant="outlined" onChange={(e) => { this.setState({ password: e.target.value }) }} /><br /><br/> */}
                                {/* <TextField type='text' size='small' id="outlined-basic2" label="Mentor" variant="outlined" onChange={(e) => { this.setState({ password: e.target.value }) }} /><br /> */}
                                <FormControl variant="outlined"  >
                                    <InputLabel htmlFor="outlined-age-native-simple">Course</InputLabel>
                                    <Select
                                        id="outlined-basic-drop"
                                        native
                                        value={this.state.course}
                                        onChange={this.handleChange}
                                        label="Course"
                                    >
                                        <option aria-label="None" value="" />
                                        <option value={10}>Java FullStack</option>
                                        <option value={20}>dasdad</option>
                                        <option value={30}>Thsaddadsirty</option>
                                    </Select>
                                </FormControl><br /><br />
                                <FormControl variant="outlined"  >
                                    <InputLabel htmlFor="outlined-age-native-simple">Mentor</InputLabel>
                                    <Select
                                        id="outlined-basic-drop"
                                        native
                                        value={this.state.course}
                                        onChange={this.handleChange}
                                        label="Course"
                                    >
                                        <option aria-label="None" value="" />
                                        <option value={10}>Mentor 1</option>
                                        <option value={20}>dasdad</option>
                                        <option value={30}>Thsaddadsirty</option>
                                    </Select>
                                </FormControl>
                            </ThemeProvider></div><br /><br />
                            <div className='but-container'><button className='bu1' onClick={(e) => this.handleClickOpen(e)}>Cancel</button><button className='bu2'>Add</button></div>
                        </div>
                    </Dialog>
                </div>
            </div>
        )
    }
}
