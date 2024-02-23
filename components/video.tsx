import React from "react";

const Video = () => {
    return (
        <div className="videoContainer">
            <video className="bannerVideo" autoPlay={true} muted loop src="/videos/banner.mp4" typeof="video/mp4"></video>
            {/* <video className="bannerVideo d-none d-md-block" autoPlay={true} muted loop src="/videos/banner.mp4" typeof="video/mp4"></video>
            <video className="bannerVideo d-block d-md-none" autoPlay={true} muted loop src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" typeof="video/mp4"></video> */}
        </div>
    )
}

export default Video