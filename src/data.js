const data = [
    {
        id: 0,
        frame: "./img/frame-0.png",
        playIcon: "./img/play.png"
    },
    {
        id: 1,
        frame: "./img/frame-1.png",
        scenario: [
            {
                name: "الجمهور",
                pic: "https://cdn4.iconfinder.com/data/icons/social-media-3/512/User_Group-512.png",
                text: "*صوت تصفيق*",
            },
        ]
    },
    {
        id: 2,
        frame: "./img/frame-0.png",
        scenario: [
            {
                name: "الشاب",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "سأغلق الأقفاص جيداً كما طلب مني السيد روبرت",
            },
        ]
    },
    {
        id: 3,
        frame: "https://wallpaperaccess.com/full/109666.jpg",
        scenario: [
            {
                name: "الشاب",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "اللعنة….  لقد هربت الحيوانات."
            },
        ]
    },
    {
        id: 4,
        frame: "https://wallpaperaccess.com/full/109666.jpg",
        scenario: [
            {
                name: "الساحر",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "ما الذي حدث هنا؛ وكيف هربت تلك الحيوانات الثلاثة؟"
            },
            {
                name: "الساحرة",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "إنه العامل الجديد كان من المفترض أن يتأكد من سلامتها ومن إغلاق الأقفاص، لكنه أخافها وتسبب في هربها"
            },
            {
                name: "الساحر",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "يجب أن نسرع ونعيد تلك الحيوانات حتى لا نفقدها نهائياً."
            },
            {
                name: "الساحرة",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "أتفق معك، لذا دعنا نبدأ من هذا الجانب، لقد شاهدت  Fwooper  وهو  يطير من هذا الاتجاه  لابد أنه لم يبتعد عن المنطقة، من الجيد أنه قد تم وضع تعويذة الصمت عليه قبل أسبوع"
            },
            {
                name: "الساحر",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "هذا من حسن الحظ وإلا أصابنا الجنون، سيكون العثور عليه صعب ولكن  لونه الأصفر الزاهي قد يساعدنا في العثور عليه."
            },
        ]
    },
    {
        id: 5,
        frame: "https://wallpaperaccess.com/full/109666.jpg",
        scenario: [
            {
                name: "الساحرة",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "انظر إنه هناك."
            },
            {
                name: "الساحرة",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "لقد رأيته إنه هو حيوان ال fwooper  يجب أن نمسك به الآن قبل أن يطير مبتعداً  ؛  ولاكن كيف سنقوم بالامساك به. ",
                action: {
                    name: "hunt",
                }
            },
        ]
    },
    {
        id: 6,
        frame: "https://wallpaperaccess.com/full/109666.jpg",
        scenario: [
            {
                name: "الساحرة",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "احترس ! الطائر يسقط ! اختر تعويذتك قبل أن يقع على الأرض و يموت.",
                action: {
                    name: "question",
                    question: "Select the charm",
                    answers: [
                        {
                            id: 0,
                            text: "Alohomora",
                            isCorrect: false,
                            correctSen: 7,
                            falsesSen: 8
                        },
                        {
                            id: 1,
                            text: "Accio",
                            isCorrect: false,
                            correctSen: 7,
                            falsesSen: 8
                        },
                        {
                            id: 2,
                            text: "Chusioing",
                            isCorrect: true,
                            correctSen: 7,
                            falsesSen: 8
                        },
                        {
                            id: 3,
                            text: "Incendio",
                            isCorrect: false,
                            correctSen: 7,
                            falsesSen: 8
                        },
                    ]
                }
            }
        ]
    },
    {
        id: 7,
        frame: "https://wallpaperaccess.com/full/109666.jpg",
        scenario: [
            {
                name: "الساحرة",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "لقد كان العثور علي هذا الحيوان صعب للغاية، لا أصدق أنه مازال علينا البحث عن الأخرين لاستعادتهم. "
            },
            {
                name: "الساحر",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "سأقتل هذا العامل المبتدئ بيدي أو سأهديه للديمناتورات."
            },
            {
                name: "الساحرة",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: " مالذي سنفله الأن؟"
            },
            {
                name: "الساحر",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "علينا العودة إلى السيرك لنبدأ البحث من جديد عن دليل يقودنا إليهم."
            },
            {
                name: "الساحرة",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "حسنا أسرع سنعود إلى هناك."
            },

        ]
    },
    {
        id: 8,
        frame: "https://wallpaperaccess.com/full/109666.jpg",
        scenario: [
            {
                name: "الساحرة",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "حقاً !! لقد قتلته."
            },
            {
                name: "الساحرة",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: " مالذي سنفله الأن؟"
            },
            {
                name: "الساحر",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "علينا العودة إلى السيرك لنبدأ البحث من جديد عن دليل يقودنا إليهم."
            },
            {
                name: "الساحرة",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "حسنا أسرع سنعود إلى هناك."
            },

        ]
    },
    {
        id: 9,
        frame: "https://wallpaperaccess.com/full/109666.jpg",
        scenario: [
            {
                name: "الساحر",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "انظري، أعتقد أن هذه أثار أقدام حيوان"
            },
            {
                name: "الساحرة",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "أوه، جيد  إنها أربعة أقدام، لابد أنه حيوان ال Mooncalf"
            },
            {
                name: "الساحر",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "رائع لنتتبع الاثار ربما لم يبتعد كثيراً."
            }
        ]
    },
    {
        id: 10,
        frame: "https://wallpaperaccess.com/full/109666.jpg",
        scenario: [
            {
                name: "الساحرة",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: " احترس فأنت تقف فوق روث الـ  mooncalf   لابد وأنه قريب جداً من هنا"
            },
            {
                name: "الساحر",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "مقزز.. الان سأطعم نفسي للديمناتورات أنا الأخر."
            },
        ]
    },
    {
        id: 11,
        frame: "https://wallpaperaccess.com/full/109666.jpg",
        scenario: [
            {
                name: "الساحرة",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "ها قد عثرنا عليه ولاكن ماهذا ؟ ماهذه الحركات الغريبة التي يقوم بها ؟ "
            },
            {
                name: "الساحر",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "اللعنة إنها رقصة التزاوج الخاصة به، ربما يعتقد بأنه رأى أنثى من فصيلته."
            },
            {
                name: "الساحرة",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "إذن ماذا سنفعل؟"
            },
            {
                name: "الساحر",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "عليك بتشتيت انتباهه حتى أتمكن من الإمساك به.",
                action: {
                    name: "question",
                    question: "Select the charm",
                    answers: [
                        {
                            id: 0,
                            text: "Alohomora",
                            isCorrect: false,
                            correctSen: 12,
                            falsesSen: 13
                        },
                        {
                            id: 1,
                            text: "Accio",
                            isCorrect: false,
                            correctSen: 12,
                            falsesSen: 13
                        },
                        {
                            id: 2,
                            text: "Chusioing",
                            isCorrect: true,
                            correctSen: 12,
                            falsesSen: 13
                        },
                        {
                            id: 3,
                            text: "Incendio",
                            isCorrect: false,
                            correctSen: 12,
                            falsesSen: 13
                        },
                    ]
                }
            },
        ]
    },
    {
        id: 12,
        frame: "https://wallpaperaccess.com/full/109666.jpg",
        scenario: [
            {
                name: "الساحر",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "Petrificus Totalus"
            },
        ]
    },
    {
        id: 13,
        frame: "https://wallpaperaccess.com/full/109666.jpg",
        scenario: [
            {
                name: "الساحر",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "معاك غيره ؟"
            },
            {
                name: "الساحرة",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "يخرب بيتك انت ضيعته"
            },
        ]
    },
    {
        id: 14,
        frame: "https://wallpaperaccess.com/full/109666.jpg",
        scenario: [
            {
                name: "الساحر",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: " لم يتبقى سوى حيوان واحد فقط."
            },
            {
                name: "الساحرة",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "أتمنى أن نتمكن من الإمساك به سريعاً. "
            },
            {
                name: "الساحر",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: " أعتقد بأنني أعرف أين يوجد هذا المشاكس."
            },
        ]
    },
    {
        id: 15,
        frame: "https://wallpaperaccess.com/full/109666.jpg",
        scenario: [
            {
                name: "الساحر",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "هيا بنا"
            },
        ]
    },
    {
        id: 16,
        frame: "https://wallpaperaccess.com/full/109666.jpg",
        scenario: [
            {
                name: "الساحر",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "Aguamente"
            },
        ]
    },
    {
        id: 17,
        frame: "https://wallpaperaccess.com/full/109666.jpg",
        scenario: [
            {
                name: "الحيوان",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "أحمق أحمق… تبا لك"
            },
            {
                name: "الساحر",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "ها هو سليط اللسان قد ظهر."
            },
            {
                name: "الحيوان",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "اللعنة عليك.",
                action: {
                    name: "question",
                    question: "Select the charm",
                    answers: [
                        {
                            id: 0,
                            text: "Alohomora",
                            isCorrect: false,
                            correctSen: 50000,
                            falsesSen: 18
                        },
                        {
                            id: 1,
                            text: "Accio",
                            isCorrect: false,
                            correctSen: 50000,
                            falsesSen: 18
                        },
                        {
                            id: 3,
                            text: "Incendio",
                            isCorrect: false,
                            correctSen: 50000,
                            falsesSen: 18
                        },
                    ]
                }
            },
        ]
    },
    {
        id: 18,
        frame: "https://wallpaperaccess.com/full/109666.jpg",
        audio: "https://cdn.pixabay.com/download/audio/2022/03/11/audio_e657e07552.mp3?filename=evil-laugh-49831.mp3",
        scenario: [
            {
                name: "الحيوان",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "ها ها ها ها ها ها "
            },
        ]
    },
    {
        id: 19,
        frame: "https://wallpaperaccess.com/full/109666.jpg",
        scenario: [
            {
                name: "الساحرة",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "انتظر، أعتقد أنه بإمكاني مساعدتك لنمسك به."
            },
        ]
    },
    {
        id: 20,
        frame: "https://wallpaperaccess.com/full/109666.jpg",
        scenario: [
            {
                name: "الساحرة",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "هثث هثث أنا الثعبان"
            },
        ]
    },
    {
        id: 21,
        frame: "https://wallpaperaccess.com/full/109666.jpg",
        scenario: [
            {
                name: "الساحرة",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "...."
            },
        ]
    },
    {
        id: 22,
        frame: "https://wallpaperaccess.com/full/109666.jpg",
        scenario: [
            {
                name: "الساحر",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "سوف أنهي الأمر الآن أيها المشاكس",
                action: {
                    name: "question",
                    question: "Select the charm",
                    answers: [
                        {
                            id: 0,
                            text: "Alohomora",
                            isCorrect: false,
                            correctSen: 23,
                            falsesSen: 24
                        },
                        {
                            id: 1,
                            text: "Accio",
                            isCorrect: false,
                            correctSen: 23,
                            falsesSen: 24
                        },
                        {
                            id: 3,
                            text: "Petrificus Totalus",
                            isCorrect: true,
                            correctSen: 23,
                            falsesSen: 24
                        },
                    ]
                }
            },
        ]
    },
    {
        id: 23,
        frame: "https://wallpaperaccess.com/full/109666.jpg",
        scenario: [
            {
                name: "الساحر",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "و أخيراً هذا المشاكس في القفص !"
            },
        ]
    },
    {
        id: 24,
        frame: "https://wallpaperaccess.com/full/109666.jpg",
        scenario: [
            {
                name: "الساحر",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "!"
            },
        ]
    },
    {
        id: 25,
        frame: "https://wallpaperaccess.com/full/109666.jpg",
        scenario: [
            {
                name: "الساحر",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "ثلاث حيوانات استرجعت من أصل ثلاثة. رقم جيد أليس كذلك ؟"
            },
            {
                name: "الساحرة",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "هاها أخيراً أنتهى هذا الكابوس"
            },
        ]
    },
    {
        id: 26,
        frame: "https://wallpaperaccess.com/full/109666.jpg",
        scenario: [
            {
                name: "الساحر",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "حيوانان من أصل ثلاثة. رقم لا بأس به و إن كنت أتمنى إسترجاعهم كلهم"
            },
            {
                name: "الساحرة",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "هاها أخيراً أنتهى هذا الكابوس"
            },
        ]
    },
    {
        id: 27,
        frame: "https://wallpaperaccess.com/full/109666.jpg",
        scenario: [
            {
                name: "الساحر",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "حيوان واحد فقط استرجعناه ؟ رقم سيئ !"
            },
        ]
    },
    {
        id: 28,
        frame: "https://wallpaperaccess.com/full/109666.jpg",
        scenario: [
            {
                name: "الساحر",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "ليلة سيئة على الجميع، لم نستطع إسترجاع أي حيوان من الحيوانات التي هربت !"
            },
        ]
    },
    {
        id: 29,
        frame: "https://wallpaperaccess.com/full/109666.jpg",
        scenario: [
            {
                name: "الساحر",
                pic: "https://www.pngitem.com/pimgs/m/541-5416785_hagrid-hagrid-harry-potter-hd-png-download.png",
                text: "انتهت اللعبة ! أتمنى أن تكون قد أعجبتكم :)",
                action: {
                    name: "gameOver"
                }
            },
        ]
    }
]

export default data