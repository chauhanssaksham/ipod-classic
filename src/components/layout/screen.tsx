import React, {Component} from 'react'
import HomeScreen from './HomeScreen'

interface Props{
    HomeMenu: {options: Array<string>, select: number}
}

class Screen extends Component<Props, {}>{
    render(){
        return (
            <div className="screen">
                <div className="screen-content flex">
                    <HomeScreen HomeMenu={this.props.HomeMenu} />
                </div>
            </div>
        )
    }
};

export default Screen