import React, { Component } from 'react'
import './studentdetail.scss'
// import Dialog from '@material-ui/core/Dialog';
// import InputLabel from '@material-ui/core/InputLabel';
// import Select from '@material-ui/core/Select';
// import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';
// import {
//     ThemeProvider,
//     createMuiTheme,
// } from '@material-ui/core/styles';
import LMS from '../../service/lmsservice'
const lms = new LMS();


export default class studentdetail extends Component {
    // componentDidMount() {
    //     this.handleMentor()
    // }

    // theme = createMuiTheme({
    //     palette: {
    //         primary: {
    //             main: '#008CFF',
    //         }
    //     },
    // });


    // handleClickOpen = (e) => {
    //     // e.stopPropagation();
    //     this.setState({
    //         open: !this.state.open,
    //     })
    // };


    // handleChange = (event) => {
    //     this.setState({
    //         mentor: event.target.value
    //     })
    // }


    // handleClose = () => {
    //     this.setState({ open: false })
    // };

    // handleMentor = () => {
    //     console.log();
    //     lms.getmentordetails(localStorage.getItem('token')).then((data) => {
    //         console.log(data.data.response);
    //         this.setState({ mentorarray: data.data.response })
    //     }).catch((err) => {
    //         console.log(err);
    //     })

    // }
    // addmentor = () => {
    //     let data = {
    //         name: this.state.name,
    //         email: this.state.email,
    //         mobile: this.state.mobile,
    //         mentor: { course: [this.state.mentor] }
    //     }
    //     console.log(data);
    //     lms.addmentor(this.props.token, data).then(res => {
    //         console.log(res);
    //         this.handleMentor()
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // }

    render() {
        return (
            <>
                <div className='details1'>
                    <div className='hold'>
                        <div className='img-hold'><br /> <img className='img-men' alt="img" /><br />
                            <div className='name'>Student</div> <br />
                            <div className='mid1'>Student-Id</div>
                        </div>
                        <div className='details-hold'>
                            <br />
                            <div className='child-hold'>
                                <div id='info1'> <img className='mail' alt="img" /> <div id='txt1'>LoremIpsum13@bridgelabz.com</div> </div><br />
                                <div id='info2'> <img className='phone' alt="img" /> <div id='txt2'>1234567890</div> </div><br />
                            </div>
                            <br />
                            <br />
                        </div>
                    </div>
                    <div className='holdd'>
                        <div className='stddet'>
                            <div className='cntct'>
                                <div className='cntct-label'>Contact</div> <br />
                                <div className='cntct-nb'><div className='nb-label'>Alternate Contact No.</div> <div className='nb'>0987654321</div>
                                </div><br/><br/><br/>
                                <div className='cntct-nb'> <div className='nb-label'>Alternate Contact Relation</div> <div className='nb'>Lorem ipsum</div> </div>
                            </div><br /><br /><br />
                            <div className='addrs'><div className='cntct-label'>Address</div> <br/>
                            <div className='cntct-nb'><div className='nb-label'>Current Address</div> <div className='nb'>Lorem ipsum dolor sit amet, consetetur sad ips cing elitr, <br/> sed diam nonumy eirmod tempor invidunt ut labore.</div>
                                </div><br/><br/>
                                <div className='cntct-nb'> <div className='nb-label'>Permanent Address</div> <div className='nb'>Lorem ipsum dolor sit amet, consetetur sad ips cing elitr, <br/> sed diam nonumy eirmod tempor invidunt ut labore.</div> </div>
                            </div>
                        </div>
                        <div className='educat'><div className='cntct-label'>Education</div> <br/>
                        <div className='cntct-nb'><div className='nb-label'>College</div> <div className='nb'>Lorem ipsum dolor sit amet, consetetur</div></div>
                        </div>
                    </div>

                </div>
            </ >
        )
    }
}
