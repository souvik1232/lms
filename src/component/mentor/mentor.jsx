import React, { Component, Suspense } from 'react'
import { Link } from 'react-router-dom'
import {
    createMuiTheme, StylesProvider,
} from '@material-ui/core/styles';
import './mentor.scss'
import { connect } from 'react-redux'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Popper from '@material-ui/core/Popper';
import Dialog from '@material-ui/core/Dialog';
import LMS from '../../service/lmsservice'
import Addmentor from '../addmentor/addmentor';
import CircularProgress from '@material-ui/core/CircularProgress';
import Mencard from "../Card/mentor-card";
import PlaceHolder from '../placeholder/placeholder'
import SnackBar from '../snackbar/snackbar'
import { mentordata } from '../../action/action';

const lms = new LMS();



class mentor extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false,
            mentorarray: [],
            open: false,
            course: '',
            anchorEl: null,
            loaded: true,
            errorpage: false,
            snackbaropen:false,
            snackbarmsg:'',
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

    snackbaropen = ()=>{
        this.setState({snackbaropen:true})
        setTimeout(()=>{
            this.setState({snackbaropen:false})
        },3000)
    }
    handleClose = () => {
        this.setState({ open: false })
    };

    handleMentor = () => {
        console.log('errorpage', this.state.errorpage);
        console.log(this.state.loaded);
        console.log();
        lms.getmentordetails(localStorage.getItem('token')).then((data) => {
            console.log(data.data.response);
            this.setState({
                mentorarray: data.data.response,
                loaded: false,
                errorpage: true,

            })
            console.log('loaded', this.state.loaded);
            console.log('errorpage', this.state.errorpage);
        }).catch((err) => {
            this.snackbaropen();
            this.setState({
                loaded: false,
                snackbarmsg: 'Error'
            })
            console.log('Errorr--->', err);
            console.log('errorpage', this.state.errorpage);
        })

    }
    store = (event) => {
        console.log(event.currentTarget.id);
        localStorage.setItem('mentor', this.state.mentorarray[event.currentTarget.id].mentor);
        localStorage.setItem('id', this.state.mentorarray[event.currentTarget.id].mid);
        // this.props.mendata(this.state.mentorarray[event.currentTarget.id]);
    }
    handleClick = (event) => {
        this.setState({
            anchorEl: (this.state.anchorEl ? null : event.currentTarget)
        })
    };



    render() {
        return (
            <>
                <div className='details'>
                    <div className='lac'>
                        <div className='t1'>MENTOR DETAILS</div>
                        <Button className='buto1' onClick={(e) => this.handleClickOpen(e)}>Add Mentor</Button>
                    </div>
                    {!this.state.loaded ? this.state.errorpage ? <div className='li'>{this.state.mentorarray.map((data, index) => (
                        <Mencard data={data}
                            key={index}
                            index={index}
                            handle={this.handleClick}
                            store={this.store} />
                    ))}</div> : <div className='li'><PlaceHolder reload={this.handleMentor} /></div>
                        : <div className='li'><div className='progress'><CircularProgress /></div></div>}
                    <div>
                        <Popper id='simple-popper' open={Boolean(this.state.anchorEl)} anchorEl={this.state.anchorEl}>
                            <div className='paper'><span className='tool1'>Edit</span><br />
                                <span className='tool2'>Delete</span></div>
                        </Popper>
                    </div>
                </div>
                <StylesProvider injectFirst>
                    <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.open} >
                        <Addmentor close={this.handleClose}
                            refresh={this.handleMentor} />
                    </Dialog>
                </StylesProvider>

                <SnackBar 
                open={this.state.snackbaropen}
                message={this.state.snackbarmsg}
                />
            </>
        )
    }
}
const mapDispatchToProprs = {
    mendata: mentordata,
};

export default mentor;
