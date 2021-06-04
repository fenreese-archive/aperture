import React, {useState} from 'react';
import NotLoggedIn from "./NoUser";
import LoginPrompt from "./LoginPrompt";
import MainTerminal from "./MainTerminal";

const Terminal = () => {
    // for logged in (and if you're Cave Johnson)
    // const [IsLoggedIn, setIsLoggedIn] = useState(false);
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
            setCurrState(<MainTerminal isCave={isCave}/>)
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