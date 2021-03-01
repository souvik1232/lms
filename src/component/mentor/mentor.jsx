import React, { Component, createRef } from 'react'
import { Redirect } from 'react-router-dom'
import './mentor.scss'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import Modal from "react-bootstrap/Modal";

export default class mentor extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem('token')
        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }
        this.state = {
            modalShow: false,
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

                <div className='details'>
                    <Button className='buto1' onClick={() => this.setState({ modalShow: !this.state.modalShow })}>Add Mentor</Button>
                    <div className='t1'>MENTOR DETAILS</div>

                    <Card className='card-mentor'>
                        <Card.Body>
                            <div className='card-head'>Mentor Name <img className='dot1' ref={this.target} onClick={() => this.setState({ show: !this.state.show })} /></div><br /><br />

                        </Card.Body>
                    </Card>
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


                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Modal heading
        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Centered Modal</h4>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros.
        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={()=>this.setState({modalShow:false})}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
