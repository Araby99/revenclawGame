const data = {
    allScences: [
        {
            id: 0,
            name: "hagrid",
            background: "https://www.cgarchitect.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMW94QVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--773115e16e769a5a3c7e96962bc33f36d9262433/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9VY21WemFYcGxYM1J2WDJ4cGJXbDBXd2RwQWxZRk1Eb0tjMkYyWlhKN0Jqb01jWFZoYkdsMGVXbGsiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--a140f81341e053a34b77dbf5e04e777cacb11aff/b0444851.jpg",
            thumbnail: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/10/17/09/Harry-Potter-Hagrid.jpg?quality=75&width=982&height=726&auto=webp",
            activate: true
        },
        {
            id: 1,
            name: "forest",
            background: "https://www.treehugger.com/thmb/QolJfOYFmxwIH6Sxv5SBqY8Kq-M=/1885x1414/smart/filters:no_upscale()/GettyImages-1273584292-cbcd5f85f4c646d58f7a7fa158dcaaeb.jpg",
            thumbnail: "https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/master/pass/BlackForest-Germany-GettyImages-147180370.jpg",
            activate: false
        },
        {
            id: 2,
            name: "lake",
            background: "https://i.natgeofe.com/n/3f2a2e55-47f9-4dda-9f03-bbbd4e9d343e/Trav%20Lake%20GettyImages-909708218_4x3.jpg",
            thumbnail: "https://cdn.britannica.com/97/158797-050-ABECB32F/North-Cascades-National-Park-Lake-Ann-park.jpg?w=400&h=300&c=crop",
            activate: false
        },
    ],
    scenarios: [
        {
            id: 0,
            scenario: [
                {
                    name: "hagrid",
                    pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                    text: "Hi there ! I am Hagrid",
                },
                {
                    name: "hagrid",
                    pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                    text: "You can go to the forest Now",
                    action: {
                        name: "sceneChanges",
                        sceneName: "forest",
                        sceneStatue: true
                    }
                }
            ],
            activate: true,
            done: false
        },
        {
            id: 1,
            scenario: [
                {
                    name: "hagrid",
                    pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                    text: "Welcome Again",
                },
                {
                    name: "hagrid",
                    pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                    text: "This is the forest",
                }
            ],
            activate: false,
            done: false
        }
    ]
}

export default data;