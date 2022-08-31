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
                audio: "./audio/crowd.mp3"
            },
        ]
    },
    {
        id: 2,
        frame: "frame-2.png",
        scenario: [
            {
                name: "الشاب",
                pic: "youth.png",
                audio: "./audio/youth-1.mp3",
                text: "سأغلق الأقفاص جيداً كما طلب مني السيد روبرت",
            },
        ]
    },
    {
        id: 3,
        frame: "frame-24.jpg",
        scenario: [
            {
                text: "*صوت صراخ الحيوانات والقفز خارج الأقفاص*",
                audio: "./audio/chain.mp3"
            },
        ]
    },
    {
        id: 4,
        frame: "frame-3.png",
        scenario: [
            {
                name: "الشاب",
                pic: "youth.png",
                text: "ما الذي يحدث هنا ؟",
            },
        ]
    },
    {
        id: 5,
        frame: "frame-25.jpg",
        scenario: [
            {
                name: "الشاب",
                pic: "youth.png",
                text: "عاااااااااااااا",
            },
        ]
    },
    {
        id: 6,
        frame: "frame-26.jpg",
        scenario: [
            {
                name: "الشاب",
                pic: "youth.png",
                audio: "./audio/youth-2.mp3",
                text: "اللعنة…. لقد هربت الحيوانات.",
            },
        ]
    },
    {
        id: 7,
        frame: "frame-26.jpg",
        scenario: [
            {
                name: "الشاب",
                pic: "youth.png",
                text: ".....",
            },
        ]
    },
    {
        id: 8,
        frame: "frame-4.png",
        scenario: [
            {
                name: "الساحر",
                pic: "male.png",
                audio: "./audio/male-1.mp3",
                text: "ما الذي حدث هنا؛ وكيف هربت تلك الحيوانات الثلاثة؟"
            },
            {
                name: "الساحرة",
                pic: "female.png",
                audio: "./audio/female-1.mp3",
                text: "إنه العامل الجديد كان من المفترض أن يتأكد من سلامتها ومن إغلاق الأقفاص، لكنه أخافها وتسبب في هربها"
            },
            {
                name: "الساحر",
                pic: "male.png",
                audio: "./audio/male-2.mp3",
                text: "يجب أن نسرع ونعيد تلك الحيوانات حتى لا نفقدها نهائياً."
            },
            {
                name: "الساحرة",
                pic: "female.png",
                audio: "./audio/female-2.mp3",
                text: "أتفق معك، لذا دعنا نبدأ من هذا الجانب، لقد شاهدت  Fwooper  وهو  يطير من هذا الاتجاه  لابد أنه لم يبتعد عن المنطقة، من الجيد أنه قد تم وضع تعويذة الصمت عليه قبل أسبوع"
            },
            {
                name: "الساحر",
                pic: "male.png",
                audio: "./audio/male-3.mp3",
                text: "هذا من حسن الحظ وإلا أصابنا الجنون، سيكون العثور عليه صعب ولكن  لونه الأصفر الزاهي قد يساعدنا في العثور عليه."
            },
        ]
    },
    {
        id: 9,
        frame: "frame-33.jpg",
        scenario: [
            {
                name: "الساحر",
                pic: "male.png",
                audio: "./audio/male-26.mp3",
                text: "أعتقد بأن مرافقتك لي ستكون رائعة."
            },
            {
                name: "الساحرة",
                pic: "female.png",
                audio: "",
                text: " تقصد وأنا بتلك الهيئة أم بالأخرى؟"
            },
        ]
    },
    {
        id: 10,
        frame: "frame-27.jpg",
        scenario: [
            {
                text: "*تتغير صور الساحرة فقط لتظهر أفعى كبيرة ترفع نصف جسدها للأعلى*"
            },
        ]
    },
    {
        id: 11,
        frame: "frame-29.jpg",
        scenario: [
            {
                name: "الساحر",
                pic: "male.png",
                audio: "./audio/male-27.mp3",
                text: "أفضلك على تلك الهيئة، ولكن الأفضل أن تعودي كما كنتِ لنباشر العمل."
            },
        ]
    },
    {
        id: 12,
        frame: "frame-28.jpg",
        scenario: [
            {
                name: "الساحرة",
                pic: "female.png",
                text: "تث تث"
            },
        ]
    },
    {
        id: 13,
        frame: "frame-11.jpg",
        scenario: [
            {
                name: "الساحرة",
                pic: "female.png",
                audio: "./audio/female-3.mp3",
                text: "انظر إنه هناك."
            },
        ]
    },
    {
        id: 14,
        frame: "frame-30.jpg",
        scenario: [
            {
                name: "الساحرة",
                pic: "female.png",
                audio: "./audio/female-14.mp3",
                text: "لقد رأيته إنه هو حيوان ال fwooper  يجب أن نمسك به الآن قبل أن يطير مبتعداً  ؛  و لكن كيف سنقوم بالامساك به. ",
                action: {
                    name: "hunt",
                }
            },
        ]
    },
    {
        id: 15,
        frame: "frame-12.jpg",
        scenario: [
            {
                name: "الساحر",
                pic: "male.png",
                audio: "./audio/male-4.mp3",
                text: "Incarcerous"
            },
        ]
    },
    {
        id: 16,
        frame: "frame-31.jpg",
        scenario: [
            {
                name: "الساحرة",
                pic: "female.png",
                audio: "./audio/female-4.m4a",
                text: "احترس ! الطائر يسقط ! تصرف قبل أن يقع على الأرض.",
                action: {
                    name: "question",
                    question: "Select the charm",
                    answers: [
                        {
                            id: 0,
                            text: "Molliare",
                            isCorrect: true,
                            correctSen: 17,
                            falsesSen: 18
                        },
                        {
                            id: 1,
                            text: "Finite Incantatem",
                            isCorrect: false,
                            correctSen: 17,
                            falsesSen: 18
                        },
                    ]
                }
            }
        ]
    },
    {
        id: 17,
        frame: "frame-13.jpg",
        scenario: [
            {
                name: "الساحرة",
                pic: "female.png",
                audio: "./audio/female-6.mp3",
                text: "لقد كان العثور علي هذا الحيوان صعب للغاية، لا أصدق أنه مازال علينا البحث عن الأخرين لاستعادتهم. "
            },
            {
                name: "الساحر",
                pic: "male.png",
                audio: "./audio/male-5.mp3",
                text: "سأقتل هذا العامل المبتدئ بيدي أو سأهديه للديمناتورات."
            },
            {
                name: "الساحرة",
                pic: "female.png",
                audio: "./audio/female-7.mp3",
                text: " ما الذي سنفعله الأن؟"
            },
            {
                name: "الساحر",
                pic: "male.png",
                audio: "./audio/male-6.mp3",
                text: "علينا العودة إلى السيرك لنبدأ البحث من جديد عن دليل يقودنا إليهم."
            },
            {
                name: "الساحرة",
                pic: "female.png",
                audio: "./audio/female-8.mp3",
                text: "حسنا أسرع سنعود إلى هناك."
            },

        ]
    },
    {
        id: 18,
        frame: "frame-14.jpg",
        scenario: [
            {
                name: "الساحرة",
                pic: "female.png",
                audio: "./audio/female-5.mp3",
                text: "احترس !! لقد أبطلت تعويذة الصمت و هرب الحيوان"
            },
            {
                name: "الساحرة",
                pic: "female.png",
                audio: "./audio/female-7.mp3",
                text: " ما الذي سنفله الأن؟"
            },
            {
                name: "الساحر",
                pic: "male.png",
                audio: "./audio/male-6.mp3",
                text: "علينا العودة إلى السيرك لنبدأ البحث من جديد عن دليل يقودنا إليهم."
            },
            {
                name: "الساحرة",
                pic: "female.png",
                audio: "./audio/female-8.mp3",
                text: "حسنا أسرع سنعود إلى هناك."
            },

        ]
    },
    {
        id: 19,
        frame: "frame-6.jpg",
        scenario: [
            {
                name: "الساحر",
                pic: "male.png",
                audio: "./audio/male-7.mp3",
                text: "انظري، أعتقد أن هذه أثار أقدام حيوان"
            },
            {
                name: "الساحرة",
                pic: "female.png",
                audio: "./audio/female-9.mp3",
                text: "أوه، جيد  إنها أربعة أقدام، لابد أنه حيوان ال Mooncalf"
            },
            {
                name: "الساحر",
                pic: "male.png",
                audio: "./audio/male-8.mp3",
                text: "رائع لنتتبع الاثار ربما لم يبتعد كثيراً."
            }
        ]
    },
    {
        id: 20,
        frame: "frame-6.jpg",
        scenario: [
            {
                name: "الساحرة",
                pic: "female.png",
                audio: "./audio/female-10.mp3",
                text: " احترس فأنت تقف فوق روث الـ  mooncalf   لابد وأنه قريب جداً من هنا"
            },
            {
                name: "الساحر",
                pic: "male.png",
                audio: "./audio/male-9.mp3",
                text: "مقزز.. الان سأطعم نفسي للديمناتورات أنا الأخر."
            },
        ]
    },
    {
        id: 21,
        frame: "frame-7.jpg",
        scenario: [
            {
                name: "الساحرة",
                pic: "female.png",
                audio: "./audio/female-11.mp3",
                text: "ها قد عثرنا عليه و لكن ماهذا ؟ ماهذه الحركات الغريبة التي يقوم بها ؟ "
            },
            {
                name: "الساحر",
                pic: "male.png",
                audio: "./audio/male-10.mp3",
                text: "اللعنة إنها رقصة التزاوج الخاصة به، ربما يعتقد بأنه رأى أنثى من فصيلته."
            },
            {
                name: "الساحرة",
                pic: "female.png",
                audio: "./audio/female-12.mp3",
                text: "إذن ماذا سنفعل؟"
            },
            {
                name: "الساحر",
                pic: "male.png",
                audio: "./audio/male-11.mp3",
                text: "عليك بتشتيت انتباهه حتى أتمكن من الإمساك به.",
            },

        ]
    },
    {
        id: 22,
        frame: "frame-8.jpg",
        scenario: [
            {
                name: "الساحرة",
                pic: "female.png",
                audio: "./audio/female-13.mp3",
                text: "سأقوم أنا بتشتيت إنتباهه بتحويل صخرة كبيرة إلى شكل عنزة ليقوم الحيوان بالانتباه إليها والجري نحوها",
                action: {
                    name: "question",
                    question: "Select the charm",
                    answers: [
                        {
                            id: 0,
                            text: "Reducio ",
                            isCorrect: false,
                            correctSen: 23,
                            falsesSen: 24
                        },
                        {
                            id: 1,
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
        frame: "frame-9.jpg",
        scenario: [
            {
                name: "الساحر",
                pic: "male.png",
                audio: "./audio/male-12.mp3",
                text: "Petrificus Totalus"
            },
        ]
    },
    {
        id: 24,
        frame: "frame-6.jpg",
        scenario: [
            {
                name: "الساحر",
                pic: "male.png",
                audio: "./audio/comedy-1.mp3",
                text: "معاك غيره ؟"
            },
            {
                name: "الساحرة",
                pic: "female.png",
                audio: "./audio/comedy-2.mp3",
                text: "يخرب بيتك انت ضيعته"
            },
            {
                name: "الساحرة",
                pic: "female.png",
                audio: "./audio/female-18.mp3",
                text: "لقد قمت بتصغيير الحيوان و الآن قد هرب."
            }
        ]
    },
    {
        id: 25,
        frame: "frame-15.jpg",
        scenario: [
            {
                name: "الساحر",
                pic: "male.png",
                audio: "./audio/male-13.mp3",
                text: " لم يتبقى سوى حيوان واحد فقط."
            },
            {
                name: "الساحرة",
                pic: "female.png",
                audio: "./audio/female-16.mp3",
                text: "أتمنى أن نتمكن من الإمساك به سريعاً. "
            },
            {
                name: "الساحر",
                pic: "male.png",
                audio: "./audio/male-14.mp3",
                text: " أعتقد بأنني أعرف أين يوجد هذا المشاكس."
            },
        ]
    },
    {
        id: 26,
        frame: "frame-16.jpg",
        scenario: [
            {
                name: "الساحر",
                pic: "male.png",
                audio: "./audio/male-15.mp3",
                text: "هيا بنا"
            },
            {
                name: "الساحر",
                pic: "male.png",
                audio: "./audio/male-16.mp3",
                text: "أظن أنه قد يكون هنا، دعيني أتأكد."
            },
        ]
    },
    {
        id: 27,
        frame: "frame-17.jpg",
        scenario: [
            {
                name: "الساحر",
                pic: "male.png",
                audio: "./audio/male-17.mp3",
                text: "Aguamenti"
            },
        ]
    },
    {
        id: 28,
        frame: "frame-18.jpg",
        scenario: [
            {
                name: "الحيوان",
                pic: "beast-3.png",
                audio: "./audio/beast-1.mp3",
                text: "أحمق أحمق… تبا لك"
            },
            {
                name: "الساحر",
                pic: "male.png",
                audio: "./audio/male-18.mp3",
                text: "ها هو سليط اللسان قد ظهر."
            },
            {
                name: "الحيوان",
                pic: "beast-3.png",
                audio: "./audio/beast-2.mp3",
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
                            falsesSen: 29
                        },
                        {
                            id: 1,
                            text: "Accio",
                            isCorrect: false,
                            correctSen: 50000,
                            falsesSen: 29
                        },
                        {
                            id: 3,
                            text: "Incendio",
                            isCorrect: false,
                            correctSen: 50000,
                            falsesSen: 29
                        },
                    ]
                }
            },
        ]
    },
    {
        id: 29,
        frame: "frame-19.jpg",
        scenario: [
            {
                name: "الحيوان",
                pic: "beast-3.png",
                audio: "./audio/beast-3.mp3",
                text: "ها ها ها ها ها ها "
            },
        ]
    },
    {
        id: 30,
        frame: "frame-20.jpg",
        scenario: [
            {
                name: "الساحرة",
                pic: "female.png",
                audio: "./audio/female-17.mp3",
                text: "انتظر، أعتقد أنه بإمكاني مساعدتك لنمسك به."
            },
        ]
    },
    {
        id: 31,
        frame: "frame-21.jpg",
        scenario: [
            {
                text: "*تتحول الساحرة إلى أفعى كبيرة*"
            },
        ]
    },
    {
        id: 32,
        frame: "frame-21.jpg",
        scenario: [
            {
                name: "الساحرة",
                pic: "female.png",
                text: "...."
            },
        ]
    },
    {
        id: 33,
        frame: "frame-21.jpg",
        scenario: [
            {
                name: "الساحر",
                pic: "male.png",
                audio: "./audio/male-19.mp3",
                text: "سوف أنهي الأمر الآن أيها المشاكس",
                action: {
                    name: "question",
                    question: "Select the charm",
                    answers: [
                        {
                            id: 0,
                            text: "Alohomora",
                            isCorrect: false,
                            correctSen: 34,
                            falsesSen: 35
                        },
                        {
                            id: 1,
                            text: "Accio",
                            isCorrect: false,
                            correctSen: 34,
                            falsesSen: 35
                        },
                        {
                            id: 3,
                            text: "Petrificus Totalus",
                            isCorrect: true,
                            correctSen: 34,
                            falsesSen: 35
                        },
                    ]
                }
            },
        ]
    },
    {
        id: 34,
        frame: "frame-22.jpg",
        scenario: [
            {
                name: "الساحر",
                pic: "male.png",
                audio: "./audio/male-20.mp3",
                text: "و أخيراً هذا المشاكس في القفص !"
            },
            {
                name: "الساحرة",
                pic: "female.png",
                audio: "./audio/female-15.mp3",
                text: "هيا بنا لنعود إلى السيرك."
            },
        ]
    },
    {
        id: 35,
        frame: "frame-23.jpg",
        scenario: [
            {
                name: "الساحر",
                pic: "male.png",
                audio: "./audio/male-21.mp3",
                text: "لقد أخطأت في التعويذة و قام الوحش بمهاجمة الساحرة و هرب !"
            },
        ]
    },
    {
        id: 36,
        frame: "frame-4.png",
        scenario: [
            {
                name: "الساحر",
                pic: "male.png",
                audio: "./audio/male-22.mp3",
                text: "ثلاثة حيوانات استرجعت من أصل ثلاثة. رقم جيد أليس كذلك ؟"
            },
        ]
    },
    {
        id: 37,
        frame: "frame-4.png",
        scenario: [
            {
                name: "الساحر",
                pic: "male.png",
                audio: "./audio/male-23.mp3",
                text: "حيوانان من أصل ثلاثة. رقم لا بأس به و إن كنت أتمنى إسترجاعهم كلهم"
            },
        ]
    },
    {
        id: 38,
        frame: "frame-4.png",
        scenario: [
            {
                name: "الساحر",
                pic: "male.png",
                audio: "./audio/male-24.mp3",
                text: "حيوان واحد فقط استرجعناه ؟ رقم سيئ !"
            },
        ]
    },
    {
        id: 39,
        frame: "frame-4.png",
        scenario: [
            {
                name: "الساحر",
                pic: "male.png",
                audio: "./audio/male-25.mp3",
                text: "ليلة سيئة على الجميع، لم نستطع إسترجاع أي حيوان من الحيوانات التي هربت !"
            },
            {
                name: "الساحرة",
                pic: "female.png",
                audio: "./audio/female-15.mp3",
                text: "باين كده الحيوانات كلها ضاعت يا معلم هي كانت تلزمك في حاجة ؟"
            },
        ]
    },
    {
        id: 40,
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