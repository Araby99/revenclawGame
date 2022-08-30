const data = [
    {
        id: 0,
        frame: "frame-0.png",
        playIcon: "play.png"
    },
    {
        id: 1,
        frame: "frame-1.png",
        scenario: [
            {
                name: "الجمهور",
                pic: "group.png",
                text: "*صوت تصفيق*",
            },
        ]
    },
    {
        id: 2,
        frame: "frame-0.png",
        scenario: [
            {
                name: "الشاب",
                pic: "youth.png",
                text: "سأغلق الأقفاص جيداً كما طلب مني السيد روبرت",
            },
        ]
    },
    {
        id: 3,
        frame: "frame-0.png",
        scenario: [
            {
                name: "الشاب",
                pic: "youth.png",
                text: "اللعنة…. لقد هربت الحيوانات."
            },
        ]
    },
    {
        id: 4,
        frame: "frame-0.png",
        scenario: [
            {
                name: "الساحر",
                pic: "male.png",
                text: "ما الذي حدث هنا؛ وكيف هربت تلك الحيوانات الثلاثة؟"
            },
            {
                name: "الساحرة",
                pic: "female.png",
                text: "إنه العامل الجديد كان من المفترض أن يتأكد من سلامتها ومن إغلاق الأقفاص، لكنه أخافها وتسبب في هربها"
            },
            {
                name: "الساحر",
                pic: "male.png",
                text: "يجب أن نسرع ونعيد تلك الحيوانات حتى لا نفقدها نهائياً."
            },
            {
                name: "الساحرة",
                pic: "female.png",
                text: "أتفق معك، لذا دعنا نبدأ من هذا الجانب، لقد شاهدت  Fwooper  وهو  يطير من هذا الاتجاه  لابد أنه لم يبتعد عن المنطقة، من الجيد أنه قد تم وضع تعويذة الصمت عليه قبل أسبوع"
            },
            {
                name: "الساحر",
                pic: "male.png",
                text: "هذا من حسن الحظ وإلا أصابنا الجنون، سيكون العثور عليه صعب ولكن  لونه الأصفر الزاهي قد يساعدنا في العثور عليه."
            },
        ]
    },
    {
        id: 5,
        frame: "frame-5.jpg",
        scenario: [
            {
                name: "الساحرة",
                pic: "female.png",
                text: "انظر إنه هناك."
            },
            {
                name: "الساحرة",
                pic: "female.png",
                text: "لقد رأيته إنه هو حيوان ال fwooper  يجب أن نمسك به الآن قبل أن يطير مبتعداً  ؛  ولاكن كيف سنقوم بالامساك به. ",
                action: {
                    name: "hunt",
                }
            },
        ]
    },
    {
        id: 6,
        frame: "frame-0.png",
        scenario: [
            {
                name: "الساحر",
                pic: "male.png",
                text: "Incarcerous"
            },
            {
                name: "الساحرة",
                pic: "female.png",
                text: "احترس ! الطائر يسقط ! اختر تعويذتك قبل أن يقع على الأرض.",
                action: {
                    name: "question",
                    question: "Select the charm",
                    answers: [
                        {
                            id: 0,
                            text: "Molliare",
                            isCorrect: true,
                            correctSen: 7,
                            falsesSen: 8
                        },
                        {
                            id: 1,
                            text: "Finite Incantatem",
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
        frame: "frame-0.png",
        scenario: [
            {
                name: "الساحرة",
                pic: "female.png",
                text: "لقد كان العثور علي هذا الحيوان صعب للغاية، لا أصدق أنه مازال علينا البحث عن الأخرين لاستعادتهم. "
            },
            {
                name: "الساحر",
                pic: "male.png",
                text: "سأقتل هذا العامل المبتدئ بيدي أو سأهديه للديمناتورات."
            },
            {
                name: "الساحرة",
                pic: "female.png",
                text: " ما الذي سنفعله الأن؟"
            },
            {
                name: "الساحر",
                pic: "male.png",
                text: "علينا العودة إلى السيرك لنبدأ البحث من جديد عن دليل يقودنا إليهم."
            },
            {
                name: "الساحرة",
                pic: "female.png",
                text: "حسنا أسرع سنعود إلى هناك."
            },

        ]
    },
    {
        id: 8,
        frame: "frame-0.png",
        scenario: [
            {
                name: "الساحرة",
                pic: "female.png",
                text: "احترس !! لقد أبطلت تعويذة الصمت و هرب الحيوان"
            },
            {
                name: "الساحرة",
                pic: "female.png",
                text: " ما الذي سنفله الأن؟"
            },
            {
                name: "الساحر",
                pic: "male.png",
                text: "علينا العودة إلى السيرك لنبدأ البحث من جديد عن دليل يقودنا إليهم."
            },
            {
                name: "الساحرة",
                pic: "female.png",
                text: "حسنا أسرع سنعود إلى هناك."
            },

        ]
    },
    {
        id: 9,
        frame: "frame-0.png",
        scenario: [
            {
                name: "الساحر",
                pic: "male.png",
                text: "انظري، أعتقد أن هذه أثار أقدام حيوان"
            },
            {
                name: "الساحرة",
                pic: "female.png",
                text: "أوه، جيد  إنها أربعة أقدام، لابد أنه حيوان ال Mooncalf"
            },
            {
                name: "الساحر",
                pic: "male.png",
                text: "رائع لنتتبع الاثار ربما لم يبتعد كثيراً."
            }
        ]
    },
    {
        id: 10,
        frame: "frame-0.png",
        scenario: [
            {
                name: "الساحرة",
                pic: "female.png",
                text: " احترس فأنت تقف فوق روث الـ  mooncalf   لابد وأنه قريب جداً من هنا"
            },
            {
                name: "الساحر",
                pic: "male.png",
                text: "مقزز.. الان سأطعم نفسي للديمناتورات أنا الأخر."
            },
        ]
    },
    {
        id: 11,
        frame: "frame-0.png",
        scenario: [
            {
                name: "الساحرة",
                pic: "female.png",
                text: "ها قد عثرنا عليه ولاكن ماهذا ؟ ماهذه الحركات الغريبة التي يقوم بها ؟ "
            },
            {
                name: "الساحر",
                pic: "male.png",
                text: "اللعنة إنها رقصة التزاوج الخاصة به، ربما يعتقد بأنه رأى أنثى من فصيلته."
            },
            {
                name: "الساحرة",
                pic: "female.png",
                text: "إذن ماذا سنفعل؟"
            },
            {
                name: "الساحر",
                pic: "male.png",
                text: "عليك بتشتيت انتباهه حتى أتمكن من الإمساك به.",
                action: {
                    name: "question",
                    question: "Select the charm",
                    answers: [
                        {
                            id: 0,
                            text: "Reducio ",
                            isCorrect: false,
                            correctSen: 12,
                            falsesSen: 13
                        },
                        {
                            id: 1,
                            text: "Petrificus Totalus",
                            isCorrect: true,
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
        frame: "frame-0.png",
        scenario: [
            {
                name: "الساحرة",
                pic: "female.png",
                text: "سأقوم أنا بتشتيت إنتباهه بتحويل صخرة كبيرة إلى شكل عنزة ليقوم الحيوان بالانتباه إليها والجري نحوها"
            },
            {
                name: "الساحر",
                pic: "male.png",
                text: "Petrificus Totalus"
            },
        ]
    },
    {
        id: 13,
        frame: "frame-0.png",
        scenario: [
            {
                name: "الساحر",
                pic: "male.png",
                text: "معاك غيره ؟"
            },
            {
                name: "الساحرة",
                pic: "female.png",
                text: "يخرب بيتك انت ضيعته"
            },
            {
                name: "الساحرة",
                pic: "female.png",
                text: "لقد قمت بتصغير الوحش و الآن قد هرب !"
            }
        ]
    },
    {
        id: 14,
        frame: "frame-0.png",
        scenario: [
            {
                name: "الساحر",
                pic: "male.png",
                text: " لم يتبقى سوى حيوان واحد فقط."
            },
            {
                name: "الساحرة",
                pic: "female.png",
                text: "أتمنى أن نتمكن من الإمساك به سريعاً. "
            },
            {
                name: "الساحر",
                pic: "male.png",
                text: " أعتقد بأنني أعرف أين يوجد هذا المشاكس."
            },
        ]
    },
    {
        id: 15,
        frame: "frame-0.png",
        scenario: [
            {
                name: "الساحر",
                pic: "male.png",
                text: "هيا بنا"
            },
        ]
    },
    {
        id: 16,
        frame: "frame-0.png",
        scenario: [
            {
                name: "الساحر",
                pic: "male.png",
                text: "Aguamente"
            },
        ]
    },
    {
        id: 17,
        frame: "frame-0.png",
        scenario: [
            {
                name: "الحيوان",
                pic: "beast-3.png",
                text: "أحمق أحمق… تبا لك"
            },
            {
                name: "الساحر",
                pic: "male.png",
                text: "ها هو سليط اللسان قد ظهر."
            },
            {
                name: "الحيوان",
                pic: "beast-3.png",
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
        frame: "frame-0.png",
        audio: "https://cdn.pixabay.com/download/audio/2022/03/11/audio_e657e07552.mp3?filename=evil-laugh-49831.mp3",
        scenario: [
            {
                name: "الحيوان",
                pic: "beast-3.png",
                text: "ها ها ها ها ها ها "
            },
        ]
    },
    {
        id: 19,
        frame: "frame-0.png",
        scenario: [
            {
                name: "الساحرة",
                pic: "female.png",
                text: "انتظر، أعتقد أنه بإمكاني مساعدتك لنمسك به."
            },
        ]
    },
    {
        id: 20,
        frame: "frame-0.png",
        scenario: [
            {
                name: "الساحرة",
                pic: "female.png",
                text: "*تتحول الساحرة إلى أفعى كبيرة*"
            },
        ]
    },
    {
        id: 21,
        frame: "frame-0.png",
        scenario: [
            {
                name: "الساحرة",
                pic: "female.png",
                text: "...."
            },
        ]
    },
    {
        id: 22,
        frame: "frame-0.png",
        scenario: [
            {
                name: "الساحر",
                pic: "male.png",
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
        frame: "frame-0.png",
        scenario: [
            {
                name: "الساحر",
                pic: "male.png",
                text: "و أخيراً هذا المشاكس في القفص !"
            },
            {
                name: "الساحرة",
                pic: "female.png",
                text: "هيا بنا لنعود إلى السيرك."
            },
        ]
    },
    {
        id: 24,
        frame: "frame-0.png",
        scenario: [
            {
                name: "الساحر",
                pic: "male.png",
                text: "لقد أخطأت في التعويذة و قام الوحش بمهاجمة الساحرة و هرب !"
            },
        ]
    },
    {
        id: 25,
        frame: "frame-0.png",
        scenario: [
            {
                name: "الساحر",
                pic: "male.png",
                text: "ثلاث حيوانات استرجعت من أصل ثلاثة. رقم جيد أليس كذلك ؟"
            },
            {
                name: "الساحرة",
                pic: "female.png",
                text: "هاها أخيراً أنتهى هذا الكابوس"
            },
        ]
    },
    {
        id: 26,
        frame: "frame-0.png",
        scenario: [
            {
                name: "الساحر",
                pic: "male.png",
                text: "حيوانان من أصل ثلاثة. رقم لا بأس به و إن كنت أتمنى إسترجاعهم كلهم"
            },
            {
                name: "الساحرة",
                pic: "female.png",
                text: "هاها أخيراً أنتهى هذا الكابوس"
            },
        ]
    },
    {
        id: 27,
        frame: "frame-0.png",
        scenario: [
            {
                name: "الساحر",
                pic: "male.png",
                text: "حيوان واحد فقط استرجعناه ؟ رقم سيئ !"
            },
        ]
    },
    {
        id: 28,
        frame: "frame-0.png",
        scenario: [
            {
                name: "الساحر",
                pic: "male.png",
                text: "ليلة سيئة على الجميع، لم نستطع إسترجاع أي حيوان من الحيوانات التي هربت !"
            },
        ]
    },
    {
        id: 29,
        frame: "frame-0.png",
        scenario: [
            {
                name: "الساحر",
                pic: "male.png",
                text: "انتهت اللعبة ! أتمنى أن تكون قد أعجبتكم :)",
                action: {
                    name: "gameOver"
                }
            },
        ]
    }
]

export default data