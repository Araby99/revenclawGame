import React from 'react';
import { useDrag } from 'react-dnd/dist/hooks';

const El = ({ style, id }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "TRASH",
        item: {
            id: id
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    return (
        <div ref={drag} className="target" style={style}></div>
    )
}

export default El