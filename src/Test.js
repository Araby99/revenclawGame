import React from 'react';

const test = () => {
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));
    console.log(images);
    return (
        <div>
            {<img src={images['frame-0.png']} alt="" />}
        </div>
    )
}

export default test