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
                    "one": "6",
                    "two": "5"
                },
                "5": {
                    "type": "action",
                    "one": "6",
                    "content": "- Take umbrella\n- Take rubber boots"
                },
                "6": {
                    "type": "action",
                    "content": "Leave the house",
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
                    "one": "1"
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
        }
    ]
    return diagrams
}