import {useState} from "react";

export const useMouseHover = (state: boolean = false) => {
    const [hover, setHover] = useState<boolean>(state);

    const toggle_hover = () => setHover(!hover);

    return {hover, toggle_hover};
}
