import React from 'react'
import srcimg from "../src/petsrc.jpg"

/* Line 20:8:   'ControlBar' is not defined              react/jsx-no-undef
  Line 21:12:  'PlaybackRateMenuButton' is not defined  react/jsx-no-undef
  Line 22:12:  'VolumeMenuButton' is not defined */
import VideoPlayer from "react-video-js-player"
import Pet from "../src/vid.mp4"
export default function file() {
  let styles = {
    border: 'solid 1px black',
    "max-width": '100vw',
   
  };
  return (<div>
    <div style={styles}> <h1 className="title red">Emma</h1><br/>
    
    <img src={srcimg} alt="imgsrc" />
    <br/>
    <img src="/petpublic.jpg" alt="imgpublic" />
    </div>
   
   <VideoPlayer src={Pet} width="350" height="240" className="vid"/>
    
    
    </div>
  )
}

