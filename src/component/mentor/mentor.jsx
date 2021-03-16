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
import Addmentor from '../addmentor/addmentor';
const lms = new LMS();



class mentor extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem('token')

        this.state = {
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
        console.log('hey');
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
    store = (event) => {
        console.log(event.currentTarget.id);
        localStorage.setItem('mentor', this.state.mentorarray[event.currentTarget.id].mentor);
        localStorage.setItem('id', this.state.mentorarray[event.currentTarget.id].mid);
    }
    handleClick = (event) => {
        this.setState({
            anchorEl: (this.state.anchorEl ? null : event.currentTarget)
        })
        let open1 = Boolean(this.state.anchorEl);
        let id = open1 ? 'simple-popper' : undefined;
        let target = createRef(null)
    };



    render() {
        return (
            <>
                <div className='details'>
                    <div className='lac'>
                        <div className='t1'>MENTOR DETAILS</div>
                        <Button className='buto1' onClick={(e) => this.handleClickOpen(e)}>Add Mentor</Button>
                    </div>
                    <div className='li'>{this.state.mentorarray.map((data, index) => (
                        <Card className='card-mentor' id={index} onClick={(e) => this.store(e)}>

                            <Card.Body >
                                <Card.Title><div className='card-head'> <img className='mentor-img' alt="img" /> <div>{data.mentor} <br /> <span className='mid'>{data.mid} <br /> Poonam@bridgelabz.com </span></div>  <img className='dot1' aria-describedby={this.id} alt='img' onClick={this.handleClick} /><br />
                                </div></Card.Title>
                                <Link className='an' to={`/dashboard/details`}>
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
                    <Addmentor close={this.handleClose}
                        refresh={this.handleMentor} />
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
