import React, { useEffect, useState } from 'react';
import Random from './Random';

const Game = ({ storyData }) => {
    const [data, setData] = useState(storyData);
    const [allScences, setAllScences] = useState(data.allScences)
    const [scenarios, setScenarios] = useState(data.scenarios);
    const [game, setGame] = useState(data.games);
    const [scenceActive, setScenceActive] = useState("hagrid");
    const [textActive, setTextActive] = useState(0);
    const [eventStart, setEventStart] = useState(true)
    const [dragonGame, setDragonGame] = useState(false);
    const [choice, setChoice] = useState(false);
    const [choiceNumber, setChoiceNumber] = useState(0);
    const [lastChoice, setLastChoice] = useState("")
    const nextText = (id, length) => {
        const action = scenarios.filter(e => e.activate)[0].scenario[textActive].action;
        if (length <= textActive + 1) {
            changeScenarioActive(id, false, true);
            setTextActive(0);
            setEventStart(false);
        } else {
            setTextActive(textActive + 1)
        }
        if (action) {
            switch (action.name) {
                case "sceneChanges":
                    changeSceneActive(action.sceneName, action.sceneStatue)
                    break;
                case "hitDragon":
                    setEventStart(true)
                    setDragonGame(true);
                    break;
                case "choose":
                    setChoice(true);
                    setChoiceNumber(id);
                    setEventStart(true);
                    break;
                default:
                    break;
            }
        }
    }
    const changeSceneActive = (name, statue) => {
        const newState = allScences.map(obj => {
            if (obj.name === name) {
                return { ...obj, activate: statue };
            }
            return obj;
        });
        setAllScences(newState)
    }
    const changeGameDone = (name) => {
        const newState = game.map(obj => {
            if (obj.name === name) {
                return { ...obj, success: true };
            }
            return obj;
        });
        setGame(newState)
    }

    const changeScenarioActive = (id, statue, done) => {
        setEventStart(true);
        const newState = scenarios.map(obj => {
            if (obj.id === id && done !== undefined) {
                return { ...obj, activate: statue, done: done };
            } else if (obj.id === id) {
                return { ...obj, activate: statue };
            }
            return obj;
        });
        setScenarios(newState);
    }
    const takeChoice = (last, sceneName, sceneStatue) => {
        setEventStart(false);
        setChoice(false);
        setLastChoice(last);
        if (sceneName !== undefined) {
            changeSceneActive(sceneName, sceneStatue)
        }
    }
    useEffect(() => {
        if (scenceActive === "forest" && scenarios[0].done && !scenarios[1].done) {
            changeScenarioActive(1, true, undefined);

        } else if (scenceActive === "lake" && lastChoice === "Go to Lake" && !scenarios[4].done) {
            changeScenarioActive(4, true, undefined);

        }
    }, [scenceActive]);
    /*useEffect(() => {
        if (scenceActive === "lake" && lastChoice === "Go to Lake" && !scenarios[4].done) {
            changeScenarioActive(4, true, undefined);
        } else {
            changeScenarioActive(4, false, undefined);
        }
    }, [scenceActive])*/

    useEffect(() => {
        game[0].success && changeScenarioActive(3, true, undefined);
    }, [game])
    return (
        <div className='game'>
            {allScences.filter(e => e.name === scenceActive).map(e => (
                <div className="background" key={e.id}>
                    <img src={e.background} alt="Background" />
                </div>
            ))}
            <div className="nav">
                {!eventStart && allScences.filter(e => e.activate).map(e => (
                    <div className="nav-box" key={e.id}>
                        <img src={e.thumbnail} alt="Thumbnail" onClick={() => setScenceActive(e.name)} />
                    </div>
                ))}
            </div>
            {scenarios.filter(e => e.activate === true).length > 0 && (
                <>
                    {
                        scenarios.filter(e => e.activate === true).map(e => (
                            <div className="scenarios" key={e.id} onClick={() => nextText(e.id, e.scenario.length)} >
                                <div className="character">
                                    <img src={e.scenario[textActive].pic} alt={e.scenario[textActive].name} />
                                </div>
                                <div className="text">
                                    <h3>{e.scenario[textActive].name}</h3>
                                    <p>{e.scenario[textActive].text}</p>
                                </div>
                            </div>
                        ))
                    }
                </>
            )}
            {(scenarios[1].done && !scenarios[2].activate && !scenarios[2].done) && (
                <div className="animal">
                    <img src="https://i.pinimg.com/originals/60/8b/f9/608bf91fae128a3721c1e45c2061e3f7.png" alt='Animal' onClick={() => changeScenarioActive(2, true, undefined)} />
                </div>
            )}
            {dragonGame && <Random setDragonGame={setDragonGame} setEventStart={setEventStart} changeGameDone={changeGameDone} />}
            {choice && (
                <div className="choices">
                    {
                        scenarios[choiceNumber].scenario[scenarios[choiceNumber].scenario.length - 1].action.choices.map(e => (
                            <div className='choice' key={e.id} onClick={() => takeChoice(e.text, e.event.sceneName, e.event.sceneStatue)}>{e.text}</div>
                        ))
                    }
                </div>
            )}
            {(scenarios[4].done && scenceActive === "hagrid" && !eventStart) && (
                <div className="hagrid">
                    <img src="https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png" alt="Hagrid" onClick={() => changeScenarioActive(5, true, undefined)} />
                </div>
            )}
        </div>
    )
}

export default Game