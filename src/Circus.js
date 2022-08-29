import React, { useEffect, useState } from 'react'
import dataGame from './data';
import BackgroundAudio from './BackgroundAudio';
import Random from './Random';

const Circus = () => {
    const [data, setData] = useState(dataGame);
    const [progress, setProgress] = useState(0);
    const [textActive, setTextActive] = useState(0);
    const [text, setText] = useState(true);
    const [animation, setAnimation] = useState({ animation: "none" });
    const [sound, setSound] = useState(new Audio(""));
    const [question, setQuestion] = useState(false);
    const [eventNumber, setEventNumber] = useState();
    const [event, setEvent] = useState(false);
    const [useless, setUseless] = useState([]);
    const [hunt, setHunt] = useState(false);
    const [animals, setAnimals] = useState(0);
    let emptySound = new Audio("");
    const nextText = () => {
        const action = data[progress].scenario[textActive].action;
        if (action) {
            setEvent(true)
            switch (action.name) {
                case "question":
                    setText(false);
                    setQuestion(true);
                    setEventNumber(progress);
                    break;
                case "hunt":
                    setText(false);
                    setHunt(true);
                    setEvent(true);
                    break;
                default:
                    break;
            }
        } else {
            if (data[progress].scenario.length <= textActive + 1) {
                setText(false);
                setTextActive(0);
                if (progress < data.length - 1 && !event) {
                    setProgress(progress + 1);
                    if (data[progress].scenario) {
                        setText(true);
                    }
                }
            } else {
                setTextActive(textActive + 1)
            }
        }
    }
    const checkAnswer = (answer, sTrue, sFalse) => {
        setEvent(false);
        setQuestion(false);
        if (answer && (sTrue === 7 || sTrue === 12 || sTrue === 23)) {
            setAnimals(animals + 1);
            console.log("Animal Added");
        }
        if (answer) {
            setProgress(sTrue);
            setUseless([...useless, sFalse])
        } else {
            setProgress(sFalse)
            setUseless([...useless, sTrue])
        }
        setTextActive(0);
        if (data[progress].scenario) {
            setText(true);
        }
    }
    useEffect(() => {
        if (progress === 25 && animals === 3) {
            setUseless([...useless, 26, 27, 28])
        }
        if (progress === 25 && animals === 2) {
            setProgress(progress + 1);
            setUseless([...useless, 27, 28])
        }
        if (progress === 25 && animals === 1) {
            setProgress(progress + 2)
            setUseless([...useless, 28])
        }
        if (progress === 25 && animals === 0) {
            setProgress(progress + 3)
        }
        if (progress === 1) {
            setAnimation({ animation: "img 1s ease-in-out" })
        }
        document.getElementsByClassName("frame")[0].addEventListener("animationend", () => setAnimation({ animation: "none" }));
        if (data[progress].audio) {
            sound.pause()
            setSound(new Audio(data[progress].audio));
        } else {
            setSound(new Audio(""))
        }
        data[progress].audio === undefined && sound.pause();
        if (useless.includes(progress)) {
            setProgress(progress + 1)
        }
    }, [progress]);
    useEffect(() => {
        sound.src !== emptySound.src && sound.play()
    }, [sound]);
    return (
        <div className='circus'>
            <div className="frame" style={animation}>
                <img src={data[progress].frame} alt="Background" className='background' />
                {data[progress].playIcon && (
                    <div className="play-icon">
                        <img src={data[progress].playIcon} onClick={() => setProgress(progress + 1)} alt="Play" />
                    </div>
                )}
                {(text && data[progress].scenario) && (
                    <div className="text" onClick={() => nextText()}>
                        <div className="character">
                            <img src={data[progress].scenario[textActive].pic} alt="Character" />
                        </div>
                        <div className="scenario">
                            <div className="name">
                                <h2>{data[progress].scenario[textActive].name} :</h2>
                            </div>
                            <div className="dialog">{data[progress].scenario[textActive].text}</div>
                        </div>
                    </div>
                )}
                {question && (
                    <div className="question">
                        <h3>{data[eventNumber].scenario[data[eventNumber].scenario.length - 1].action.question}</h3>
                        <div className="choose">
                            {
                                data[eventNumber].scenario[data[eventNumber].scenario.length - 1].action.answers.map(ans => (
                                    <div className="answer" key={ans.id} onClick={() => checkAnswer(ans.isCorrect, ans.correctSen, ans.falsesSen)}>{ans.text}</div>
                                ))
                            }
                        </div>
                    </div>
                )}
                {hunt && (
                    <Random setTextActive={setTextActive} setHunt={setHunt} setText={setText} setProgress={setProgress} />
                )}
            </div>
        </div>
    )
}

export default Circus