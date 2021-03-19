import React, { Component, createRef } from 'react'
import {Link } from 'react-router-dom'
import Button from "react-bootstrap/Button";
import {
    createMuiTheme,
} from '@material-ui/core/styles';
import { connect } from 'react-redux'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Dialog from '@material-ui/core/Dialog';
import './student.scss'
import Addstudent from '../addstudent/addstudent'
import {studentdata} from '../../action/action'
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
            openmod: false,
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
    handleClickOpenMod = (e) => {
        // e.stopPropagation();
        this.setState({
            openmod: !this.state.openmod,
        })
    };


    handleClose = () => {
        this.setState({ open: false })
    };
    handleCloseMod = () => {
        this.setState({ openmod: false })
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
    store = (event) => {
        console.log(event.currentTarget.id);
        console.log(this.state.studentarr[event.currentTarget.id]);
        // localStorage.setItem('mentor', this.state.mentorarray[event.currentTarget.id].mentor);
        // localStorage.setItem('id', this.state.mentorarray[event.currentTarget.id].mid);
        this.props.studata(this.state.studentarr[event.currentTarget.id]);
    }
    target = createRef(null)
    render() {
        return (
            <div className='detailscontainer12'>
                <div className='details2'>
                    <div className='lac'>
                        <div className='t1'>STUDENT DETAILS</div>
                        <div className='t1-holder'>
                            <img className='upload' alt="" onClick={(e) => this.handleClickOpenMod(e)} />
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
                                    {this.state.studentarr.map((data , index) => (
                                       <TableRow className='tbr' key={data.id}>
                                           <Link className='an' to={`/dashboard/studentdetails`}>  <TableCell id={index} align='center' onClick={(e) => this.store(e)} >{data.sid}</TableCell></Link>
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
                        <Addstudent close={this.handleClose}/>
                    </Dialog>
                    <Dialog onClose={this.handleCloseMod} aria-labelledby="customized-dialog-title" open={this.state.openmod} >
                        <div className='md12'>
                            <div className='hd12'>
                                <div className='cross' onClick={(e) => this.handleClickOpenMod(e)}>X</div>
                                <div className='titl'> Upload Engineers Data</div>
                            </div>
                            <br /><br /><br />
                            <div className='bd12'>
                                <div >
                                    <div className='bd-1'>Choose file</div>
                                    <div className='frmt' >File format:XLSX</div>
                                </div>
                                <div className='bd-2'>No file choosen</div>
                            </div>
                            <br/>
                            <div className='ft12'>
                                <button className='upload12'><img className='cloud' alt=""/>  Upload</button>
                            </div>
                        </div> 
                    </Dialog>
                </div>
            </div >
        )
    }
}
const mapDispatchToProprs =  {
    studata:studentdata,
};
export default connect(null, mapDispatchToProprs)(student)
