import React from "react";
//import { homeVideo } from "/./public/homeVideo.mp4";
import Video from "next-video";
import homeVideo from "../../../public/homeVideo.mp4";
function VideoPlayer() {
    return <Video src={"../../../public/homeVideo.mp4"} />;
}

export default VideoPlayer;
