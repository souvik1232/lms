import React, { Component } from 'react'
import './mentordetails.scss'
import LMS from '../../service/lmsservice'
const lms = new LMS();


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
                            <br />
                            <div className='child-hold'>
                                <div id='info1'> <img className='mail' alt="img" /> <div id='txt1'>Poonam@bridgelabz.com</div> </div><br />
                                <div id='info2'> <img className='phone' alt="img" /> <div id='txt2'>1234567890</div> </div><br />
                                <div id='info3'> <img className='address' alt="img" /> <div id='txt3'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</div> </div>
                            </div>
                            <br/><br/>
                            <div className='info-1'>Total no. of Courses <div className='ct'>08</div></div><br/>
                            <div className='info-1'>Total no. of Students <div className='ct'>110</div></div><br/>

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
                                <div className='labels'>
                                    <div className='txt'>Student Name</div>
                                    <div className='txt1'>Current Score</div>
                                </div>
                                <br />
                                <div className='ROW'> <div className='row-first'></div> <div className='row-last'></div> </div>
                            </div>
                        </div></div>

                </div>
            </div >
        )
    }
}
