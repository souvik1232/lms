import React, { Component, createRef } from 'react'
import { Redirect } from 'react-router-dom'
import {Link } from "react-router-dom";
import {connect} from 'react-redux'
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import Overlay from "react-bootstrap/Overlay";
// import Tooltip from "react-bootstrap/Tooltip";
import './dashboard.scss'

class dashboard extends Component {
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
            <>
                <div className='container'>
                    <div className='sidebar'>
                        <img className='i1' alt='' /><br />
                        <Link className='a' to={`${this.props.match.path}/home`}><div className='tabs' id='tab1'><img className='i2' alt='' /> Dashboard</div></Link>
                        <Link className='a'  to={`${this.props.match.path}/mentor`}><div className='tabs'> Mentor</div></Link>
                        <Link className='a'  to={`${this.props.match.path}/student`}><div className='tabs'>Student </div></Link>
                        <Link className='a'  to={`${this.props.match.path}/course`}><div className='tabs'>Course </div></Link>
                    </div>
                    <div className='navbar'> <div className='profile'> <img alt=""/> </div> </div>
                </div>
            </> 
        )
    }
}
const mapStateToProps = (state) => {
    return {
      token: state.state,
    };
  };
export default connect(mapStateToProps,undefined) (dashboard);
