import { useState } from "react";

const useTogglePasswordType = () => {
    const [visible, setVisibility] = useState(false);
    const icon = (
        <img src={visible ? "/img/eye.svg" : "/img/eye-hide.svg"} alt="" onClick={() => { setVisibility(visibility => !visibility) }} />
    )
    const inputType = visible ? "text" : "password"
    return [inputType, icon]
}

export default useTogglePasswordType;