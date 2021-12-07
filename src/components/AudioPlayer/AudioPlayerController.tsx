import { RefObject } from "react";

type ControllProps = {
    audioPlayer: RefObject<HTMLAudioElement | null>
};

const AudioPlayerController = ({ audioPlayer } : ControllProps) => {
    const jump10Seconds = () => {
        if (audioPlayer !== null && audioPlayer.current) {
            audioPlayer.current.currentTime += 10;
        }
    };
    return (
        <div>
            <button onClick={jump10Seconds}></button>
        </div>
    );
};
//onClick={()=>{jum10Seconds}}
export default AudioPlayerController;