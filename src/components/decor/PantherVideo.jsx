import React from "react";
import "./panthervideo.css";

function PantherVideo() {
    return (
        <figure>
            <video
                autoPlay
                loop
                muted
                playsInline
                src="https://files.pantherlabel.com/PantherWebsiteHeroV2.mp4"
            ></video>
        </figure>
    );
}

export default PantherVideo;
