import React, {Component} from 'react'
import Card from "react-bootstrap/Card";

export default class courseCard extends Component{
    constructor(props) {
        super(props)

    

    }
    render(){
        return(
            <Card className='card-course'>
                        <Card.Body>
                            <div className='card-head1'> <div className='yui'>{this.props.data.course_name}<img id={this.props.data.id} className='dot1' alt='img' onClick={e => this.props.handle(e,this.props.data)} /></div>   <span className='crs-id'>{this.props.data.cid}</span> </div>
                            <div className='price'>₹ {this.props.data.course_price} / {this.props.data.duration_weeks} <span className='mnth'> months</span> </div>
                            <div className='txt-crs'><span >{this.props.data.description}</span></div>
                        </Card.Body>

                    </Card>
        )
    }
}