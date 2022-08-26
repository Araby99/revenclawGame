import React, { useEffect, useState } from 'react'
import { useDrop } from 'react-dnd';
import El from './El';
import Pic from './Pic';


const Card = () => {
    const data = [
        {
            id: 1,
            style: { background: "#f00" }
        },
        {
            id: 2,
            style: { background: "#0f0" }
        },
        {
            id: 3,
            style: { background: "#00f" }
        },
    ]

    const [filterd, setFilterd] = useState([])
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "BOX",
        drop: (item) => addBox(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))
    const [{ isTrash }, trash] = useDrop(() => ({
        accept: "TRASH",
        drop: (item) => removeBox(item.id),
        collect: (monitor) => ({
            isTrash: !!monitor.isOver()
        })
    }))
    const addBox = (item) => {
        const newObj = data.filter(el => item === el.id);
        !filterd.some(item => item.id === newObj[0].id) && setFilterd(el => [...el, newObj[0]]);
    }
    const removeBox = (item) => {
        //setFilterd(filterd.filter(e => e.id === item))
        console.log(item);
        console.log(filterd);
    }
    return (
        <div>
            {data.map(el => <Pic key={el.id} id={el.id} style={el.style} />)}
            <div ref={drop} className="box">
                {filterd.map(el => (
                    <El key={el.id} id={el.id} style={el.style}></El>
                ))}
            </div>
            <div className="trash" ref={trash}>

            </div>
        </div>
    )
}

export default Card;