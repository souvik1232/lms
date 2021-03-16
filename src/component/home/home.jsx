import React, { Component, createRef } from 'react'
import { Link } from 'react-router-dom'
import Card from "react-bootstrap/Card";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import './home.scss'

export default class home extends Component {
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

    getDashDetails = () => {

    }
    render() {
        // if (this.state.loggedIn === false) {
        //     return <Redirect to='/login' />
        // }
        return (
            <div>
                <div className='details'>
                    <div className='t1'>DASHBOARD DETAILS</div>
                    <div className='ol'>
                        <div className='li'> <Card className='card'>

                            <Card.Body>
                                <div className='card-head'> <div>Java Full Stack with Angular6</div>  <img className='dot' alt='' ref={this.target} onClick={() => this.setState({ show: !this.state.show })} /></div><br /><br />
                                <Link className='an' to={`/dashboard/mentorcoursedetails`}>
                                    <div className='contain'>
                                        <div className='a1'>
                                            25 <br />
                                            <span className='b1'>Students</span>
                                        </div>
                                        <div className='line'>
                                        </div>
                                        <div className='a2'
                                        >3<br />
                                            <span className='b2'>
                                                Mentors
                     </span>
                                        </div>
                                    </div>
                                </Link>

                            </Card.Body>
                        </Card>
                        </div>
                    </div>
                </div>
                <Overlay target={this.target.current} show={this.state.show} placement="bottom">
                    {(props) => (
                        <Tooltip id="overlay-example" {...props}>
                            <div className='tooltip'>
                                <span className='tool1'>Edit</span><br />
                                <span className='tool2'>Delete</span>
                            </div>
                        </Tooltip>
                    )}
                </Overlay>
            </div>
        )
    }
}
