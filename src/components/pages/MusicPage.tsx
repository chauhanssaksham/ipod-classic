import React, { Component } from 'react'
import battery from '../../images/battery.png'
import playButton from '../../images/play.png'


interface State{
    
}
interface Props{
    setList: (newList: string[]) => void,
    optionsList: string[],
    select: number
}
const MusicPageOptions = ['songs', 'artists', 'albums'];

class MusicPage extends Component<Props, State>{
    componentDidMount(){
        this.props.setList(MusicPageOptions);
    }
    render(){
        const menuOptions: string[] = this.props.optionsList;
        const selectedIndex:number = this.props.select % menuOptions.length;
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

export default MusicPage