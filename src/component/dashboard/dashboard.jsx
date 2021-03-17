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
            sidebar: false,
            tab:false,
            loggedIn
        }

    }
    setTab = ()=>{
        console.log(document.getElementsByClassName('tabs'))
        this.setState({ tab: (!this.state.tab) })
    }
    showSidebar = () => {
        console.log(this.state.sidebar);
        this.setState({ sidebar: (!this.state.sidebar) })
    }
    
    target = createRef(null)
    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to='/login' />
        }
        return (
            <>
                <div className='container'>
                    <div className={this.state.sidebar ? 'sidebar active' : 'sidebar'} onClick={this.showSidebar}>
                        <img className='i1' alt='' /><br />
                        <Link className='a' to={`${this.props.match.path}/home`}><div className={this.state.tab ? 'tabs active' : 'tabs'} id='tab1' onClick={this.setTab} ><img className='i2' alt='img' />Dashboard</div></Link>
                        <Link className='a'  to={`${this.props.match.path}/mentor`}><div className='tabs'> <img className='i3' alt="img"/> Mentor</div></Link>
                        <Link className='a'  to={`${this.props.match.path}/student`}><div className='tabs'><img className='i4' alt="img"/> Student </div></Link>
                        <Link className='a'  to={`${this.props.match.path}/course`}><div className='tabs'>Course </div></Link>
                    </div>
                    <div className='navbar'> <img className='bars' onClick={this.showSidebar} alt=""/> <div className='profile'> <img alt=""/> </div> </div>
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
