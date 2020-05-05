import React, { Component } from 'react'
import battery from '../../images/battery.png'
import playButton from '../../images/play.png'


interface State{
    
}
interface Props{
    MusicMenu: {options: Array<string>, select: number}
}

class HomePage extends Component<Props, State>{

    render(){
        const menuOptions = this.props.MusicMenu.options;
        const selectedIndex = this.props.MusicMenu.select;
        return (
            <>
            <div className="full-section">
                <nav className="top-bar">
                    <div className="left">
                        Music
                    </div>
                    <div className="right">
                        <img src={battery} style={{marginTop:2, height:9, width:20}} alt="100%"/>
                    </div>
                    <div className="right">
                        <img src={playButton} style={{marginTop:2, marginRight:4, height:9, width:10}} alt="100%"/>
                    </div>
                </nav>
                <ul className="optionsList">
                    {menuOptions.map((option, index) => {
                        return <li className={index===selectedIndex?'selected':''} key={index}>{option}</li>
                    })}
                </ul>
            </div>
            </>
        )
    }
}

export default HomePage