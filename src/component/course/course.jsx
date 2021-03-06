import React, { Component } from 'react'
import {
    ThemeProvider,
    createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './course.scss'
import Card from "react-bootstrap/Card";
import {connect} from 'react-redux'
import Button from "react-bootstrap/Button";
import Popper from '@material-ui/core/Popper';
import Dialog from '@material-ui/core/Dialog';
import LMS from '../../service/lmsservice';
const lms = new LMS();

class course extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courseid:'',
            coursename:'',
            duration:'',
            description:'',
            courseprice:'',
            show: false,
            open: false,
            coursearray: [],
            anchorEl: null,
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
        lms.getcoursedetails(localStorage.getItem('token')).then((data) => {
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

    deleteCourse = () =>{
        
    }
    handleClick = (event) => {
        console.log(event.currentTarget);
        this.setState({
            anchorEl :(this.state.anchorEl ? null : event.currentTarget)
        })
      };
    render() {
        // if (this.state.loggedIn === false) {
        //     return <Redirect to='/login' />
        // }
        return (
            <div>

                <div className='details'>
                <div className='lac'>
                <div className='t1'>COURSE DETAILS</div>
                <Button className='buto1' onClick={(e) => this.handleClickOpen(e)}>Add Course</Button>
                    </div>
                    
                    
                    <div className='li1'>{this.state.coursearray.map((data) => (<Card className='card-course'>
                        <Card.Body>
                            <div className='card-head1'> <div className='yui'>{data.course_name}<img className='dot1' alt='' onClick={this.handleClick} /></div>   <span className='crs-id'>{data.cid}</span> </div>
                            <div className='price'>₹ {data.course_price} / {data.duration_weeks} <span className='mnth'> months</span> </div>
                            <div className='txt-crs'><span >{data.description}</span></div>
                        </Card.Body>

                    </Card>
                    ))}</div>
                    

                    <div>
                        <Popper id='simple-popper' open={Boolean(this.state.anchorEl)} anchorEl={this.state.anchorEl}>
                            <div className='paper'><span className='tool1'>Edit</span><br />
                                        <span className='tool2'>Delete</span></div>
                        </Popper>
                    </div>

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
