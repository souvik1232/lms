import React, { Component } from 'react'
import './mentordetails.scss'

export default class mentordetails extends Component {
    render() {
        return (
            <div>
                <div className='details1'>
                    <div className='hold'>
                        <div className='img-hold'><br /> <img className='img-men' alt="img" /><br />
                            <div className='name'>Mentor Name</div> <br />
                            <div className='mid1'>MID2026</div>
                        </div>
                        <div className='details-hold'>
                            <div id='info1'> <img className='mail' alt="img"/>Poonam@bridgelabz.com</div>
                            <div id='info2'> <img className='phone' alt="img"/>1234567890</div>
                            <div id='info3'> <img className='address' alt="img"/>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</div>
                        </div>
                    </div>
                    <div>
                        <div className='hold0'>
                            <div className='drop'>
                                
                            </div>
                            <div className='stu-cnt'>Total Student <div className='line2'></div> <div className='count12'>0</div> </div>
                        </div>
                        <div className='hold1'>
                            <div className='stu-list'>
                                <div className='txt'>Student Name</div>
                                <div className='txt1'>Current Score</div>
                            </div>
                        </div></div>

                </div>
            </div >
        )
    }
}
