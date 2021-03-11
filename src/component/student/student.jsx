import React, { Component, createRef } from 'react'
import { Redirect } from 'react-router-dom'
import Button from "react-bootstrap/Button";
import {
    ThemeProvider,
    createMuiTheme,
} from '@material-ui/core/styles';
import { connect } from 'react-redux'
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
import LMS from '../../service/lmsservice'
const lms = new LMS()


class student extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: '',
            email: '',
            mobile: '',
            studentarr: [],
            show: false,
            open: false,
        }

    }
    componentDidMount() {
        this.getstudent()
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

    getstudent = () => {
        lms.getstudentdetails(localStorage.getItem('token')).then((res) => {
            console.log(res.data.response);
            this.setState({ studentarr: res.data.response })
        }).catch((err) => {
            console.log(err);
        })
    }
    addstudent = () => {

    }
    target = createRef(null)
    render() {
        // if (this.state.loggedIn === false) {
        //     return <Redirect to='/login' />
        // }
        return (
            <div>
                <div className='details'>
                    <div className='lac'>
                        <div className='t1'>STUDENT DETAILS</div>
                        <div className='t1-holder'>
                            <img className='upload' alt="" />
                            <Button className='buto1' onClick={(e) => this.handleClickOpen(e)}>Add Student</Button>
                        </div>
                    </div><br /><br />
                    <div className='tbl-cnt'>
                        <TableContainer className='tcont'>
                            <Table className='main-table' aria-label="customized table">
                                <TableHead className='t-head'>
                                    <TableRow>
                                        <TableCell id='th' align="center">Student ID</TableCell>
                                        <TableCell id='th' align="center">Name</TableCell>
                                        <TableCell id='th' align="center">Email ID</TableCell>
                                        <TableCell id='th' align="center">Mobile No.</TableCell>
                                        <TableCell id='th' align="center">Course</TableCell>
                                        <TableCell id='th' align="center">Mentor</TableCell>
                                        <TableCell id='th' align="center">Score</TableCell>
                                        <TableCell id='th' align="center">Week</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody className='t-body'>
                                    {this.state.studentarr.map((data) => (
                                        <TableRow key={data.id}>
                                            <TableCell id='tb' align='center' >{data.sid}</TableCell>
                                            <TableCell id='tb' align="center">{data.student}</TableCell>
                                            <TableCell id='tb' align="center">{data.email}</TableCell>
                                            <TableCell id='tb' align="center">{data.mobile}</TableCell>
                                            <TableCell id='tb' align="center">{data.course}</TableCell>
                                            <TableCell id='tb' align="center">{data.mentor}</TableCell>
                                            <TableCell id='tb' align="center">{data.score}</TableCell>
                                            <TableCell id='tb' align="center">{data.week}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.open} >
                        <div className='dig-container'>
                            <div className='tip'>Add Mentor</div>
                            <div><ThemeProvider theme={this.theme}>
                                <TextField id="outlined-basic2" size='small' label="Student ID" variant="outlined" onChange={(e) => { this.setState({ username: e.target.value }) }} /><br /><br />
                                <TextField id="outlined-basic2" size='small' label="Name" variant="outlined" onChange={(e) => { this.setState({ name: e.target.value }) }} /><br /><br />
                                <TextField id="outlined-basic2" size='small' label="Email Id" variant="outlined" onChange={(e) => { this.setState({ email: e.target.value }) }} /><br /><br />
                                <TextField id="outlined-basic2" size='small' label="Mobile Number" variant="outlined" onChange={(e) => { this.setState({ mobile: e.target.value }) }} /><br /><br />
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
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        token: state.state,
    };
};
export default connect(mapStateToProps, undefined)(student)
