import React, { Component } from 'react';
import './placeholder.scss'

class placeholder extends Component {
    constructor(props){
        super(props)

        this.state={
            reload:true,
        }
    }
    reeload = ()=>{

        this.props.reload();
        this.setState({reload:!this.state.reload})
    }

    render() {
        return (
            <div className='place'>
                <div className='lne1'>OOPS!</div>
                <div className='lne2'>Error:Data Not found</div>
                <div className='lne3'><button className={this.state.reload ? 'rld active':'rld'} onClick={this.reeload} style={{cursor:'pointer'}}>Reload</button></div>
            </div>
        );
    }
}

export default placeholder;