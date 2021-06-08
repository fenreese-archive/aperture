import React, {useState} from 'react';
import NotLoggedIn from "./NoUser";
import LoginPrompt from "./LoginPrompt";
import MainTerminal from "./MainTerminal";

const Terminal = () => {
    // for if you're Cave Johnson
    let isCave = false;

    const stateHandler = (command: string, currState: string) => {
        if (command === "login" && currState === "logout") {
            setCurrState(<LoginPrompt
                            handleInput={stateHandler}/>)
        }
        else if (command === "cjohnson") {
            isCave = true;
        }
        else if (currState === "loggedin") {
            // setIsLoggedIn(true);
            setCurrState(<MainTerminal
                headline={isCave ? "GLaDOS v1.07a (c) 1982 Aperture Science, Inc." :
                    "GLaDOS v1.07a (c) 1982 Aperture Science, Inc."}
                isCave={isCave}
                termPrompt={isCave ? "ADMIN>" : "B:\\>"}
                />
            )
        }
    }

    const [CurrState, setCurrState] = useState(<NotLoggedIn
        termPrompt=">"
        switchScenes = {stateHandler}/>)

  return (
    <div className="Term-container">
        {CurrState}
    </div>
  );
};

export default Terminal;