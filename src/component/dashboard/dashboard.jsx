import React, { Component, createRef } from 'react'
import { Redirect } from 'react-router-dom'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import './dashboard.scss'

export default class dashboard extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem('token')
        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }
        this.state = {
            show: false,
            loggedIn
        }

    }
    target = createRef(null)
    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to='/login' />
        }
        return (
            <div>
                <div className='container'>
                    <div className='sidebar'>
                        <img className='i1' /><br />
                        <div className='tabs' id='tab1'><img className='i2' /> Dashboard</div>
                        <div className='tabs'>Mentor</div>
                        <div className='tabs'>Student</div>
                        <div className='tabs'>Course</div>
                    </div>
                    <div className='navbar'></div>
                </div>
                <div className='details'>
                    <div className='t1'>DASHBOARD DETAILS</div>
                    <Card className='card'>
                        <Card.Body>
                            <div className='card-head'>Java Full Stack with Angular6 <img className='dot' ref={this.target} onClick={() => this.setState({ show: !this.state.show })} /></div><br /><br />

                            <div className='contain'> <div className='a1'>25 <br /><span className='b1'>Students</span> </div><div className='line'></div><div className='a2'>3<br /><span className='b2'>Mentors</span></div></div>


                        </Card.Body>
                    </Card>
                    <Card className='card'>
                        <Card.Body>
                            <div className='card-head'>Java Full Stack with Angular6 <img className='dot'/></div><br /><br />

                            <div className='contain'> <div className='a1'>25 <br /><span className='b1'>Students</span> </div><div className='line'></div><div className='a2'>3<br /><span className='b2'>Mentors</span></div></div>


                        </Card.Body>
                    </Card></div>
                <Overlay target={this.target.current} show={this.state.show} placement="bottom">
                    {(props) => (
                        <Tooltip id="overlay-example" {...props}>
                            <div className='tooltip'>
                                <span className='tool1'>Edit</span><br/>
                                <span className='tool2'>Delete</span>
                            </div>
                        </Tooltip>
                    )}
                </Overlay>
            </div>
        )
    }
}
