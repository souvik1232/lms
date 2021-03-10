import React, { Component } from 'react'
import './dashboardunique.scss'
import LMS from '../../service/lmsservice'
const lms = new LMS();

export default class dashboardunique extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mentorarray: [],
            studentarr: []

        }

    }

    componentDidMount() {
        this.getstudent()
        this.handleMentor()
    }
    handleMentor = () => {
        // console.log('asdas');
        lms.getmentordetails(localStorage.getItem('token')).then((data) => {
            console.log(data.data.response);
            this.setState({ mentorarray: data.data.response })
        }).catch((err) => {
            console.log(err);
        })

    }
    getstudent = () => {
        lms.getstudentdetails(localStorage.getItem('token')).then((res) => {
            console.log(res);
            console.log(res.data.response);
            this.setState({ studentarr: res.data.response })
        }).catch((err) => {
            console.log(err);
        })
    }
    render() {
        return (
            <div>
                <div className='details2'>
                    <div className='divi1'>
                        < div className='h'>
                            <div className='h-t'>Mentors - 04</div>
                            <button className='buto4'>Add Mentor</button>
                        </div>
                        <br />
                        <div className='f'>
                            {this.state.mentorarray.map((data) => (<div className='card-de'>
                                <img className='bin1' alt="" />
                                <img className='abcd' alt="img" /><br />
                                <div id='men-i'>{data.mid}</div>
                                <div className='men-n'>{data.mentor}</div>
                            </div>))}

                        </div>
                    </div>
                    <div className='divi2'>
                        <div className='h'>
                            <div className='h-t'>Student Name - 25</div>
                            <button className='buto4'>Add Student</button>
                        </div>
                        <br />
                        <div className='f'>
                            {this.state.studentarr.map((data) => (<div className='st'>{data.student} <img className='bin' alt="" /></div>))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

