import React, {useState} from 'react';
import Prompt from "../Components/Prompt";

type LoginProps = {
    handleInput: (currState: string) => void;
}

const LoginPrompt = (props: LoginProps) => {
    let usernameEntered = false;
    let isCave = false;

    const processCommand = (field: string) => {
        const filteredInput = field.toLowerCase();

        // Entering password
        if (usernameEntered) {
            let matchString = [];
            if (isCave) {
                matchString.push("tier3");
            } else {
                matchString.push("portal", "portals");
            }

            if (matchString.includes(filteredInput)) {
                props.handleInput("loggedin");
            }
        // Entering username
        } else {
            if (filteredInput === "cjohnson") {
                props.handleInput("iscave");
                isCave = true;
            }
            usernameEntered = true;
            setPrompt(<Prompt termPrompt="Password>" processCommand={processCommand} isPassword={true}/>);
        }
    }
    const [prompt, setPrompt] = useState(<Prompt termPrompt="Username>" processCommand={processCommand}/>);
    return(prompt);
}

export default LoginPrompt;