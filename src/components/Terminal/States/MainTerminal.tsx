import React, {useState} from 'react';
import TermOutput from "../Components/TermOutput";
import Prompt from "../Components/Prompt";
import {AdminFiles, UserFiles} from "../../Modules/Directory";
import {AdminHelp, UserHelp} from "../../Modules/Help";

type MainProps = {
    headline: string;
    isCave: boolean;
    termPrompt: string;
    uid: string;
    handleInput: (currState: string, uid?: string) => void;
}

const MainTerminal = (props: MainProps) => {
    const [output, setOutput] = useState(<div/>);

    const processCommand = (input: string) => {
        const filteredInput = input.toLowerCase().split(" ");

        switch(filteredInput[0]) {
            // yay showing current directory!
            case "dir":
            case "catalog":
            case "directory":
            case "list":
            case "ls":
            case "cat": {
                props.isCave ? setOutput(AdminFiles) : setOutput(UserFiles);
                break;
            }
            // help
            case "help":
            case "lib":
            case "?": {
                props.isCave ? setOutput(AdminHelp) : setOutput(UserHelp);
                break;
            }
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
            // logging off
            case "logout":
            case "bye":
            case "logoff":
            case "valve": {
                setOutput(<div>bye</div>);
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
            // show UID(+L)
            case "ip": {
                setOutput(<div>uid:{props.uid}</div>);
                break;
            }
            // application
            case "apply":
            case "apply.exe": {
                props.handleInput("application", props.uid);
                break;
            }
            // the Secret Command
            case "thecakeisalie": {
                props.handleInput("cake");
                break;
            }
            // notes
            case "notes":
            case "notes.exe": {
                props.isCave?
                    props.handleInput("lore") :
                    setOutput(<div>ERROR 24 [File '{filteredInput}' not found]</div>);
                break;
            }
            default: {
                setOutput(<div>ERROR 24 [File '{filteredInput}' not found]</div>);
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