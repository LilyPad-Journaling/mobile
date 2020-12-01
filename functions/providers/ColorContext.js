import { createContext, useEffect, useState } from "react";

const original = {
    primary: "#ffffff",
    primaryText: "#555555",
    highlight: "#000099",
    inactive: "#999999",
    background: "#89F1FF"
}

// Scott's dark mode from the google doc
// need to deal w invisible header words
const dark1 = {
	primary: "#000000",
	primaryText: "#ffffff",
	highlight: "#0f4c75",
	inactive: "#3282b8",
	background: "#1b262c"
}

// VS Code style
const dark2 = {
	primary: "#252526",
	primaryText: "#ffffff",
	highlight: "#7abada",
	inactive: "#aaaaaa",
	background: "#1e1e1e"
}

// Babb.io style
const dark3 = {
    primary: "#1c2d3a",
	primaryText: "#ffffff",
	highlight: "#0087f2",
	inactive: "#7f8488",
	background: "#131e2a"
}

// needs some work, invisible header words
const cyberpunk = {
    primary: "#000000",
    primaryText: "red",
    highlight: "blue",
    inactive: "green",
    background: "#007aff"
}

const green = {
    primary: "#ffffff",
    primaryText: "#465448",
    highlight: "#004509",
    inactive: "#687c6b",
    background: "#9fd984"
}

const yellow = {
    primary: "#ffffff",
    primaryText: "#42291A",
    highlight: "#c49609",
    inactive: "#a38561",
    background: "#fff2cc"
}

const lavender = {
    primary: "#ffffff",
	primaryText: "#594063",
	highlight: "#9851b1",
	inactive: "#a68caf",
	background: "#f2d8fc"
}

const pink = {
    primary: "#ffffff",
    primaryText: "#59264b",
    highlight: "#b6408d",
    inactive: "#926787",
    background: "#ffdcf6"
}

const periwinkle = {
    primary: "#ffffff",
    primaryText: "#0b0b55",
    highlight: "#000099",
    inactive: "#646483",
    background: "#c1c1f5"
}

const blue = {
    primary: "#ffffff",
    primaryText: "#0d2646",
    highlight: "#1561c0",
    inactive: "#536881",
    background: "#c5dfff"
}

const colorSchemes = {
    blue, periwinkle, pink, lavender, yellow, green, cyberpunk, dark3, dark2, dark1, original
}

const useColor = () => {
    const [name, setName] = useState("original");
    const [color, setColor] = useState(original);

    useEffect(() => { 
        setColor(colorSchemes[name])
     },[name]);

     return {color, setName, colorSchemes}

}

exports.useColor = useColor;
exports.color = dark2
exports.ColorContext = createContext("");