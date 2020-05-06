import React, {Component} from 'react'
import ZingTouch from 'zingtouch'
import history from '../../history'

interface Props{
    moveMenuDown: () => void,
    moveMenuUp: () => void
    optionsList: string[],
    select: number
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

    //Set up the ZingTouch Gestures as soon as the component mounts
    componentDidMount(){
        //Zingtouch Gestures
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
        // On pushing the 'MENU' button from any screen
        history.push('/');
    }

    handleLink : ()=> void = ()=>{
        //Handle the links programatically
        if (this.props.optionsList.length <= 0){ 
            //If the current page has no options (like the /photos or /youtube)
            return;
        }
        //Navigate the browser based on the on the option currently selected
        let currentPath:string = history.createHref(history.location);
        let urlPush: string = this.props.optionsList[this.props.select];
        // console.log(history.createHref(history.location));
        if (currentPath === '/'){
            history.push(`/${urlPush}`);
        } else {
            history.push(`${currentPath}/${urlPush}`);
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

