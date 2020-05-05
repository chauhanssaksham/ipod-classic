import React, { Component } from 'react';
import './styles/main.scss'
import Screen from './components/layout/screen'
import Controls from './components/layout/controls'
import {Router} from 'react-router-dom'
import history from './history'

interface State{
    HomeMenu: {options: Array<string>, select: number},
    MusicMenu: {options: Array<string>, select:number},
    CurrentMenu: string | null
}

const initialState = {
    HomeMenu : {options: ['music', 'youtube', 'photos', 'games', 'settings'], select: 0},
    MusicMenu: {options: ['songs', 'artists', 'albums'], select: 0},
    CurrentMenu: 'home'
}

class App extends Component<{}, State> {
    constructor(props: {}){
        super(props);
        this.state = initialState;
    }
    moveMenuDown= () => {
        if (this.state.CurrentMenu === 'home'){
            this.setState(prevState => {
                let newSelect:number = 0;
                if (prevState.HomeMenu.select < prevState.HomeMenu.options.length-1){
                    newSelect = prevState.HomeMenu.select+1;
                }
                return {HomeMenu: {options: prevState.HomeMenu.options, select:newSelect}}
            });
        } else if (this.state.CurrentMenu === 'music'){
            this.setState(prevState => {
                let newSelect:number = 0;
                if (prevState.MusicMenu.select < prevState.MusicMenu.options.length-1){
                    newSelect = prevState.MusicMenu.select+1;
                }
                return {MusicMenu: {options: prevState.MusicMenu.options, select:newSelect}}
            });
        }
    }
    moveMenuUp = () => {
        if (this.state.CurrentMenu === 'home'){
            this.setState(prevState => {
                let newSelect:number = prevState.HomeMenu.options.length-1;
                if (prevState.HomeMenu.select > 0){
                    newSelect = prevState.HomeMenu.select-1;
                }
                return {HomeMenu: {options: prevState.HomeMenu.options, select:newSelect}}
            });
        } else if (this.state.CurrentMenu === 'music'){
            this.setState(prevState => {
                let newSelect:number = prevState.MusicMenu.options.length-1;
                if (prevState.MusicMenu.select > 0){
                    newSelect = prevState.MusicMenu.select-1;
                }
                return {MusicMenu: {options: prevState.MusicMenu.options, select:newSelect}}
            });
        }
    }
    changeCurrentMenu = (newVal: string|null) => {
        this.setState({
            CurrentMenu: newVal
        });
    }
    render(){
        return (
            <Router history={history}>
            <div className="ipod">
                <Screen MusicMenu={this.state.MusicMenu} HomeMenu={this.state.HomeMenu} />
                <Controls changeCurrentMenu={this.changeCurrentMenu} CurrentMenu={this.state.CurrentMenu} MusicMenu={this.state.MusicMenu} HomeMenu={this.state.HomeMenu} moveMenuDown={this.moveMenuDown} moveMenuUp={this.moveMenuUp}/>
            </div>
            </Router>

        );
    }
}

export default App;
