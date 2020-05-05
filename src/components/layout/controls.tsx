import React, {Component} from 'react'
import ZingTouch from 'zingtouch'
import history from '../../history'

interface Props{
    moveMenuDown: () => void,
    moveMenuUp: () => void
    HomeMenu: {options: Array<string>, select: number},
    MusicMenu: {options: Array<string>, select: number},
    changeCurrentMenu: (newVal: string|null)=>void,
    CurrentMenu: string | null
}

interface State{

}

interface Detail{
    angle:number,
    distanceFromOrigin: number,
    distanceFromLast: number,
    events: Array<any>
}

class Controls extends Component<Props, State>{

    componentDidMount(){
        const controlArea = document.getElementById('interactable');
        const rotateRegion = new ZingTouch.Region(controlArea);
        let currentAngle = 0;
        const {moveMenuDown, moveMenuUp} = this.props;
        rotateRegion.bind(controlArea, 'rotate', function(e:any){
            const detail:Detail = e.detail;
            currentAngle += detail.distanceFromLast;
            if (currentAngle > 30){
                moveMenuDown();
                // console.log("Move Down");
                currentAngle = 0;
            }
            if (currentAngle < -30){
                moveMenuUp();
                // console.log("Move up");
                currentAngle = 0;
            }
        });
    }
    sendHome: ()=>void = ()=> {
        this.props.changeCurrentMenu('home');
        history.push('/');
    }
    handleLink : ()=> void = ()=>{
        if (this.props.CurrentMenu === 'home'){     //If the current menu is home menu
            if (this.props.HomeMenu.options[this.props.HomeMenu.select] === 'music'){   //and the selected link is the music link
                // Set currentMenu to Music
                this.props.changeCurrentMenu('music');
            }
            else {
                //Set the current menu to null
                this.props.changeCurrentMenu(null);
            }
            history.push(`/${
                this.props.HomeMenu.options[this.props.HomeMenu.select]
            }`);
        } else if (this.props.CurrentMenu === 'music'){
            //Handle Music Menu
            history.push(`/music/${
                this.props.MusicMenu.options[this.props.MusicMenu.select]
            }`);
        }
    }
    render(){
        return (
            <div className="controls" id="interactable">
                <span className="menu" onClick={this.sendHome}>MENU</span>
                <span className="next"><i className="material-icons md-dark">fast_forward</i></span>
                <span className="previous"><i className="material-icons">fast_rewind</i></span>
                <span className="play_pause"><i className="material-icons">play_arrow</i><i className="material-icons">pause</i></span>
                <span className="home_button" onClick={this.handleLink}></span>
            </div>
        )
    }
};

export default Controls

