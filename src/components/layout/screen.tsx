import React, {Component} from 'react'
import HomePage from '../pages/HomePage'
import MusicPage from '../pages/MusicPage'
import YoutubePage from '../pages/YoutubePage'
import GamesPage from '../pages/GamesPage'
import PhotosPage from '../pages/PhotosPage'
import SettingsPage from '../pages/SettingsPage'
import MusicPlayer from '../pages/MusicPlayer'
import {Switch, Route} from 'react-router-dom'

interface Props{
    setList: (newList: string[]) => void,
    select: number
}

class Screen extends Component<Props, {}>{
    render(){
        return (
            <div className="screen">
                <div className="screen-content flex">   {/* Extra wrapper needed for CSS styling, to hide an unwanted scrollbar*/}
                    <Switch>
                        <Route exact path='/'>
                            <HomePage setList={this.props.setList} select={this.props.select} />
                        </Route>
                        <Route exact path='/music'>
                            <MusicPage setList={this.props.setList} select={this.props.select} />
                        </Route>
                        <Route exact path='/youtube'>
                            <YoutubePage setList={this.props.setList}/>
                        </Route>
                        <Route exact path='/photos'>
                            <PhotosPage setList={this.props.setList}/>
                        </Route>
                        <Route exact path='/games'>
                            <GamesPage setList={this.props.setList}/>
                        </Route>
                        <Route exact path='/settings'>
                            <SettingsPage setList={this.props.setList}/>
                        </Route>
                        <Route path='/music/'> {/* Any path that is prefixed by '/music/' is multiplexed here, basically '/music/*' */}
                            <MusicPlayer setList={this.props.setList}/>
                        </Route>
                    </Switch>
                </div>
            </div>
        )
    }
};

export default Screen