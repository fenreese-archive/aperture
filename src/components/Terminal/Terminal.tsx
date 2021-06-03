import React, {useState} from 'react';
import NotLoggedIn from "./NoUser";
import LoginPrompt from "./LoginPrompt";

const Terminal = () => {
    const switchScenes = (command: string, currState: string) => {
        if (command === "login" && currState === "logout") {
            setCurrState(<LoginPrompt/>)
        }
    }

    const [CurrState, setCurrState] = useState(<NotLoggedIn
        termPrompt=">"
        switchScenes = {switchScenes}/>)

  return (
    <div className="Term-container">
        {CurrState}
    </div>
  );
};

export default Terminal;