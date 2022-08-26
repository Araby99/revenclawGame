import React, { useEffect, useState } from 'react'

const Random = () => {
    const [style, setStyle] = useState({ top: 0, left: 0 });
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
        console.log(style);
    }, [style])

    return (
        <div className='random'>
            <div className="score">
                Score: {score}
            </div>
            <div className="target" style={style} onClick={handleClick}></div>
        </div>
    )
}

export default Random