import {useColor} from "./hooks/useColor";

const App = () => {
    const {boxStyle, restoreColor, changeColor} = useColor();

    return (
        <div className="flex justify-center items-center w-full h-screen">
            <div
                style={boxStyle}
                onMouseEnter={changeColor}
                onMouseLeave={restoreColor}
                onDoubleClick={restoreColor}
            ></div>
        </div>
    )
}

export default App
