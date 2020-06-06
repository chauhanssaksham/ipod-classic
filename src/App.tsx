import React, { Component } from 'react';
import './styles/main.scss'
import Screen from './components/layout/screen'
import Controls from './components/layout/controls'
import {Router} from 'react-router-dom'
import history from './history'

//Typescript interface for the state of the App component
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
    //Each page (component) rendered is passed the setList method in their props so they can set an app level list to be displayed
    // (This is required in this project since no central state management like Redux is used here)
    //The list of options needs to be app level so that 'Controls' component can utilize this list in page navigation programatically
    setList = (newList: Array<string>)=>{
        this.setState({
            optionsList: newList,
            select: 0
        })
    }

    render(){
        return (
            <Router history={history}>  {/* Using the history API (utilizing react-router-dom) */}
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
                        moveMenuDown={this.moveMenuDown} //Method to move the menu down (on clockwise drag)
                        moveMenuUp={this.moveMenuUp} //Method to move the menu up (on anti-clockwise drag)
                    />
                </div>
            </Router>

        );
    }
}

export default App;
