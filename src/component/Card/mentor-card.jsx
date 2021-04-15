import React, {Component} from 'react'
import Card from "react-bootstrap/Card";
import history from '../../component/history'

export default class menCard extends Component{
    constructor(props) {
        super(props)
    }
    redirect=()=>{
        history.push('/dashboard/details')
    }
    render(){
        return(
            <Card className='card-mentor' id={this.props.index} onClick={(e) => this.props.store}>

                            <Card.Body >
                                <Card.Title><div className='card-head'> <img className='mentor-img' alt="img" /> <div className='mentorname'>{this.props.data.mentor} <br /> <span className='mid'>{this.props.data.mid} <br /> Poonam@bridgelabz.com </span></div>  <img className='dot1' aria-describedby={this.id} alt='img' onClick={this.props.handle} /><br />
                                </div></Card.Title>
                                    <Card.Text className='text' onClick={this.redirect}>
                                        <div className='line1'></div><br />
                                        <div className='mid'>Course Name <span className='astudent'>No.of students</span></div>
                                        <div className='card-object'>
                                            {this.props.data.course.map((dta) => (<div className='courselist'>{dta.course_name}<span className='scount'>{dta.student_count}</span>  </div>))}
                            asbdka <br />dbajdba <br />jhadbhjabhdj <br />nwbjebjf <br />bejbwew <br />jhwevhjdv <br />
                                        </div></Card.Text> 

                            </Card.Body>
                        </Card>
        )
    }
}