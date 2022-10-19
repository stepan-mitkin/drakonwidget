function createThemes() {
    return [
        {
            "name": "Bright questions",
            "id": "theme-bq",
            "maxWidth": 300,
            "theme": {
                "lineWidth": 1,
                "background": "#afddfa",
                "iconBorder": "#b0c0e0",
                "iconBack": "white",
                "shadowColor": "rgba(0, 0, 50, 0.15)",
                "icons": {
                    "question": {
                        borderWidth: 0,
                        "iconBack": "darkred",
                        "color": "yellow"
                    },
                    "loopbegin": {
                        borderWidth: 0,
                        "iconBack": "blue",
                        "color": "white"
                    },
                    "loopend": {
                        borderWidth: 0,
                        "iconBack": "blue",
                        "color": "white"
                    }
                }
            }
        },
        {
            name: "Strict",
            id: "theme-str",
            maxWidth: 300,
            theme: {
                lineWidth: 1,
                background: "#afddfa",
                iconBorder: "#b0c0e0",
                iconBack: "white",
                shadowColor: "rgba(0, 0, 50, 0.15)"
            }
        },
        {
            name: "Classic",
            id: "theme-class",
            maxWidth: 200,
            theme: {
                lineWidth: 1,
                background: "#97D3E1",
                iconBorder: "black",
                iconBack: "white",
                shadowColor: ""
            }
        },
        {
            name: "Egg",
            id: "theme-egg",
            maxWidth: 300,
            theme: {
                lineWidth: 1,
                borderWidth: 0,
                background: "white",
                iconBorder: "black",
                iconBack: "#FFE26C",
                shadowColor: "",
                icons: {
                    question: { iconBack: "#FFA849" },
                    loopbegin: { iconBack: "#F2C371" },
                    loopend: { iconBack: "#F2C371" }
                }
            }
        },
        {
            "name": "Green",
            "id": "theme-green",
            "maxWidth": 250,
            "theme": {
                "lineWidth": 2,
                "borderWidth": 2,
                "background": "white",
                "iconBorder": "#00987E",
                "iconBack": "#AFF0DD",
                "shadowColor": "",
                "icons": {
                    "question": {
                        "iconBack": "#8FD6C2"
                    },
                    "loopbegin": {
                        "iconBack": "#85C2C5"
                    },
                    "loopend": {
                        "iconBack": "#85C2C5"
                    }
                }
            }
        },
        {
            "name": "Greys",
            "id": "theme-greys",
            "maxWidth": 300,
            "theme": {
                "lineWidth": 1,
                "background": "#dfdfdf",
                "iconBorder": "#C0C0C0",
                "iconBack": "white",
                "shadowColor": "rgba(0, 0, 0, 0.15)"
            }
        },
        {
            "name": "Grey on white",
            "id": "theme-gow",
            "maxWidth": 300,
            "theme": {
                "lineWidth": 1,
                "background": "white",
                "iconBorder": "#A0A0A0",
                "iconBack": "#EDEEF0",
                "shadowColor": "",
                "icons": {
                    "question": {
                        borderWidth: 0,
                        "iconBack": "#436AB9",
                        "lineWidth": 0,
                        "color": "white"
                    }
                }
            }
        },
        {
            "name": "White",
            "id": "theme-white",
            "maxWidth": 300,
            "theme": {
                "lineWidth": 1,
                "background": "white",
                "iconBorder": "black",
                "iconBack": "white",
                "shadowColor": ""
            }
        }

    ]
}
