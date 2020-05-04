import React, {Component} from 'react'

class Screen extends Component{
    render(){
        return (
            <div className="controls">
                <span className="menu">MENU</span>
                <span className="next"><i className="material-icons md-dark">fast_forward</i></span>
                <span className="previous"><i className="material-icons">fast_rewind</i></span>
                <span className="play_pause"><i className="material-icons">play_arrow</i><i className="material-icons">pause</i></span>
                <span className="home_button"></span>
            </div>
        )
    }
};

export default Screen

