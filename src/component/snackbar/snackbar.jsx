import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';

class snackbar extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    open={this.props.open}
                    message={<span id="message-id">{this.props.message}</span>}/>
            </div>
        );
    }
}

export default snackbar;