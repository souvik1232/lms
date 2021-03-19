import React, { Component } from 'react'
import './mentordetails.scss'
// import LMS from '../../service/lmsservice'
import { connect } from 'react-redux';

// const lms = new LMS();


class mentordetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false,
            open: false,
            drop:true,
        }

    }

    render() {
        // console.log(this.props.mendata.mentor.mentor);

        return (
            <div className='detailscontainer12'>
                <div className='details1'>
                    <div className='hold'>
                        <div className='img-hold'><br /> <img className='img-men' alt="img" /><br />
                            <div className='name'>{this.props.mendata.mentor.mentor}</div> <br />
                            <div className='mid1'>{this.props.mendata.mentor.mid}</div>
                        </div>
                        <div className='details-hold'>
                            <br />
                            <div className='child-hold'>
                                <div id='info1'> <img className='mail' alt="img" /> <div id='txt1'>Poonam@bridgelabz.com</div> </div><br />
                                <div id='info2'> <img className='phone' alt="img" /> <div id='txt2'>1234567890</div> </div><br />
                                <div id='info3'> <img className='address' alt="img" /> <div id='txt3'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</div> </div>
                            </div>
                            <br /><br />
                            <div className='info-1'>Total no. of Courses <div className='ct'>08</div></div><br />
                            <div className='info-1'>Total no. of Students <div className='ct'>{ }</div></div><br />

                        </div>

                    </div>
                    <div className='hold01'>
                        <div className='hold0'>
                            <div className='drop'>
                                <div className='drop-down-main'>dkjfbkjdf <img className={this.state.drop ? 'sort-down':'sort-up'} onClick={()=>(this.setState({drop:!this.state.drop}))} alt="img"/></div>
                                <div className={this.state.drop ? 'drop-down-list':'drop-down-list active'}>
                                    <div className='down-list'>okdjfo</div>
                                    <div className='down-list'>okdjfo</div>
                                    <div className='down-list'>okdjfo</div>
                                    <div className='down-list'>okdjfo</div>
                                    <div className='down-list'>okdjfo</div>
                                    <div className='down-list'>okdjfo</div>
                                    <div className='down-list'>okdjfo</div>
                                    <div className='down-list'>okdjfo</div>
                                </div>
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
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        mendata: state
    };
};
export default connect(mapStateToProps, null)(mentordetails);