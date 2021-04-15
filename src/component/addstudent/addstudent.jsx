import React, { Component } from 'react'
import {
    ThemeProvider,
    createMuiTheme,
} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { isemailValid, isidValid, ismobileValid, isnameValid } from '../utility/utility';
import LMS from '../../service/lmsservice'
const lms = new LMS()

export default class addstudent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            studentid:'',
            studentiderror:'',
            studentidflag:false,
            name: '',
            nameerror: '',
            nameflag: false,
            email: '',
            emailerror: '',
            emailflag: false,
            mobile: '',
            mobileerror: '',
            mobileflag: false,
            studentarr: [],
            show: false,
            open: false,
            openmod: false,
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


    handleChange = (event) => {
        this.setState({
            mentor: event.target.value
        })
    }


    handleClose = () => {
        this.setState({ open: false })
    };

    formValidation = () => {
        const studentid = this.state.studentid;
        const name = this.state.name;
        const email = this.state.email;
        const mobile = this.state.mobile;
        const mentor = this.state.mentor;
        let isValid = true;
        let studentiderror= '';
        let mentoriderror = '';
        let nameerror = '';
        let emailerror = '';
        let mobileerror = '';
        let mentorerror = '';
        if (!isidValid(studentid)) {
            studentiderror = 'Not Valid';
            isValid = false;
            this.setState({ studentidflag: true })
        } else {
            this.setState({ studentidflag: false })
        }
        if (!isnameValid(name)) {
            nameerror = 'Not Valid';
            isValid = false;
            this.setState({ nameflag: true })
        } else {
            this.setState({ nameflag: false })
        }
        if (!isemailValid(email)) {
            emailerror = 'Not Valid';
            isValid = false;
            this.setState({ emailflag: true })
        } else {
            this.setState({ emailflag: false })
        }
        if (!ismobileValid(mobile)) {
            mobileerror = 'Not Valid';
            isValid = false;
            this.setState({ mobileflag: true })
        } else {
            this.setState({ mobileflag: false })
        }
        

        this.setState({ studentiderror, nameerror, emailerror, mobileerror });
        return isValid;
    }
    addstudent = ()=>{
        const isValid = this.formValidation();
        console.log(isValid);
    }
    render() {
        return (
            <div className='dig-container'>
                <div className='tip'>Add Student</div>
                <div><ThemeProvider theme={this.theme}>
                    <div className='inpt1'><TextField
                        id="outlined-basic2"
                        size='small'
                        label="Student ID"
                        variant="outlined"
                        error={this.state.studentidflag}
                        helperText={this.state.studentiderror}
                        onChange={(e) => { this.setState({ studentid: e.target.value }) }} />
                    </div>
                    <br /><br /><br /><br/>
                    <div className='inpt1'><TextField
                        id="outlined-basic2"
                        size='small'
                        label="Name"
                        variant="outlined"
                        error={this.state.nameflag}
                        helperText={this.state.nameerror}
                        onChange={(e) => { this.setState({ name: e.target.value }) }} />
                    </div>
                    <br /><br /><br /><br/>
                    <div className='inpt1'><TextField
                        id="outlined-basic2"
                        size='small'
                        label="Email Id"
                        variant="outlined"
                        error={this.state.emailflag}
                        helperText={this.state.emailerror}
                        onChange={(e) => { this.setState({ email: e.target.value }) }} />
                    </div>
                    <br /><br /><br /><br/>
                    <div className='inpt1'><TextField
                        id="outlined-basic2"
                        size='small'
                        label="Mobile Number"
                        variant="outlined"
                        error={this.state.mobileflag}
                        helperText={this.state.mobileerror}
                        onChange={(e) => { this.setState({ mobile: e.target.value }) }} />
                    </div>
                    <br /><br /><br /><br/>
                    <FormControl variant="outlined"  >
                        <InputLabel className='select__label' htmlFor="outlined-age-native-simple">Course</InputLabel>
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
                    </FormControl><br /> <br/>
                    <FormControl variant="outlined"  >
                        <InputLabel className='select__label' htmlFor="outlined-age-native-simple">Mentor</InputLabel>
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
                <div className='but-container'><button className='bu1' onClick={this.props.close}>Cancel</button><button className='bu2' onClick={this.addstudent}>Add</button></div>
            </div>
        )
    }
}
