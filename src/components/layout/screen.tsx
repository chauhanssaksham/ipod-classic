import React, {Component} from 'react'
import BG from '../../images/screen-bg.jpg'
import battery from '../../images/battery.png'
import playButton from '../../images/play.png'

class Screen extends Component{
    render(){
        return (
            <div className="screen">
                <div className="screen-content flex">
                    <div className="home-section">
                        <nav className="top-bar">
                            <div className="left">
                                iPod
                            </div>
                            <div className="right">
                                <img src={battery} style={{marginTop:2, height:9, width:20}} alt="100%"/>
                            </div>
                            <div className="right">
                                <img src={playButton} style={{marginTop:2, marginRight:4, height:9, width:10}} alt="100%"/>
                            </div>
                        </nav>
                        <ul className="optionsList">
                            <li className="selected">Music</li>
                            <li>Youtube</li>
                            <li>Photos</li>
                            <li>Games</li>
                            <li>Settings</li>
                        </ul>
                    </div>
                    <div className="home-section">
                        <img src={BG} style={{width:'100%', height:'100%'}} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
};

export default Screen