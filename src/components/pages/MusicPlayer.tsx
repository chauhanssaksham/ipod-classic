import React, { Component } from 'react'

interface Props{
    setList: (newList: string[])=>void
}

class MusicPlayer extends Component<Props,{}>{
    componentDidMount(){
        this.props.setList([]);
    }
    render(){
        return (
            <img src="https://image.flaticon.com/icons/svg/727/727218.svg" alt="Settings"
                style={{
                    height:'30%',
                    width:'30%',
                    margin:'auto auto'
                }}
            />
        );
    }
};

export default MusicPlayer;