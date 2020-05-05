import React, { Component } from 'react'

interface Props{
    setList: (newList: string[])=>void
}


class YoutubePage extends Component<Props, {}>{

    componentDidMount(){
        this.props.setList([]);
    }

    render(){ 
        return (
            <div
                className="video"
                style={{
                    position: "relative",
                    paddingTop: 25,
                    height: '100%',
                    width:'100%'
                }}
                >
                <iframe
                    title="rickRoll"
                    style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                    }}
                    src={'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'}
                    frameBorder="0"
                />
                </div>
        );
    }
};

export default YoutubePage;