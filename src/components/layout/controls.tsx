import React, {Component} from 'react'
import ZingTouch from 'zingtouch'
import { Link } from 'react-router-dom';
import history from '../../history'

interface Props{
    moveHomeMenuDown: () => void,
    moveHomeMenuUp: () => void
    HomeMenu: {options: Array<string>, select: number}
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
        const {moveHomeMenuDown, moveHomeMenuUp} = this.props;
        rotateRegion.bind(controlArea, 'rotate', function(e:any){
            const detail:Detail = e.detail;
            currentAngle += detail.distanceFromLast;
            if (currentAngle > 30){
                moveHomeMenuDown();
                console.log("Move Down");
                currentAngle = 0;
            }
            if (currentAngle < -30){
                moveHomeMenuUp();
                console.log("Move up");
                currentAngle = 0;
            }
        });
    }
    handleLink : ()=> void = ()=>{
        history.push(`/${
            this.props.HomeMenu.options[this.props.HomeMenu.select]
    }`)
    }
    render(){
        return (
            <div className="controls" id="interactable">
                <Link to='/'><span className="menu">MENU</span></Link>
                <span className="next"><i className="material-icons md-dark">fast_forward</i></span>
                <span className="previous"><i className="material-icons">fast_rewind</i></span>
                <span className="play_pause"><i className="material-icons">play_arrow</i><i className="material-icons">pause</i></span>
                <span className="home_button" onClick={this.handleLink}></span>
            </div>
        )
    }
};

export default Controls

