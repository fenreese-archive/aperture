import React, {useState} from 'react';
import TermOutput from "./TermOutput";
import Prompt from "./Prompt";
import {LoggedOffHelp} from "../Modules/Help";

type StartProps = {
    termPrompt?: string;
    switchScenes: (command: string, currState: string) => void;
};

const NotLoggedIn = (props: StartProps) => {
    const [output, setOutput] = useState(<div/>);

    const processCommand = (input: string) => {
        const filteredInput = input.toLowerCase();

        switch(filteredInput) {
            case "help": {
                setOutput(LoggedOffHelp);
                break;
            }
            case "login": {
                // switch to Login component
                props.switchScenes(input, "logout");
                break;
            }
            default: {
                // do nothing
                break;
            }
        }
    };

    return (
        <div className="Term-content">
            <TermOutput contents={output}/>
            <Prompt
                termPrompt={props.termPrompt}
                processCommand={processCommand}
            />
        </div>
    )
};

export default NotLoggedIn;