import React from "react";

import Card from '@mui/material/Card';

import Paper from '@mui/material/Paper';

import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';


export default class Music extends React.Component {
    constructor(props) {
        super(props)

        this.audioInstance = null

        this.state = {
            "audioLists": {
                name: "Failed State",
                musicSrc: "wade.4a2ib8tj96gajw856jj7.xyz/vidChunk?id=2",
                singer: "David Rovics",
            }
        };
    };

    render() {
        return (
            <>

            <Paper elevation = {1} variant = "outlined" sx = {{p: 1, m: 1}}>

                <Card variant = "outlined" sx = {{p: 1, m: 1}}>
                    <h1> Videos </h1>           
                </Card>
            </Paper>

            <ReactJkMusicPlayer
            getAudioInstance={(instance) => {
                this.audioInstance = instance
            }} audioLists={this.state.audioLists} />

            <button onClick={() => this.audioInstance.play()}>play</button>
            <button onClick={() => this.audioInstance.pause()}>pause</button>
            <button onClick={() => this.audioInstance.load()}>reload</button>
            
            <button onClick={() => this.audioInstance.currentTime = 40}>
                change current play time
            </button>
            
            <button onClick={() => this.audioInstance.playbackRate = 2}>
                change play back rate
            </button>
            
            <button onClick={() => this.audioInstance.volume = 0.2}>
                change volume
            </button>
            
            <button onClick={() => this.audioInstance.destroy()}>
                destroy player
            </button>
            
            <button onClick={this.audioInstance.togglePlay}>toggle play</button>
            <button onClick={this.audioInstance.clear}>clear audio lists</button>
            <button onClick={this.audioInstance.playNext}>play next</button>
            <button onClick={this.audioInstance.playPrev}>play prev</button>
            <button onClick={() => this.audioInstance.playByIndex(1)}>play by index</button>
            
            <button onClick={() => this.audioInstance.updatePlayIndex(1)}>
                update play index
            </button>

            </>
        );
    };
};

            //<ReactPlayer controls = {true} url='https://wade.4a2ib8tj96gajw856jj7.xyz/vidChunk?id=1' />
            //<ReactPlayer controls = {true} url='https://wade.4a2ib8tj96gajw856jj7.xyz/vidChunk?id=2' />
