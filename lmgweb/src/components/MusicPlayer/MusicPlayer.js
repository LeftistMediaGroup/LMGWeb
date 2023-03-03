import React, { useState } from "react";

import styles from "../../styles/MusicPlayer.module.css";

import { BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs";
import { FaPlay, FaPause } from "react-icons/fa";


export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className = {styles.musicPlayer}>
            <audio src ="https://wade.4a2ib8tj96gajw856jj7.xyz/vidChunk?id=1"
            preload = 'metadata'
            >
            </audio>

            <button className="styles.forwardBackward">
                <BsArrowLeftShort/>
                30
            </button>
            
            <button onclick={togglePlayPause} className={styles.playPause}>
              {isPlaying ? <FaPause /> : <FaPlay />}
              
                <FaPlay/>
                Play / Pause
            </button>
            
            <button className="styles.forwardBackward">
                30
                <BsArrowRightShort/>
            </button>

            {/*current time*/}
            <div>

            </div>

            {/*progress bar*/}
            <div>
                <input type="range">
                    
                </input>
            </div>

            {/*duration*/}
        </div>
    );
};