import React, { Component } from 'react'
import {
    ThemeProvider,
    createMuiTheme,
} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import LMS from '../../service/lmsservice'
const lms = new LMS()

export default class addstudent extends Component {
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
    render() {
        return (
            <div className='dig-container'>
                            <div className='tip'>Add Mentor</div>
                            <div><ThemeProvider theme={this.theme}>
                                <TextField id="outlined-basic2" size='small' label="Student ID" variant="outlined" onChange={(e) => { this.setState({ username: e.target.value }) }} /><br /><br />
                                <TextField id="outlined-basic2" size='small' label="Name" variant="outlined" onChange={(e) => { this.setState({ name: e.target.value }) }} /><br /><br />
                                <TextField id="outlined-basic2" size='small' label="Email Id" variant="outlined" onChange={(e) => { this.setState({ email: e.target.value }) }} /><br /><br />
                                <TextField id="outlined-basic2" size='small' label="Mobile Number" variant="outlined" onChange={(e) => { this.setState({ mobile: e.target.value }) }} /><br /><br />
                                {/* <TextField type='text' size='small' id="outlined-basic2" label="Course" variant="outlined" onChange={(e) => { this.setState({ password: e.target.value }) }} /><br /><br/> */}
                                {/* <TextField type='text' size='small' id="outlined-basic2" label="Mentor" variant="outlined" onChange={(e) => { this.setState({ password: e.target.value }) }} /><br /> */}
                                <FormControl variant="outlined"  >
                                    <InputLabel htmlFor="outlined-age-native-simple">Course</InputLabel>
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
                                </FormControl><br /><br />
                                <FormControl variant="outlined"  >
                                    <InputLabel htmlFor="outlined-age-native-simple">Mentor</InputLabel>
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
                            <div className='but-container'><button className='bu1' onClick={this.props.close}>Cancel</button><button className='bu2'>Add</button></div>
                        </div>
        )
    }
}
