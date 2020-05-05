import React, { Component } from 'react';
import './styles/main.scss'
import Screen from './components/layout/screen'
import Controls from './components/layout/controls'

interface State{
    HomeMenu: {options: Array<string>, select: number}
}

const initialState = {
    HomeMenu : {options: ['Music', 'Youtube', 'Photos', 'Games', 'Settings'], select: 0}
}

class App extends Component<{}, State> {
    constructor(props: {}){
        super(props);
        this.state = initialState;
    }
    moveHomeMenuDown= () => {
        this.setState(prevState => {
            let newSelect:number = 0;
            if (prevState.HomeMenu.select < prevState.HomeMenu.options.length-1){
                newSelect = prevState.HomeMenu.select+1;
            }
            return {HomeMenu: {options: prevState.HomeMenu.options, select:newSelect}}
        });
    }
    moveHomeMenuUp = () => {
        this.setState(prevState => {
            let newSelect:number = prevState.HomeMenu.options.length-1;
            if (prevState.HomeMenu.select > 0){
                newSelect = prevState.HomeMenu.select-1;
            }
            return {HomeMenu: {options: prevState.HomeMenu.options, select:newSelect}}
        });
    }

    render(){
        return (
            <div className="ipod">
                <Screen HomeMenu={this.state.HomeMenu} />
                <Controls  moveHomeMenuDown={this.moveHomeMenuDown} moveHomeMenuUp={this.moveHomeMenuUp}/>
            </div>
        );
    }
}

export default App;
