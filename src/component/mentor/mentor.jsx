import React, { Component, createRef } from 'react'
import { Redirect, Link } from 'react-router-dom'
import {
    ThemeProvider,
    createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './mentor.scss'
import { connect } from 'react-redux'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Popper from '@material-ui/core/Popper';
import Dialog from '@material-ui/core/Dialog';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import LMS from '../../service/lmsservice'
const lms = new LMS();



class mentor extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem('token')

        this.state = {
            mentorid: '',
            name: '',
            email: '',
            mobile: '',
            mentor: [],
            show: false,
            mentorarray: [],
            open: false,
            course: '',
            anchorEl: null,
        }

    }
    componentDidMount() {
        this.handleMentor()
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


    handleChange = (event) => {
        this.setState({
            mentor: event.target.value
        })
    }


    handleClose = () => {
        this.setState({ open: false })
    };

    handleMentor = () => {
        console.log();
        lms.getmentordetails(localStorage.getItem('token')).then((data) => {
            console.log(data.data.response);
            this.setState({ mentorarray: data.data.response })
        }).catch((err) => {
            console.log(err);
        })

    }
    addmentor = () => {
        let data = {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile,
            mentor: { course: [this.state.mentor] }
        }
        console.log(data);
        lms.addmentor(this.props.token, data).then(res => {
            console.log(res);
            this.handleMentor()
        }).catch(err => {
            console.log(err);
        })
    }
    store = (data) => {
        localStorage.setItem('name', data.mentor)
        localStorage.setItem('id', data.mid)
        localStorage.setItem('course', data.course)
    }
    handleClick = (event) => {
        console.log(event.currentTarget);
        this.setState({
            anchorEl: (this.state.anchorEl ? null : event.currentTarget)
        })
        let open1 = Boolean(this.state.anchorEl);
        let id = open1 ? 'simple-popper' : undefined;
        let target = createRef(null)
    };



    render() {
        return (
            // <di<.v>
            <>
                <div className='details'>
                    <div className='lac'>
                        <div className='t1'>MENTOR DETAILS</div>
                        <Button className='buto1' onClick={(e) => this.handleClickOpen(e)}>Add Mentor</Button>
                    </div>

                    <div className='li'>{this.state.mentorarray.map((data) => (
                        <Card className='card-mentor' onClick={this.store(data)}>

                            <Card.Body >
                                <Card.Title><div className='card-head'> <img className='mentor-img' alt="img" /> <div>{data.mentor} <br /> <span className='mid'>{data.mid} <br /> Poonam@bridgelabz.com </span></div>  <img className='dot1' aria-describedby={this.id} alt='img' onClick={this.handleClick} /><br />
                                </div></Card.Title>
                                <Link className='an' to={`${this.props.match.path}/details`}>
                                    <Card.Text className='text'>
                                        <div className='line1'></div><br />
                                        <div className='mid'>Course Name <span className='astudent'>No.of students</span></div>
                                        <div className='card-object'>
                                            {data.course.map((dta) => (<div className='courselist'>{dta.course_name}<span className='scount'>{dta.student_count}</span>  </div>))}
                            asbdka <br />dbajdba <br />jhadbhjabhdj <br />nwbjebjf <br />bejbwew <br />jhwevhjdv <br />
                                        </div></Card.Text>
                                </Link>

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
                            <TextField id="outlined-basic2" size='small' label="Mentor ID" variant="outlined" onChange={(e) => { this.setState({ mentorid: e.target.value }) }} /><br /><br />
                            <TextField id="outlined-basic2" size='small' label="Name" variant="outlined" onChange={(e) => { this.setState({ name: e.target.value }) }} /><br /><br />
                            <TextField id="outlined-basic2" size='small' label="Email Id" variant="outlined" onChange={(e) => { this.setState({ email: e.target.value }) }} /><br /><br />
                            <TextField id="outlined-basic2" size='small' label="Mobile Number" variant="outlined" onChange={(e) => { this.setState({ mobile: e.target.value }) }} /><br /><br />
                            {/* <TextField onClick={this.handleClick} type='text' size='small' id="outlined-basic2" label="Course" variant="outlined" onChange={(e) => { this.setState({ password: e.target.value }) }} /><br /> */}
                            <FormControl variant="outlined"  >
                                <InputLabel htmlFor="outlined-age-native-simple">Course</InputLabel>
                                <Select
                                    id="outlined-basic-drop"
                                    native
                                    value={this.state.mentor}
                                    onChange={this.handleChange}
                                    label="Course"
                                >
                                    <option aria-label="None" value="" />
                                    <option value={1}>Python</option>
                                    <option value={2}>Django</option>
                                    <option value={3}>Java</option>
                                    <option value={4}>React</option>
                                    <option value={5}>Angular</option>
                                    <option value={6}>JavaScript</option>
                                </Select>
                            </FormControl>
                        </ThemeProvider></div><br /><br />
                        <div className='but-container'><button className='bu1' onClick={(e) => this.handleClickOpen(e)}>Cancel</button><button className='bu2' onClick={this.addmentor}>Add</button></div>
                    </div>
                </Dialog>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        token: state.state,
    };
};

export default connect(mapStateToProps, undefined)(mentor);
