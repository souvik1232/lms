import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
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
            loggedIn
        }
    }
    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to='/login' />
        }
        return (
            <div className='container'>
                <div className='sidebar'>
                    <img className='i1' /><br />
                    <div className='tabs'><img className='i2' /> Dashboard</div>
                    <div className='tabs'>Mentor</div>
                    <div className='tabs'>Student</div>
                    <div className='tabs'>Course</div>
                </div>
            </div>
        )
    }
}
