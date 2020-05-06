import React, { Component } from 'react';
import './styles/main.scss'
import Screen from './components/layout/screen'
import Controls from './components/layout/controls'
import {Router} from 'react-router-dom'
import history from './history'


interface State{
    optionsList: Array<string>,     //The list of options on the screen, is an array of strings set by the page currently rendered
    select: number                  //The index of the option selected
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
    //Move the menu down (select increase)
    moveMenuDown= () => {
        if (this.state.optionsList.length===0) return;
        this.setState(prevState => {
            return {select:((prevState.select+1)%prevState.optionsList.length)};
        }
        );
    }
    //Move the menu up (select decrease)
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
    //Each page rendered is provided setList so they can set an app level list to be displayed
    //The list of options needs to be app level so that 'controls' component can utilize this list to for links
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
                    {/* The Top component, the screen */}
                    <Screen 
                        setList={this.setList}
                        select={this.state.select}
                    />
                    {/* The Bottom component, the controls panel */}
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
