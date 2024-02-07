import React from "react";

const Video = () => {
    return (
        <div className="videoContainer">
            <video className="bannerVideo" autoPlay={true} muted loop src="/videos/banner.mp4" typeof="video/mp4"></video>
        </div>
    )
}

export default Video