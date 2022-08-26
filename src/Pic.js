import React from 'react';
import { useDrag } from 'react-dnd/dist/hooks';

const Pic = ({ style, id }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "BOX",
        item: {
            id: id
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    return (
        <div>
            <div ref={drag} className="target" style={style}></div>
        </div>
    )
}

export default Pic