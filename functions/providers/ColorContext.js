import { createContext } from "react";

exports.color = {
    primary: "#ffffff",
    primaryText: "#555555",
    highlight: "#000099",
    inactive: "#999999",
    background: "#89F1FF"
}

const dark = {
    primary: "#000",
    primaryText: "red",
    highlight: "blue",
    inactive: "green",
    background: "#007aff"
}

exports.ColorContext = createContext("");