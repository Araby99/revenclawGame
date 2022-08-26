import React, { useEffect, useState } from 'react'

const Game = ({ storyData }) => {
    const [data, setData] = useState(storyData);
    const [allScences, setAllScences] = useState(data.allScences)
    const [scenarios, setScenarios] = useState(data.scenarios);
    const [scenceActive, setScenceActive] = useState("hagrid");
    const [textActive, setTextActive] = useState(0);
    const nextText = (id, length) => {
        const action = scenarios.filter(e => e.activate)[0].scenario[textActive].action;
        if (length <= textActive + 1) {
            changeScenarioActive(id, false, true);
            setTextActive(0)
        } else {
            setTextActive(textActive + 1)
        }
        if (action) {
            switch (action.name) {
                case "sceneChanges":
                    changeSceneActive(action.sceneName, action.sceneStatue)
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

    const changeScenarioActive = (id, statue, done) => {
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
    useEffect(() => {
        if (scenceActive === "forest" && scenarios[0].done) {
            changeScenarioActive(1, true, undefined);
        } else {
            changeScenarioActive(1, false, undefined);
        }
    }, [scenceActive]);
    return (
        <div className='game'>
            {allScences.filter(e => e.name === scenceActive).map(e => (
                <div className="background" key={e.id}>
                    <img src={e.background} alt="Background" />
                </div>
            ))}
            <div className="nav">
                {allScences.filter(e => e.activate).map(e => (
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
        </div>
    )
}

export default Game