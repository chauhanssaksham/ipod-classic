import React, {Component} from 'react'
import HomePage from '../pages/HomePage'
import MusicPage from '../pages/MusicPage'
import YoutubePage from '../pages/YoutubePage'
import GamesPage from '../pages/GamesPage'
import PhotosPage from '../pages/PhotosPage'
import SettingsPage from '../pages/SettingsPage'
import {Switch, Route} from 'react-router-dom'

interface Props{
    setList: (newList: string[]) => void,
    optionsList: Array<string>,
    select: number
}

class Screen extends Component<Props, {}>{
    render(){
        return (
            <div className="screen">
                <div className="screen-content flex">
                    <Switch>
                        <Route exact path='/'>
                            <HomePage setList={this.props.setList} select={this.props.select} optionsList={this.props.optionsList} />
                        </Route>
                        <Route exact path='/music'>
                            <MusicPage setList={this.props.setList} select={this.props.select} optionsList={this.props.optionsList} />
                        </Route>
                        <Route exact path='/youtube'>
                            <YoutubePage/>
                        </Route>
                        <Route exact path='/photos'>
                            <PhotosPage/>
                        </Route>
                        <Route exact path='/games'>
                            <GamesPage/>
                        </Route>
                        <Route exact path='/settings'>
                            <SettingsPage/>
                        </Route>
                        <Route path='/music/songs'>
                            <SettingsPage/>
                        </Route>
                    </Switch>
                </div>
            </div>
        )
    }
};

export default Screen