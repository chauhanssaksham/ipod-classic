import React, {Component} from 'react'

class Screen extends Component{
    render(){
        return (
            <div className="controls">
                <span className="menu">MENU</span>
                <div className="next"></div>
                <div className="play"></div>
                <div className="previous"></div>
            </div>
        )
    }
};

export default Screen

