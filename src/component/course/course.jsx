import React, { Component } from 'react'
import {
    ThemeProvider,
    createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './course.scss'
import Button from "react-bootstrap/Button";
import Popper from '@material-ui/core/Popper';
import Dialog from '@material-ui/core/Dialog';
import LMS from '../../service/lmsservice';
import Coursecard from '../Card/course-card'
import PlaceHolder from '../placeholder/placeholder'
import SnackBar from '../snackbar/snackbar'
import CircularProgress from '@material-ui/core/CircularProgress';
import { isidValid, isnameValid } from '../utility/utility';
const lms = new LMS();

class course extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courseid: '',
            courseiderror: '',
            courseidflag: false,
            coursename: '',
            coursenameerror: '',
            coursenameflag: false,
            duration: '',
            description: '',
            courseprice: '',
            show: false,
            open: false,
            coursearray: [],
            anchorEl: null,
            pop_id: '',
            crs_data: '',
            crs_id: '',
            loader: true,
            errorpage: false,
            snackbaropen: false,
            snackbarmsg: '',
        }

    }
    formvalidation = () => {
        const courseid = this.state.courseid;
        const coursename = this.state.coursename;
        let isValid = true;
        let courseiderror = '';
        let coursenameerror = '';
        if (!isidValid(courseid)) {
            courseiderror = 'Not Valid';
            isValid = false;
            this.setState({ courseidflag: true })
        } else {
            this.setState({ mentoridflag: false })
        }
        if (!isnameValid(coursename)) {
            coursenameerror = 'Not Valid';
            isValid = false;
            this.setState({ coursenameflag: true })
        } else {
            this.setState({ coursenameflag: false })
        }
        this.setState({ courseiderror, coursenameerror });
        return isValid;
    }

    componentDidMount() {
        this.handleCourse()
    }

    theme = createMuiTheme({
        palette: {
            primary: {
                main: '#008CFF',
            }
        },
    });

    snackbaropen = () => {
        this.setState({ snackbaropen: true })
        setTimeout(() => {
            this.setState({ snackbaropen: false })
        }, 3000)
    }
    handleClickOpen = (e, state) => {
        if (state == true) {
            localStorage.setItem('ver', true)
        } else if (state == false) {
            localStorage.setItem('ver', false)
        }
        console.log(e.currentTarget);
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
            this.setState({
                coursearray: data.data.response,
                loader: false,
                errorpage: true,
            })
        }).catch((err) => {
            this.snackbaropen();
            this.setState({
                loader: false,
                snackbarmsg: 'Error'
            })
            console.log(err);
        })
    }


    addCourse = () => {
        const isValid = this.formvalidation();
        if (isValid) {
            let data = {
                course_name: this.state.coursename,
                duration_weeks: this.state.duration,
                description: this.state.description,
                course_price: this.state.courseprice
            }
            lms.addcourse(localStorage.getItem('token'), data).then((res) => {
                console.log(res);
                this.handleCourse()
            }).catch((err) => {
                console.log(err);
            })
        }
    }
    updateCourse = () => {
        const isValid = this.formvalidation();
        if (isValid) {
            let data = {
                course_name: this.state.coursename,
                duration_weeks: this.state.duration,
                description: this.state.description,
                course_price: this.state.courseprice
            }
            lms.updatecourse(localStorage.getItem('token'), data, this.state.crs_id).then((res) => {
                console.log(res);
                this.handleCourse()
            }).catch((err) => {
                console.log(err);
            })
        }
    }

    deleteCourse = () => {

    }
    handleClick = (event, data) => {
        console.log('data to be editted', data);
        localStorage.setItem('popid', event.currentTarget.id)
        this.setState({
            coursename: localStorage.getItem('ver') !== 'true' ? '' : data.course_name,
            courseid: data.cid,
            duration: data.duration_weeks,
            courseprice: data.course_price,
            description: data.description,
            crs_id: data.id
        })
        // console.log(this.state.coursearray[this.state.pop_id].cid);
        console.log(event.currentTarget.id);
        this.setState({
            anchorEl: (this.state.anchorEl ? null : event.currentTarget)
        })
    };
    render() {
        return (
            <div>
                <div></div>
                <div className='details'>
                    <div className='lac'>
                        <div className='t1'>COURSE DETAILS</div>
                        <Button className='buto1' onClick={(e) => this.handleClickOpen(e, false)}>Add Course</Button>
                    </div>
                    {!this.state.loader ? this.state.errorpage ?
                        <div className='li1'>{this.state.coursearray.map((data) => (
                            <Coursecard
                                data={data}
                                handle={this.handleClick} />
                        ))}</div> :
                        <div className='li'><PlaceHolder reload={this.handleCourse} /></div> :
                        <div className='li'><div className='progress'> <CircularProgress /></div></div>}


                    <div>
                        <Popper id='simple-popper' open={Boolean(this.state.anchorEl)} anchorEl={this.state.anchorEl}>
                            <div className='paper'><span className='tool1' onClick={(e) => this.handleClickOpen(e, true)}>Edit</span><br />
                                <span className='tool2'>Delete</span></div>
                        </Popper>
                    </div>

                </div>



                <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.open} >
                    <div className='dig-container'>
                        <div className='tip'>{localStorage.getItem('ver') !== 'true' ? 'Add Course' : 'Update Course'}</div>
                        <div><ThemeProvider theme={this.theme}>
                            <div className='crserr'>
                                <TextField
                                    id="outlined-basic2"
                                    size='small'
                                    label="Course ID"
                                    variant="outlined"
                                    value={this.state.courseid}
                                    error={this.state.courseidflag}
                                    helperText={this.state.courseiderror}
                                    onChange={(e) => { this.setState({ courseid: e.target.value }) }} /><br /><br />
                            </div>
                            <br /><br /><br /><br />
                            <div className='crserr'>
                                <TextField
                                    id="outlined-basic2"
                                    size='small'
                                    label="Course Name"
                                    variant="outlined"
                                    value={this.state.coursename}
                                    error={this.state.coursenameflag}
                                    helperText={this.state.coursenameerror}
                                    onChange={(e) => { this.setState({ coursename: e.target.value }) }} /><br /><br />
                            </div><br /><br /><br /><br />
                            <div className='in-div'>
                                <TextField
                                    id="outlined-basic3"
                                    size='small'
                                    label="Price"
                                    variant="outlined"
                                    value={this.state.courseprice}
                                    onChange={(e) => { this.setState({ courseprice: e.target.value }) }} /><br /><br />
                                <TextField
                                    id="outlined-basic3"
                                    size='small'
                                    label="Duration"
                                    variant="outlined"
                                    value={this.state.duration}
                                    onChange={(e) => { this.setState({ duration: e.target.value }) }} /><br /><br />
                            </div><br />
                            <TextField
                                type='text'
                                size='small'
                                id="outlined-basic4"
                                label="Description"
                                variant="outlined"
                                value={this.state.description}
                                onChange={(e) => { this.setState({ description: e.target.value }) }} /><br />
                        </ThemeProvider></div><br /><br />
                        <div className='but-container'><button className='bu1' onClick={(e) => this.handleClickOpen(e)}>Cancel</button><button className='bu2' onClick={localStorage.getItem('ver') !== 'true' ? this.addCourse : this.updateCourse}>{localStorage.getItem('ver') !== 'true' ? 'Add ' : 'Update'}</button></div>
                    </div>
                </Dialog>
                <SnackBar 
                open={this.state.snackbaropen}
                message={this.state.snackbarmsg}
                />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        token: state.state,
    };
};

export default course;
