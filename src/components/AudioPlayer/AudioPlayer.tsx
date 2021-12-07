import { forwardRef } from "react";

type PlayerProps = {
    src: string;

};

const Player = forwardRef<HTMLAudioElement, PlayerProps>(({ src },ref) => {
    return (
        <audio 
        ref={ref} 
        src={src}
        controls={true}>
            This browser does not support the <code>audio</code> tag.
        </audio>
    );
});

export default Player;


/*
we want to demonstratr basic usage of a forwardRef from this component
to imperitively control the component

this component can be passed to other components within the component tree
passing refenence down to a different parent component that will initiate the component must be fowardeed to th chil component

and 



*/