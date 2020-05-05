import React, {Component} from 'react'
import ZingTouch from 'zingtouch'

interface Props{

}

interface State{

}

interface Detail{
    angle:number,
    distanceFromOrigin: number,
    distanceFromLast: number,
    events: Array<any>
}

class Screen extends Component<Props, State>{
    componentDidMount(){
        const controlArea = document.getElementById('interactable');
        const rotateRegion = new ZingTouch.Region(controlArea);
        let currentAngle = 0;
        rotateRegion.bind(controlArea, 'rotate', function(e:any){
            const detail:Detail = e.detail;
            currentAngle += detail.distanceFromLast;
            if (currentAngle > 90){
                console.log("Move down");
                currentAngle = 0;
            }
            if (currentAngle < -90){
                console.log("Move up");
                currentAngle = 0;
            }
        });
    }
    render(){
        return (
            <div className="controls" id="interactable">
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

