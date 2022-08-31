import React, { useEffect, useState } from 'react'

const Random = ({ images, setHunt, setProgress, setText, setTextActive }) => {
    const [style, setStyle] = useState({ top: "50%", left: "50%" });
    const [score, setScore] = useState(0)
    useEffect(() => {
        const dataGen = setInterval(() => {
            setStyle({
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`
            })
        }, 1000);

        return () => {
            clearInterval(dataGen);
        }
    }, []);
    const handleClick = () => {
        setScore(score + 1)
    }
    useEffect(() => {
        if (score === 10) {
            setHunt(false);
            setProgress(7);
            setText(true);
            setTextActive(0)
        }
    }, [score])


    return (
        <div className='random'>
            <div className="score">
                <progress max={100} value={100 - score * 10}></progress>
            </div>
            <div className="target" style={style} onClick={handleClick}>
                <img src={images['beast-1.png']} alt="Bird" />
            </div>
        </div>
    )
}

export default Random