import React, { Component } from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import {
    ThemeProvider,
    createMuiTheme,
    StylesProvider
} from '@material-ui/core/styles';
import LMS from '../../service/lmsservice'
import './addmentor.scss'
import { isemailValid, isidValid, ismobileValid, isnameValid } from '../utility/utility';
const lms = new LMS();

export default class addmentor extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mentorid: '',
            mentoriderror: '',
            mentoridflag: false,
            name: '',
            nameerror: '',
            nameflag: false,
            email: '',
            emailerror: '',
            emailflag: false,
            mobile: '',
            mobileerror: '',
            mobileflag: false,
            mentor: [],
            show: false,
            mentorarray: [],
            open: false,
            course: '',
            mentorerror: '',
            mentorflag: false,
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

    over = createMuiTheme({
        palette: {
            primary: {
                main: '#008CFF',
            }
        },
        overrides: {
            MuiInputLabel: {
                
            },
        },
    });


    handleClickOpen = (e) => {
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
        const mentorid = this.state.mentorid;
        const name = this.state.name;
        const email = this.state.email;
        const mobile = this.state.mobile;
        const mentor = this.state.mentor;
        let isValid = true;
        let mentoriderror = '';
        let nameerror = '';
        let emailerror = '';
        let mobileerror = '';
        let mentorerror = '';
        if (!isidValid(mentorid)) {
            mentoriderror = 'Not Valid';
            isValid = false;
            this.setState({ mentoridflag: true })
        } else {
            this.setState({ mentoridflag: false })
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
        if (mentor.length < 6) {
            mentorerror = 'Not Valid';
            isValid = false;
            this.setState({ mentorflag: true })
        } else {
            this.setState({ mentorflag: false })
        }

        this.setState({ mentoriderror, nameerror, emailerror, mobileerror });
        return isValid;
    }

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

        const isValid = this.formValidation();
        if (isValid) {
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

    }
    render() {
        return (
            <div className='dig-container'>
                <div className='tip'>Add Mentor</div>
                <div><ThemeProvider theme={this.theme}>
                    <div className='inpt1'><TextField
                        id="outlined-basic2"
                        size='small'
                        label="Mentor ID"
                        variant="outlined"
                        onChange={(e) => { this.setState({ mentorid: e.target.value }) }}
                        error={this.state.mentoridflag}
                        helperText={this.state.mentoriderror} /></div>

                    <br /><br /><br /><br/>
                    <div className='inpt1'><TextField
                        id="outlined-basic2"
                        size='small'
                        label="Name"
                        variant="outlined"
                        onChange={(e) => { this.setState({ name: e.target.value }) }}
                        error={this.state.nameflag}
                        helperText={this.state.nameerror} /></div>

                    <br /><br /><br /><br/>
                    <div className='inpt1'><TextField
                        id="outlined-basic2"
                        size='small'
                        label="Email Id"
                        variant="outlined"
                        onChange={(e) => { this.setState({ email: e.target.value }) }}
                        error={this.state.emailflag}
                        helperText={this.state.emailerror} /></div>

                    <br /><br /><br /><br/>
                    <div className='inpt1'><TextField
                        id="outlined-basic2"
                        size='small'
                        label="Mobile Number"
                        variant="outlined" onChange={(e) => { this.setState({ mobile: e.target.value }) }}
                        error={this.state.mobileflag}
                        helperText={this.state.mobileerror} /></div>
                </ThemeProvider>
                    <br /><br /><br/><br/>
                    <ThemeProvider theme={this.over}>
                    <StylesProvider injectFirst>
                        <FormControl variant="outlined" error={this.state.mentoridflag}>
                            <InputLabel className='select__label' htmlFor="outlined-age-native-simple" helperText='dsada'>Course</InputLabel>
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
                        </StylesProvider>
                    </ThemeProvider>
                </div><br /><br />
                <div className='but-container'><button className='bu1' onClick={this.props.close}>Cancel</button><button className='bu2' onClick={this.addmentor}>Add</button></div>
            </div>
        )
    }
}
