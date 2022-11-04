import { useState } from "react";

import red from "../styles/card/redCard.module.scss"
import blue from "../styles/card/blueCard.module.scss"
import green from "../styles/card/greenCard.module.scss"
import blueText from "../styles/card/blueTextCard.module.scss"
import greenText from "../styles/card/greenTextCard.module.scss"

const useCreateTheme = () => {
    const [activeTheme, setActiveTheme] = useState(null);

    const setTheme = (theme) => {
        switch(theme) {
            case "red":
                setActiveTheme(red)
                break;
            case "blue":
                setActiveTheme(blue)
                break;
            case "green":
                setActiveTheme(green)
                break;
            case "blueText":
                setActiveTheme(blueText)
                break;
            case "greenText":
                setActiveTheme(greenText)
                break;
            default: 
                setActiveTheme(green)
        }
    }

    return {
        setTheme,
        activeTheme
    }
}
export default useCreateTheme;