//import * as classes from '../components/Counter/Counter.module.css';
import './Counter.module.css';
//import sampletrack from '../assets/' '../assets/samplemp3.wav';
import CounterControl from './CounterControl';
import CounterDisplay from './CounterDisplay';
import { useCounter } from '../../store/CounterContext';


import AudioPlayerController from '../AudioPlayer/AudioPlayerController';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import { useRef } from 'react';

const STATIC_URL = '/samplemp3.mp3';

const Counter = () => {

    const { state, dispatch } = useCounter();
    const audioPlayer = useRef<HTMLAudioElement | null>(null);
    return (
        <>
            <code>Counter</code>
            <CounterDisplay {...state}/>
            <CounterControl handler={dispatch}/>
            <code>Audio Player</code>
            <AudioPlayer ref={audioPlayer} src={STATIC_URL}></AudioPlayer>
            <AudioPlayerController audioPlayer={audioPlayer}></AudioPlayerController>
        </>
    );
};

export default Counter;