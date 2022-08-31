import React, { useEffect, useState } from 'react'
import gameData from './data';
import Random from './Random';
import useLocalStorage from './useLocalStorage';

const Circus = () => {
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    const [data, setData] = useState(gameData)
    const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));
    const [progress, setProgress] = useLocalStorage("progress", () => 0);
    const [textActive, setTextActive] = useLocalStorage("textActive", () => 0);
    const [text, setText] = useLocalStorage("text", () => true);
    const [animation, setAnimation] = useState({ animation: "none" });
    const [sound, setSound] = useState(new Audio(""));
    const [question, setQuestion] = useLocalStorage("question", () => false);
    const [eventNumber, setEventNumber] = useLocalStorage("eventNumber", () => 0);
    const [event, setEvent] = useLocalStorage("event", () => false);
    const [useless, setUseless] = useLocalStorage("useless", () => []);
    const [hunt, setHunt] = useLocalStorage("hunt", () => false);
    const [animals, setAnimals] = useLocalStorage("animals", () => 0);
    const [gameOver, setGameOver] = useLocalStorage("gameOver", () => false);
    let emptySound = new Audio("");
    const gameover = () => {
        setProgress(0);
        setGameOver(false);
        setUseless([]);
        setAnimals(0);
        setTextActive(0);
        setText(true);
        setQuestion(false);
        setEventNumber(0);
        setEvent(false);
        setHunt(false);
        localStorage.clear()
    }
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
                case "gameOver":
                    setGameOver(true)
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
        if (answer && (sTrue === 8 || sTrue === 13 || sTrue === 24)) {
            setAnimals(animals + 1);
        }
        if (answer) {
            setUseless([...useless, sFalse])
            setProgress(progress + 1)
        } else {
            setUseless([...useless, sTrue])
            setProgress(progress + 1)
        }
        setTextActive(0);
        if (data[progress].scenario) {
            setText(true);
        }
    }

    useEffect(() => {
        sound.pause()
        if ((data[progress].id === 24 || data[progress].id === 25) && animals === 3) {
            sound.pause()
            setUseless([...useless, 27, 28, 29])
        }
        if ((data[progress].id === 24 || data[progress].id === 25) && animals === 2) {
            sound.pause()
            setUseless([...useless, 26, 28, 29])
        }
        if ((data[progress].id === 24 || data[progress].id === 25) && animals === 1) {
            sound.pause()
            setUseless([...useless, 26, 27, 29])
        }
        if ((data[progress].id === 24 || data[progress].id === 25) && animals === 0) {
            sound.pause()
            setUseless([...useless, 26, 27, 28])
        }
        if (progress === 1) {
            setAnimation({ animation: "img 1s ease-in-out" })
        }
        document.getElementsByClassName("frame")[0].addEventListener("animationend", () => setAnimation({ animation: "none" }));
        if (data[progress].scenario && !useless.includes(data[progress].id)) {
            sound.pause()
            if (data[progress].scenario[textActive].audio) {
                setSound(new Audio(data[progress].scenario[textActive].audio));
                data[progress].scenario[textActive].audio === undefined && sound.pause();
            } else {
                setSound(new Audio(""))
            }
        } else {
            setSound(new Audio(""))
        }
    }, [progress]);
    useEffect(() => {
        sound.pause()
        if (data[progress].scenario && !useless.includes(data[progress].id)) {
            if (data[progress].scenario[textActive].audio) {
                setSound(new Audio(data[progress].scenario[textActive].audio));
                data[progress].scenario[textActive].audio === undefined && sound.pause();
            } else {
                setSound(new Audio(""))
            }
        } else {
            setSound(new Audio(""))
        }
    }, [textActive])

    useEffect(() => {
        if (sound.src !== emptySound.src) {
            sound.play();
        }
    }, [sound]);
    useEffect(() => {
        const newState = data.filter(e => !useless.includes(e.id));
        setData(newState)
    }, [useless])

    return (
        <div className='circus'>
            <div className="frame" style={animation}>
                <img src={images[data[progress].frame]} alt="Background" className='background' />
                {data[progress].playIcon && (
                    <div className="play-icon">
                        <img src={images[data[progress].playIcon]} onClick={() => setProgress(progress + 1)} alt="Play" />
                    </div>
                )}
                {(text && data[progress].scenario) && (
                    <div className="text" onClick={() => nextText()}>
                        {data[progress].scenario[textActive].pic && (

                            <div className="character">
                                <img src={images[data[progress].scenario[textActive].pic]} alt="Character" />
                            </div>
                        )}
                        <div className="scenario">
                            {data[progress].scenario[textActive].name && (

                                <div className="name">
                                    <h2>{data[progress].scenario[textActive].name} :</h2>
                                </div>
                            )}
                            <div className="dialog">
                                {
                                    data[progress].scenario[textActive].text
                                }
                            </div>
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
                    <Random images={images} setTextActive={setTextActive} setHunt={setHunt} setText={setText} setProgress={setProgress} />
                )}
                {gameOver && (
                    <div className="game-over">
                        <h1>اللعبة إنتهت !</h1>
                        <h3>لقد استطعت إنقاذ {animals} من إجمال 3 حيوانات</h3>
                        <button onClick={() => gameover()}>العب مجدداً</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Circus