import React, { Component, createRef } from 'react'
import { Redirect } from 'react-router-dom'
import {
    ThemeProvider,
    createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './course.scss'
import Card from "react-bootstrap/Card";
import {connect} from 'react-redux'
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import Dialog from '@material-ui/core/Dialog';
import LMS from '../../service/lmsservice';
const lms = new LMS();

class course extends Component {
    constructor(props) {
        super(props)
        const token = this.props.token
        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }
        this.state = {
            courseid:'',
            coursename:'',
            duration:'',
            description:'',
            courseprice:'',
            show: false,
            open: false,
            coursearray: [],
            loggedIn
        }

    }
    componentDidMount() {
        this.handleCourse()
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

    handleCourse = () => {
        lms.getcoursedetails(this.props.token).then((data) => {
            console.log(data.data.response);
            this.setState({ coursearray: data.data.response })
        }).catch((err) => {
            console.log(err);
        })
    }


    addCourse = ()=>{
        let data = {
            course_name:this.state.coursename,
            duration_weeks:this.state.duration,
            description:this.state.description,
            course_price:this.state.courseprice
        }
        lms.addcourse(this.props.token,data).then((res)=>{
            console.log(res);
            this.handleCourse()
        }).catch((err)=>{
            console.log(err);
        })
    }
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
                    {this.state.coursearray.map((data) => (<Card className='card-course'>
                        <Card.Body>
                            <div className='card-head1'>{data.course_name}<img className='dot1' alt='' ref={this.target} onClick={() => this.setState({ show: !this.state.show })} /> <br/> <span className='crs-id'>{data.cid}</span> </div>
                            <div className='price'>₹ {data.course_price} / {data.duration_weeks} <span className='mnth'> months</span> </div>
                            <div className='txt-crs'><span >{data.description}</span></div>
                        </Card.Body>

                    </Card>
                    ))}
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

                </div>



                <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.open} >
                    <div className='dig-container'>
                        <div className='tip'>Add Mentor</div>
                        <div><ThemeProvider theme={this.theme}>
                            <TextField id="outlined-basic2" size='small' label="Course ID" variant="outlined" onChange={(e) => { this.setState({ courseid: e.target.value }) }} /><br /><br />
                            <TextField id="outlined-basic2" size='small' label="Course Name" variant="outlined" onChange={(e) => { this.setState({ coursename: e.target.value }) }} /><br /><br />
                            <div className='in-div'>
                                <TextField id="outlined-basic3" size='small' label="Price" variant="outlined" onChange={(e) => { this.setState({ courseprice: e.target.value }) }} /><br /><br />
                                <TextField id="outlined-basic3" size='small' label="Duration" variant="outlined" onChange={(e) => { this.setState({ duration: e.target.value }) }} /><br /><br />
                            </div><br />
                            <TextField type='text' size='small' id="outlined-basic4" label="Description" variant="outlined" onChange={(e) => { this.setState({ description: e.target.value }) }} /><br />
                        </ThemeProvider></div><br /><br />
                        <div className='but-container'><button className='bu1' onClick={(e) => this.handleClickOpen(e)}>Cancel</button><button className='bu2' onClick={this.addCourse}>Add</button></div>
                    </div>
                </Dialog>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      token: state.state,
    };
  };

  export default connect(mapStateToProps,undefined) (course);
