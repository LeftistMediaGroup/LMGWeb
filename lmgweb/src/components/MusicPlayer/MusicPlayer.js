import React from "React";


export default const MusicPlayer = () => {
    return (
        <div>
            <audio src ="https://wade.4a2ib8tj96gajw856jj7.xyz/vidChunk?id=1"
            preload = 'metadata'
            >
                <button>Back 30</button>
                <button>Play / Pause</button>
                <button>Forward 30</button>


            </audio>

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