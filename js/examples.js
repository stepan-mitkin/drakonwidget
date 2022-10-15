function createExamples() {
    var example1 = {
        "name": "Adaptive design",
        "items": [
            {
                "type": "end",
                "id": "1"
            },
            {
                "type": "action",
                "id": "10",
                "one": "20",
                "content": "Use small UI elements"
            },
            {
                "type": "action",
                "id": "11",
                "one": "20",
                "content": "Use small UI elements"
            },
            {
                "type": "action",
                "content": "Use grid layout",
                "one": "11",
                "id": "12"
            },
            {
                "type": "action",
                "content": "Use medium background image",
                "one": "12",
                "id": "13"
            },
            {
                "type": "action",
                "id": "14",
                "one": "20",
                "content": "Use large UI elements"
            },
            {
                "type": "action",
                "content": "Use plain layout",
                "one": "14",
                "id": "15"
            },
            {
                "type": "action",
                "content": "Use medium background image",
                "one": "15",
                "id": "16"
            },
            {
                "type": "action",
                "id": "17",
                "one": "21",
                "content": "Use large UI elements"
            },
            {
                "type": "action",
                "content": "Use plain layout",
                "one": "17",
                "id": "18"
            },
            {
                "type": "action",
                "content": "Use small background image",
                "one": "18",
                "id": "19"
            },
            {
                "type": "branch",
                "branchId": 0,
                "one": "6",
                "id": "2"
            },
            {
                "type": "action",
                "content": "Put full main menu",
                "one": "1",
                "id": "20"
            },
            {
                "type": "action",
                "content": "Put minimal main menu",
                "one": "1",
                "id": "21"
            },
            {
                "one": "16",
                "id": "3",
                "type": "case",
                "content": "Tablet",
                "two": "7"
            },
            {
                "one": "13",
                "id": "4",
                "type": "case",
                "two": "3",
                "content": "Laptop"
            },
            {
                "one": "8",
                "id": "5",
                "type": "case",
                "two": "4",
                "content": "Large screen"
            },
            {
                "type": "select",
                "content": "What is the device type?",
                "one": "5",
                "id": "6"
            },
            {
                "type": "case",
                "id": "7",
                "one": "19",
                "content": "Phone"
            },
            {
                "type": "action",
                "id": "8",
                "one": "9",
                "content": "Use large background image"
            },
            {
                "type": "action",
                "id": "9",
                "one": "10",
                "content": "Use grid layout"
            }
        ]
    }

    var example2 = {
        "name": "Go out",    
        "items": [
            {
                "type": "end",
                "id": "1"
            },
            {
                "type": "branch",
                "branchId": 0,
                "one": "3",
                "id": "2"
            },
            {
                "type": "action",
                "id": "3",
                "one": "4",
                "content": "Put on clothes"
            },
            {
                "flag1": 0,
                "id": "4",
                "type": "question",
                "content": "Is it raining?",
                "one": "6",
                "two": "5"
            },
            {
                "type": "action",
                "id": "5",
                "one": "6",
                "content": "Take umbrella"
            },
            {
                "type": "action",
                "content": "Leave the house",
                "one": "1",
                "id": "6"
            }
        ]    
    }

    var example3 = {
        "name": "How to learn to understand foregn speech",
        "params": "Author: Irina Kolosova\nhttps://youtu.be/JOtwQbNdIGs",
        "items": [
            {
                "type": "end",
                "id": "1"
            },
            {
                "type": "loopbegin",
                "id": "10",
                "one": "11",
                "content": "For each word in the phrase"
            },
            {
                "type": "action",
                "id": "11",
                "one": "12",
                "content": "Try to catch every sound"
            },
            {
                "flag1": 1,
                "id": "12",
                "type": "question",
                "two": "14",
                "one": "13",
                "content": "Did you understand the word?"
            },
            {
                "type": "action",
                "content": "Write the word down",
                "one": "9",
                "id": "13"
            },
            {
                "type": "action",
                "content": "Write down the sounds that you recognized",
                "one": "9",
                "id": "14"
            },
            {
                "flag1": 1,
                "id": "15",
                "type": "question",
                "content": "Have you reached the limit of understanding for the phrase?",
                "one": "5",
                "two": "16"
            },
            {
                "type": "arrow-loop",
                "one": "8",
                "id": "16"
            },
            {
                "type": "action",
                "id": "17",
                "one": "18",
                "content": "Rewind to the start of the fragment"
            },
            {
                "type": "action",
                "id": "18",
                "one": "19",
                "content": "Listen to the phrase with subtitles"
            },
            {
                "type": "action",
                "id": "19",
                "one": "20",
                "content": "Verify your notes against the subtitles"
            },
            {
                "branchId": 1,
                "one": "6",
                "id": "2",
                "type": "branch",
                "content": "Familiarize yourself"
            },
            {
                "type": "action",
                "content": "Add what you have not understood to your notes",
                "one": "3",
                "id": "20"
            },
            {
                "type": "loopend",
                "one": "1",
                "id": "21"
            },
            {
                "type": "loopbegin",
                "id": "22",
                "one": "23",
                "content": "Several times"
            },
            {
                "type": "action",
                "id": "23",
                "one": "24",
                "content": "Rewind to the start of the fragment"
            },
            {
                "type": "action",
                "content": "Repeat out loud after the actor:\n- imitate the sounds\n- imitate the intonation",
                "one": "21",
                "id": "24"
            },
            {
                "branchId": 4,
                "one": "22",
                "id": "3",
                "type": "branch",
                "content": "Repeat out loud"
            },
            {
                "branchId": 2,
                "one": "16",
                "id": "4",
                "type": "branch",
                "content": "Write down"
            },
            {
                "branchId": 3,
                "one": "17",
                "id": "5",
                "type": "branch",
                "content": "Verify against the subtitles"
            },
            {
                "type": "action",
                "id": "6",
                "one": "7",
                "content": "Select a video fragment with a phrase in the foreign language"
            },
            {
                "type": "action",
                "content": "Listen to the whole phrase without subtitles",
                "one": "4",
                "id": "7"
            },
            {
                "type": "action",
                "id": "8",
                "one": "10",
                "content": "Rewind to the start of the phrase"
            },
            {
                "type": "loopend",
                "id": "9",
                "one": "15",
                "content": "Next word"
            }
        ]
    }

    var example4 = {
        "name": "Scientific method",
        "items": [
            {
                "type": "end",
                "id": "1"
            },
            {
                "type": "action",
                "content": "The hypothesis is not valid",
                "one": "1",
                "id": "10"
            },
            {
                "flag1": 1,
                "id": "11",
                "type": "question",
                "two": "12",
                "one": "13",
                "content": "Are there facts that confirm the predictions?"
            },
            {
                "type": "action",
                "content": "This hypothesis is a waste of time",
                "one": "1",
                "id": "12"
            },
            {
                "type": "action",
                "content": "The hypothesis could be a valid explanation of the question. Or maybe not.",
                "one": "1",
                "id": "13"
            },
            {
                "type": "branch",
                "branchId": 0,
                "one": "3",
                "id": "2"
            },
            {
                "type": "action",
                "id": "3",
                "one": "4",
                "content": "Investigate the question"
            },
            {
                "flag1": 0,
                "id": "4",
                "type": "question",
                "content": "Are there existing sufficient explanations?",
                "one": "6",
                "two": "5"
            },
            {
                "type": "action",
                "content": "Nothing to do, life is good",
                "one": "1",
                "id": "5"
            },
            {
                "type": "action",
                "id": "6",
                "one": "7",
                "content": "Form a hypothesis"
            },
            {
                "type": "action",
                "id": "7",
                "one": "8",
                "content": "Deduce predictions from the hypothesis"
            },
            {
                "type": "action",
                "id": "8",
                "one": "9",
                "content": "Compare the predictions to REPRODUCIBLE facts"
            },
            {
                "flag1": 0,
                "id": "9",
                "type": "question",
                "content": "Are there facts that contradict the predictions?",
                "one": "11",
                "two": "10"
            }
        ]
    }    

    function processDiagram(inputDiagram) {
        var result = {
            name: inputDiagram.name,
            params: inputDiagram.params,
            items: {}
        }

        for (var item of inputDiagram.items) {
            result.items[item.id] = item
        }

        return result
    }

    var diagrams = [example1, example2, example3, example4]
    return diagrams.map(processDiagram)
}