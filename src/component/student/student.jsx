import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import './student.scss'


export default class student extends Component {
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
    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to='/login' />
        }
        return (
            <div>
                <div className='details'>
                    <Button className='buto1'>Add Student</Button>
                    <div className='t1'>STUDENT DETAILS</div>

                    {/* <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Student ID</th>
                                <th>Name</th>
                                <th>Email ID</th>
                                <th>Mobile No.</th>
                                <th>Course</th>
                                <th>Mentor</th>
                                <th>Score</th>
                                <th>Week</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table> */}
                </div>
            </div>
        )
    }
}
