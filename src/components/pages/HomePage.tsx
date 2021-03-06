import React, { Component } from 'react'
import BG from '../../images/screen-bg.jpg'
import battery from '../../images/battery.png'
import playButton from '../../images/play.png'


interface State{
    
}
interface Props{
    setList: (newList: string[]) => void,
    select: number
}

//Options that will be passed on to the app level state 'optionsList'
const HomePageOptions = ['music', 'youtube', 'photos', 'games', 'settings'];

class HomePage extends Component<Props, State>{
    // Set the app level state 'optionsList' according to the home page
    componentDidMount(){
        this.props.setList(HomePageOptions);
    }
    render(){
        const menuOptions:string[] = HomePageOptions;
        const selectedIndex:number = this.props.select % menuOptions.length;

        return (
            <>
            {/* Left half of the home */}
            <div className="home-section">
                {/* The top notification bar */}
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
                {/* The options */}
                <ul className="optionsList">
                    {menuOptions.map((option, index) => {
                        return <li className={index===selectedIndex?'selected':''} key={index}>{option}</li>
                    })}
                </ul>
            </div>
            {/* Right half of the home */}
            <div className="home-section">
                <img src={BG} style={{width:'100%', height:'100%'}} alt=""/>
            </div>
            </>
        )
    }
}

export default HomePage