import React, { Component } from 'react'
interface Props{
    setList: (newList: string[])=>void
}
class GamesPage extends Component<Props,{}>{
    componentDidMount(){
        this.props.setList([]);
    }
    render(){
        return (
            <img src="https://image.flaticon.com/icons/svg/686/686589.svg" alt="Settings"
                style={{
                    height:'35%',
                    width:'35%',
                    margin:'auto auto'
                }}
            />
        );
    }
};

export default GamesPage;