import React, { Component, createRef } from 'react'
import { Redirect } from 'react-router-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
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
            <div className='contain-container'>
                <div className='container'>
                    <div className='sidebar'>
                        <img className='i1' /><br />
                        <div className='tabs' id='tab1'><img className='i2' /><Link className='a' to={`${this.props.match.path}/home`}> Dashboard</Link></div>
                        <div className='tabs'><Link className='a'  to={`${this.props.match.path}/mentor`}> Mentor</Link></div>
                        <div className='tabs'><Link className='a'  to={`${this.props.match.path}/student`}>Student</Link> </div>
                        <div className='tabs'><Link className='a'  to={`${this.props.match.path}/course`}>Course</Link> </div>
                    </div>
                    <div className='navbar'></div>
                </div>
            </div> 
        )
    }
}
