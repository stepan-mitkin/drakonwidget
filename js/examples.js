function createExamples() {
    var diagrams = [
        {
            "name": "Adaptive design",
            "items": {
                "1": {
                    "type": "end"
                },
                "2": {
                    "type": "branch",
                    "branchId": 0,
                    "one": "6"
                },
                "3": {
                    "one": "16",
                    "type": "case",
                    "content": "Tablet",
                    "two": "7"
                },
                "4": {
                    "one": "13",
                    "type": "case",
                    "two": "3",
                    "content": "Laptop"
                },
                "5": {
                    "one": "8",
                    "type": "case",
                    "two": "4",
                    "content": "Large screen"
                },
                "6": {
                    "type": "select",
                    "content": "What is the device type?",
                    "one": "5"
                },
                "7": {
                    "type": "case",
                    "one": "19",
                    "content": "Phone"
                },
                "8": {
                    "type": "action",
                    "one": "9",
                    "content": "Use large background image"
                },
                "9": {
                    "type": "action",
                    "one": "10",
                    "content": "Use grid layout"
                },
                "10": {
                    "type": "action",
                    "one": "20",
                    "content": "Use small UI elements"
                },
                "11": {
                    "type": "action",
                    "one": "20",
                    "content": "Use small UI elements"
                },
                "12": {
                    "type": "action",
                    "content": "Use grid layout",
                    "one": "11"
                },
                "13": {
                    "type": "action",
                    "content": "Use medium background image",
                    "one": "12"
                },
                "14": {
                    "type": "action",
                    "one": "20",
                    "content": "Use large UI elements"
                },
                "15": {
                    "type": "action",
                    "content": "Use plain layout",
                    "one": "14"
                },
                "16": {
                    "type": "action",
                    "content": "Use medium background image",
                    "one": "15"
                },
                "17": {
                    "type": "action",
                    "one": "21",
                    "content": "Use large UI elements"
                },
                "18": {
                    "type": "action",
                    "content": "Use plain layout",
                    "one": "17"
                },
                "19": {
                    "type": "action",
                    "content": "Use small background image",
                    "one": "18"
                },
                "20": {
                    "type": "action",
                    "content": "Put full main menu",
                    "one": "1"
                },
                "21": {
                    "type": "action",
                    "content": "Put minimal main menu",
                    "one": "1"
                }
            }
        },
        {
            "name": "Go out",
            "items": {
                "1": {
                    "type": "end"
                },
                "2": {
                    "type": "branch",
                    "branchId": 0,
                    "one": "3"
                },
                "3": {
                    "type": "action",
                    "one": "4",
                    "content": "Put on clothes"
                },
                "4": {
                    "flag1": 0,
                    "type": "question",
                    "content": "Is it raining?",
                    "one": "7",
                    "two": "5"
                },
                "5": {
                    "type": "action",
                    "one": "7",
                    "content": "- Take umbrella\n- Take rubber boots"
                },
                "7": {
                    "type": "insertion",
                    "content": "Leave the house",
                    "one": "1"
                }
            }
        },
        {
            "name": "Leave the house",
            "items": {
                "1": {
                    "type": "end"
                },
                "2": {
                    "type": "branch",
                    "branchId": 0,
                    "one": "3"
                },
                "3": {
                    "type": "action",
                    "content": "Open the door",
                    "one": "4",
                    "link": "https://en.wikipedia.org/wiki/Door"
                },
                "4": {
                    "type": "action",
                    "content": "Go out through the door portal",
                    "one": "5"
                },
                "5": {
                    "type": "action",
                    "content": "Close the door",
                    "one": "6"
                },
                "6": {
                    "type": "action",
                    "content": "Lock the door",
                    "one": "1"
                }
            }
        },
        {
            "name": "How to learn to understand foregn speech",
            "params": "Author: Irina Kolosova\nhttps://youtu.be/JOtwQbNdIGs",
            "items": {
                "1": {
                    "type": "end"
                },
                "2": {
                    "branchId": 1,
                    "one": "6",
                    "type": "branch",
                    "content": "Familiarize yourself"
                },
                "3": {
                    "branchId": 4,
                    "one": "22",
                    "type": "branch",
                    "content": "Repeat out loud"
                },
                "4": {
                    "branchId": 2,
                    "one": "16",
                    "type": "branch",
                    "content": "Write down"
                },
                "5": {
                    "branchId": 3,
                    "one": "17",
                    "type": "branch",
                    "content": "Verify against the subtitles"
                },
                "6": {
                    "type": "action",
                    "one": "7",
                    "content": "Select a video fragment with a phrase in the foreign language"
                },
                "7": {
                    "type": "action",
                    "content": "Listen to the whole phrase without subtitles",
                    "one": "4"
                },
                "8": {
                    "type": "action",
                    "one": "10",
                    "content": "Rewind to the start of the phrase"
                },
                "9": {
                    "type": "loopend",
                    "one": "15",
                    "content": "Next word"
                },
                "10": {
                    "type": "loopbegin",
                    "one": "11",
                    "content": "For each word in the phrase"
                },
                "11": {
                    "type": "action",
                    "one": "12",
                    "content": "Try to catch every sound"
                },
                "12": {
                    "flag1": 1,
                    "type": "question",
                    "two": "14",
                    "one": "13",
                    "content": "Did you understand the word?"
                },
                "13": {
                    "type": "action",
                    "content": "Write the word down",
                    "one": "9"
                },
                "14": {
                    "type": "action",
                    "content": "Write down the sounds that you recognized",
                    "one": "9"
                },
                "15": {
                    "flag1": 1,
                    "type": "question",
                    "content": "Have you reached the limit of understanding for the phrase?",
                    "one": "5",
                    "two": "16"
                },
                "16": {
                    "type": "arrow-loop",
                    "one": "8"
                },
                "17": {
                    "type": "action",
                    "one": "18",
                    "content": "Rewind to the start of the fragment"
                },
                "18": {
                    "type": "action",
                    "one": "19",
                    "content": "Listen to the phrase with subtitles"
                },
                "19": {
                    "type": "action",
                    "one": "20",
                    "content": "Verify your notes against the subtitles"
                },
                "20": {
                    "type": "action",
                    "content": "Add what you have not understood to your notes",
                    "one": "3"
                },
                "21": {
                    "type": "loopend",
                    "one": "1"
                },
                "22": {
                    "type": "loopbegin",
                    "one": "23",
                    "content": "Several times"
                },
                "23": {
                    "type": "action",
                    "one": "24",
                    "content": "Rewind to the start of the fragment"
                },
                "24": {
                    "type": "action",
                    "content": "Repeat out loud after the actor:\n- imitate the sounds\n- imitate the intonation",
                    "one": "21"
                }
            }
        },
        {
            "name": "Scientific method",
            "items": {
                "1": {
                    "type": "end"
                },
                "2": {
                    "type": "branch",
                    "branchId": 0,
                    "one": "3"
                },
                "3": {
                    "type": "action",
                    "one": "4",
                    "content": "Investigate the question"
                },
                "4": {
                    "flag1": 0,
                    "type": "question",
                    "content": "Are there existing sufficient explanations?",
                    "one": "6",
                    "two": "5"
                },
                "5": {
                    "type": "action",
                    "content": "Nothing to do, life is good",
                    "one": "1"
                },
                "6": {
                    "type": "action",
                    "one": "7",
                    "content": "Form a _hypothesis_"
                },
                "7": {
                    "type": "action",
                    "one": "8",
                    "content": "Deduce _predictions_ from the _hypothesis_"
                },
                "8": {
                    "type": "action",
                    "one": "9",
                    "content": "Compare the _predictions_ to __reproducible__ facts"
                },
                "9": {
                    "flag1": 0,
                    "type": "question",
                    "content": "Are there facts that contradict the predictions?",
                    "one": "11",
                    "two": "10"
                },
                "10": {
                    "type": "action",
                    "content": "The _hypothesis_ is not valid",
                    "one": "1"
                },
                "11": {
                    "flag1": 1,
                    "type": "question",
                    "two": "12",
                    "one": "13",
                    "content": "Are there facts that confirm the predictions?"
                },
                "12": {
                    "type": "action",
                    "content": "This _hypothesis_ is a waste of time",
                    "one": "1"
                },
                "13": {
                    "type": "action",
                    "content": "The _hypothesis_ could be a valid explanation of the question. Or maybe not.",
                    "one": "1",
                    "style": "{\"iconBack\":\"darkgreen\",\"color\":\"white\",\"iconBorder\":\"\",\"font\":\"\",\"padding\":\"\",\"internalLine\":\"\",\"borderWidth\":0}"
                }
            }
        },
        {
            "name": "Снятие шлема с мотоциклиста",
            "params": "Помощь оказывают\nдва человека: 1 и 2",
            "items": {
                "1": {
                    "type": "end"
                },
                "2": {
                    "type": "branch",
                    "branchId": 1,
                    "one": "6",
                    "content": "Обеспечение стабильности головы"
                },
                "3": {
                    "type": "branch",
                    "content": "Снятие шлема",
                    "one": "20",
                    "branchId": 2
                },
                "4": {
                    "type": "parend",
                    "one": "13"
                },
                "5": {
                    "type": "parbegin",
                    "one": "10"
                },
                "6": {
                    "type": "parbegin",
                    "one": "7",
                    "two": "5"
                },
                "7": {
                    "type": "action",
                    "content": "__1__ Обеими руками возьмись за шлем",
                    "one": "9"
                },
                "8": {
                    "type": "action",
                    "content": "__2__ Разрежь защёлку, фиксирующую шлем",
                    "one": "4"
                },
                "9": {
                    "type": "action",
                    "content": "__1__ Достань пальцами до нижней челюсти",
                    "one": "4"
                },
                "10": {
                    "type": "action",
                    "content": "__2__ Открой щиток и сними очки",
                    "one": "8"
                },
                "11": {
                    "type": "parend",
                    "one": "3"
                },
                "12": {
                    "type": "parbegin",
                    "one": "15"
                },
                "13": {
                    "type": "parbegin",
                    "one": "14",
                    "two": "12"
                },
                "14": {
                    "type": "action",
                    "content": "__1__ Удерживай голову в нейтральном положении",
                    "one": "11"
                },
                "15": {
                    "type": "action",
                    "content": "__2__ Одну руку положи на нижнюю челюсть пациента",
                    "one": "16"
                },
                "16": {
                    "type": "action",
                    "content": "__2__ Другую руку просунь под шеей",
                    "one": "17"
                },
                "17": {
                    "type": "action",
                    "content": "__2__ Рукой охвати затылок",
                    "one": "11"
                },
                "18": {
                    "type": "parend",
                    "one": "25"
                },
                "19": {
                    "type": "parbegin",
                    "one": "21"
                },
                "20": {
                    "type": "parbegin",
                    "one": "22",
                    "two": "19"
                },
                "21": {
                    "type": "action",
                    "content": "__2__ Удерживай вес головы",
                    "one": "18"
                },
                "22": {
                    "type": "action",
                    "content": "__1__ Сними шлем вдоль продольной оси шеи и головы, избегая сгибательно-разгибательных движений",
                    "one": "18"
                },
                "23": {
                    "type": "parend",
                    "one": "1"
                },
                "24": {
                    "type": "parbegin",
                    "one": "27"
                },
                "25": {
                    "type": "parbegin",
                    "one": "26",
                    "two": "24"
                },
                "26": {
                    "type": "action",
                    "content": "__1__ Удерживай голову в нейтральном положении",
                    "one": "28"
                },
                "27": {
                    "type": "action",
                    "content": "__2__ Надень жёсткую шину-воротник подходящего размера",
                    "one": "29"
                },
                "28": {
                    "type": "action",
                    "content": "__1__ Обеспечь проходимость дыхательный путей",
                    "one": "23"
                },
                "29": {
                    "type": "action",
                    "content": "__2__ Иммобилизуй пациента на носилках или на длинной доске",
                    "one": "23"
                }
            }
        },
        {
            "name": "Реанимация беременной женщины",
            "items": {
                "1": {
                    "type": "end"
                },
                "2": {
                    "type": "branch",
                    "branchId": 1,
                    "one": "5",
                    "content": "Оценка состояния беременной"
                },
                "3": {
                    "type": "branch",
                    "content": "Дальнейшая помощь",
                    "one": "32",
                    "branchId": 5,
                    "margin": 0
                },
                "4": {
                    "type": "branch",
                    "content": "Лечение остановки дыхания",
                    "one": "11",
                    "branchId": 2,
                    "margin": 0
                },
                "5": {
                    "type": "question",
                    "content": "Есть реакция на обращение и прикосновение?",
                    "one": "3",
                    "two": "6",
                    "flag1": 1
                },
                "6": {
                    "type": "question",
                    "content": "Есть ли нормальное дыхание?",
                    "one": "3",
                    "two": "7",
                    "flag1": 1
                },
                "7": {
                    "type": "action",
                    "content": "Вызывай реанимационную и акушерскую команду и проси дефибрилятор",
                    "one": "8"
                },
                "8": {
                    "type": "action",
                    "content": "Зафиксируй время внезапной смерти",
                    "one": "9"
                },
                "9": {
                    "type": "action",
                    "content": "Положи на спину.\nСдвинь матку влево",
                    "one": "10"
                },
                "10": {
                    "type": "question",
                    "content": "Прощупывается ли пульс на сонной артерии?",
                    "one": "4",
                    "two": "17",
                    "flag1": 1,
                    "side": "18"
                },
                "11": {
                    "type": "action",
                    "content": "Вдувай 1 раз каждые 5-6 секунд",
                    "one": "12",
                    "side": "14"
                },
                "12": {
                    "type": "question",
                    "content": "Есть ли пульс?",
                    "one": "13",
                    "two": "17",
                    "flag1": 1,
                    "side": "15"
                },
                "13": {
                    "type": "question",
                    "content": "Есть ли дыхание?",
                    "one": "3",
                    "two": "4",
                    "flag1": 1,
                    "side": "16"
                },
                "14": {
                    "type": "duration",
                    "content": "2 мин"
                },
                "15": {
                    "type": "duration",
                    "content": "10 сек"
                },
                "16": {
                    "type": "duration",
                    "content": "5-10 сек"
                },
                "17": {
                    "type": "branch",
                    "branchId": 3,
                    "content": "Начальная реанимация\n30:2",
                    "one": "24"
                },
                "18": {
                    "type": "duration",
                    "content": "10 сек"
                },
                "20": {
                    "type": "action",
                    "content": "Реанимируй до момента, когда принесут дефибрилятор",
                    "one": "21"
                },
                "21": {
                    "type": "action",
                    "content": "Выполни 30 компрессий грудной клетки",
                    "one": "22"
                },
                "22": {
                    "type": "action",
                    "content": "Выполни 2 вдоха",
                    "one": "23"
                },
                "23": {
                    "type": "question",
                    "content": "Есть ли дефибрилятор?",
                    "one": "25",
                    "two": "24",
                    "flag1": 1
                },
                "24": {
                    "type": "arrow-loop",
                    "one": "20"
                },
                "25": {
                    "type": "branch",
                    "branchId": 4,
                    "content": "Применение дефибрилятора",
                    "one": "26",
                    "margin": ""
                },
                "26": {
                    "type": "action",
                    "content": "Включи дефибрилятор",
                    "one": "28"
                },
                "27": {
                    "type": "action",
                    "content": "Выполняй указания дефибрилятора",
                    "one": "30"
                },
                "28": {
                    "type": "question",
                    "content": "Есть функция автоматической внешней дефибриляции?",
                    "one": "31",
                    "two": "3",
                    "flag1": 1
                },
                "30": {
                    "type": "question",
                    "content": "Прибыла реанимационная команда?",
                    "one": "3",
                    "two": "31",
                    "flag1": 1
                },
                "31": {
                    "type": "arrow-loop",
                    "one": "27"
                },
                "32": {
                    "type": "question",
                    "content": "Нужна ли реанимация?",
                    "one": "33",
                    "two": "34",
                    "flag1": 0
                },
                "33": {
                    "type": "insertion",
                    "content": "Первичный осмотр ABCDE",
                    "one": "1"
                },
                "34": {
                    "type": "insertion",
                    "content": "Специализированная реанимационная помощь",
                    "one": "1"
                },
                "35": {
                    "type": "group-duration",
                    "flag1": 1,
                    "x": 590,
                    "y": 270,
                    "loX": -110,
                    "loY": 75,
                    "hiX": -470,
                    "hiY": -100,
                    "zIndex": 0,
                    "content": "10 сек"
                }
            },
            "style": "{\"font\":\"\",\"headerFont\":\"\",\"branchFont\":\"\",\"canvasLabels\":\"\",\"metre\":\"\",\"padding\":\"\",\"maxWidth\":200,\"lineHeight\":\"\",\"background\":\"\",\"color\":\"\",\"iconBack\":\"\",\"lines\":\"\",\"backText\":\"\",\"iconBorder\":\"\",\"internalLine\":\"\",\"shadowColor\":\"\",\"shadowBlur\":\"\",\"lineWidth\":\"\",\"borderWidth\":\"\"}"
        }
    ]
    return diagrams
}