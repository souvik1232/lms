import React, { Component } from 'react'
import './studentdetail.scss'
// import LMS from '../../service/lmsservice'
import { connect } from 'react-redux';
// const lms = new LMS();


class studentdetail extends Component {

    render() {
        return (
            <div className='detailscontainer12'>
                <div className='bin23'>
                {/* <img  alt="img"/> */}
                </div>
                <div className='details1'>
                    <div className='hold'>
                        <div className='img-hold'><br /> <img className='img-men' alt="img" /><br />
                            <div className='name'>{this.props.studata.state.student}</div> <br />
                            <div className='mid1'>{this.props.studata.state.sid}</div>
                        </div>
                        <div className='details-hold'>
                            <br />
                            <div className='child-hold'>
                                <div id='info1'> <img className='mail' alt="img" /> <div id='txt1'>LoremIpsum13@bridgelabz.com</div> </div><br />
                                <div id='info2'> <img className='phone' alt="img" /> <div id='txt2'>1234567890</div> </div><br /><br/>
                                <div id='info3'> <img className='crs' alt="img" /> <div id='txt3'>Course Name</div> </div><br />
                                <div id='info2'> <img className='mtr' alt="img" /> <div id='txt3'>Mentor Nmae</div> </div><br />
                            </div>
                            <br />
                            <br />
                        </div>
                    </div>
                    <div className='holdd'>
                        <div className='stddet'>
                            <div className='cntct'>
                                <div className='cntct-label'>Contact</div> <br />
                                <div className='cntct-nb'><div className='nb-label'>Alternate Contact No.</div> <div className='nb'>0987654321</div>
                                </div><br /><br /><br />
                                <div className='cntct-nb'> <div className='nb-label'>Alternate Contact Relation</div> <div className='nb'>Lorem ipsum</div> </div>
                            </div><br /><br /><br />
                            <div className='addrs'><div className='cntct-label'>Address</div> <br />
                                <div className='cntct-nb'><div className='nb-label'>Current Address</div> <div className='nb'>Lorem ipsum dolor sit amet, consetetur sad ips cing elitr, <br /> sed diam nonumy eirmod tempor invidunt ut labore.</div>
                                </div><br /><br />
                                <div className='cntct-nb'> <div className='nb-label'>Permanent Address</div> <div className='nb'>Lorem ipsum dolor sit amet, consetetur sad ips cing elitr, <br /> sed diam nonumy eirmod tempor invidunt ut labore.</div> </div>
                            </div>
                        </div>
                        <div className='educat'><div className='cntct-label'>Education</div> <br />
                            <div className='cntct-nb'><div className='nb-label'>College</div> <div className='nb'>Lorem ipsum dolor sit amet, consetetur</div></div><br />
                            <div className='cntct-nb'><div className='nb-label'>University</div> <div className='nb'>Lorem ipsum dolor sit amet, consetetur</div></div><br /><br/>
                            <div className='cntct-nb'><div className='nb-label'>Degree</div> <div className='nb'>Lorem ipsum dolor sit amet, consetetur</div></div><br /><br/>
                            <div className='cntct-nb'><div className='nb-label'>Stream</div> <div className='nb'>Lorem ipsum dolor sit</div></div><br /><br/>
                            <div className='cntct-nb-b'>
                                <div><div className='nb-label'>Year of passing</div> <div className='nb'>2018</div></div>
                                <div className='line'></div>
                                <div><div className='nb-label'>Degree Percentage</div> <div className='nb'>83%</div></div>
                            </div><br /><br/>
                            <div className='cntct-nb'><div className='nb-label'>Mastres</div> <div className='nb'>Lorem ipsum dolor sit amet, consetetur</div></div><br />
                            <div className='cntct-nb'><div className='nb-label'>Stream</div> <div className='nb'>Lorem ipsum dolor sit</div></div><br />
                            <div className='cntct-nb-b'>
                                <div><div className='nb-label'>Year of passing</div> <div className='nb'>2018</div></div>
                                <div className='line'></div>
                                <div><div className='nb-label'>Masters Percentage</div> <div className='nb'>83%</div></div>
                            </div><br />
                        </div>
                    </div>

                </div>
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        studata: state
    };
};
export default connect(mapStateToProps, null)(studentdetail);