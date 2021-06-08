import React, {useState} from 'react';
import TermOutput from "./TermOutput";
import Prompt from "./Prompt";

type MainProps = {
    headline: string;
    isCave: boolean;
    termPrompt: string;
}

const MainTerminal = (props: MainProps) => {
    const [output, setOutput] = useState(<div/>);

    const processCommand = (input: string) => {
        const filteredInput = input.toLowerCase().split(" ");

        switch(filteredInput[0]) {
            // they were there originally, so i have to do this - "dead commands"
            case "append":
            case "attrib":
            case "copy":
            case "format":
            case "erase":
            case "rename": {
                setOutput(<div>ERROR 15 [Disk is write protected]</div>);
                break;
            }
            // splitting input to a list is for these commands
            case "play": {
                if (filteredInput.length === 1) {
                    setOutput(<div>ERROR 03 [What would you like to play?]</div>);
                } else {
                    if (filteredInput[1] === "portal" && filteredInput.length === 2) {
                        setOutput(<script>
                            window.location.replace("https://www.youtube.com/watch?v=0h50K2NVJHM");
                        </script>);
                    } else {
                        setOutput(<div/>);
                    }
                }
                break;
            }
            case "interrogate": {
                if (filteredInput.length === 1) {
                    setOutput(<div>ERROR 02 [Command requires at least one parameter]</div>);
                } else {
                    if (props.isCave) {
                        setOutput(<div>ERROR 07 [Unknown Employee]</div>);
                    } else {
                        setOutput(<div>ERROR 01 [Illegal attempt to initiate disciplinary action]</div>);
                    }
                }
                break;
            }
            // tapedisk
            case "tapedisk": {
                setOutput(<div>ERROR 18 [User not authorized to transfer system tapes]</div>);
                break;
            }
        }
    }

    return (
        <div className="Term-content">
            <div>{props.headline}</div>
            <TermOutput contents={output}/>
            <Prompt
                termPrompt={props.termPrompt}
                processCommand={processCommand}/>
        </div>
    )

}

export default MainTerminal;