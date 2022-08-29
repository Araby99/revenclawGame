import React, { useEffect, useState } from 'react'

const Random = ({ setHunt, setProgress, setText, setTextActive }) => {
    const [style, setStyle] = useState({ top: "50%", left: "50%" });
    const [score, setScore] = useState(0)
    useEffect(() => {
        const dataGen = setInterval(() => {
            setStyle({
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`
            })
        }, 2000);

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
            setProgress(6);
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
                <img src="https://i.pinimg.com/originals/60/8b/f9/608bf91fae128a3721c1e45c2061e3f7.png" alt="Dragon" />
            </div>
        </div>
    )
}

export default Random