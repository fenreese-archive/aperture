import React, {useState} from 'react';
import Prompt from "./Prompt";

type LoginProps = {
    handleInput: (command: string, currState: string) => void;
}

const LoginPrompt = (props: LoginProps) => {
    let usernameEntered = false;
    let isCave = true;

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
                props.handleInput(field, "loggedin");
            }
        // Entering username
        } else {
            if (filteredInput === "cjohnson") {
                props.handleInput(field, "loggingin");
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