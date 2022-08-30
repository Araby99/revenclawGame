import React, { useEffect, useState } from 'react'
import data from './data';
import Random from './Random';
import useLocalStorage from './useLocalStorage';

const Circus = () => {
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

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
        setHunt(false)
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
        if (answer && (sTrue === 7 || sTrue === 12 || sTrue === 23)) {
            setAnimals(animals + 1);
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
                <img src={images[data[progress].frame]} alt="Background" className='background' />
                {data[progress].playIcon && (
                    <div className="play-icon">
                        <img src={images[data[progress].playIcon]} onClick={() => setProgress(progress + 1)} alt="Play" />
                    </div>
                )}
                {(text && data[progress].scenario) && (
                    <div className="text" onClick={() => nextText()}>
                        <div className="character">
                            <img src={images[data[progress].scenario[textActive].pic]} alt="Character" />
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