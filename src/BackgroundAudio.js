import React, { useEffect } from 'react';

const BackgroundAudio = ({ sound, progress }) => {
    const audio = new Audio(sound);
    useEffect(() => {
        audio.play();
    }, [progress])
    return (
        <div className='background-audio'>
        </div>
    )
}

export default BackgroundAudio