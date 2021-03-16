import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import {
    ThemeProvider,
    createMuiTheme,
} from '@material-ui/core/styles';
import LMS from '../../service/lmsservice'
const lms = new LMS();

export default class addmentor extends Component {
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
        lms.addmentor(localStorage.getItem('token'), data).then(res => {
            console.log(res);
            this.props.refresh();
        }).catch(err => {
            console.log(err);
        })
    }
    render() {
        return (
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
                        <div className='but-container'><button className='bu1' onClick={this.props.close}>Cancel</button><button className='bu2' onClick={this.addmentor}>Add</button></div>
                    </div>
        )
    }
}
