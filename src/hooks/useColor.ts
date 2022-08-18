import {useState} from "react";

export const useColor = (originalColor: string = "black") => {
    const [color, setColor] = useState<string>(originalColor)

    const setRandomColor = () => Math.round(Math.random() * 1000) % 255
    const changeColor = () => {
        setColor(`rgb(${setRandomColor()}, ${setRandomColor()}, ${setRandomColor()})`)
    }
    const restoreColor = () => setColor(originalColor)

    const boxStyle = {
        width: '255px',
        height: '255px',
        background: color
    }

    return {
        boxStyle,
        changeColor,
        restoreColor
    }
}
