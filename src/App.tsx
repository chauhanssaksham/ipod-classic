import React, { Component } from 'react';
import './styles/main.scss'
import Screen from './components/layout/screen'
import Controls from './components/layout/controls'
import {Router} from 'react-router-dom'
import history from './history'

interface State{
    optionsList: Array<string>,
    select: number
}

const initialState = {
    optionsList: [],
    select: 0
}

class App extends Component<{}, State> {
    constructor(props: {}){
        super(props);
        this.state = initialState;
    }
    moveMenuDown= () => {
        if (this.state.optionsList.length===0) return;
            this.setState(prevState => {
                return {select:((prevState.select+1)%prevState.optionsList.length)};
            }
            );
    }
    moveMenuUp = () => {
        if (this.state.optionsList.length===0) return;
            this.setState(prevState => {
                let newSelect = prevState.select-1;
                if (newSelect < 0){
                    newSelect += prevState.optionsList.length;
                }
                return {select:newSelect};
            });
    }
    setList = (newList: Array<string>)=>{
        this.setState({
            optionsList: newList,
            select: 0
        })
    }
    render(){
        return (
            <Router history={history}>
            <div className="ipod">
                <Screen 
                    setList={this.setList}
                    select={this.state.select}
                />
                <Controls 
                    select={this.state.select} 
                    optionsList={this.state.optionsList} 
                    moveMenuDown={this.moveMenuDown} 
                    moveMenuUp={this.moveMenuUp}
                />
            </div>
            </Router>

        );
    }
}

export default App;
