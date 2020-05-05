import React, { Component } from 'react'

class YoutubePage extends Component{
    // componentDidMount(){
    // // 2. This code loads the IFrame Player API code asynchronously.
    //   var tag = document.createElement('script');
    //   tag.src = "https://www.youtube.com/iframe_api";
    //   var firstScriptTag:any = document.getElementsByTagName('script')[0];
    //   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    //   // 3. This function creates an <iframe> (and YouTube player)
    //   //    after the API code downloads.
    //   var player;
    //   function onYouTubeIframeAPIReady() {
    //     player = new YT.Player('player', {
    //       height: '390',
    //       width: '640',
    //       videoId: 'M7lc1UVf-VE',
    //       events: {
    //         'onReady': onPlayerReady,
    //         'onStateChange': onPlayerStateChange
    //       }
    //     });
    //   }

    //   // 4. The API will call this function when the video player is ready.
    //   function onPlayerReady(event) {
    //     event.target.playVideo();
    //   }

    //   // 5. The API calls this function when the player's state changes.
    //   //    The function indicates that when playing a video (state=1),
    //   //    the player should play for six seconds and then stop.
    //   var done = false;
    //   function onPlayerStateChange(event) {
    //     if (event.data == YT.PlayerState.PLAYING && !done) {
    //       setTimeout(stopVideo, 6000);
    //       done = true;
    //     }
    //   }
    //   function stopVideo() {
    //     player.stopVideo();
    //   }
    // }

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