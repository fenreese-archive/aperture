import React, {useState} from 'react';
import NotLoggedIn from "./States/NoUser";
import LoginPrompt from "./States/LoginPrompt";
import MainTerminal from "./States/MainTerminal";

const base16 = '1234567890abcdef';

const GenerateID = () => {
    let id = '';
    for (let i = 0; i < 64; i++) {
        id += base16[Math.floor(16 * Math.random())];
    }
    return id;
}

const Terminal = () => {
    // for if you're Cave Johnson
    let isCave = false;

    const stateHandler = (currState: string, uid?: string) => {
        switch (currState) {
            case "logout": {
                setCurrState(<LoginPrompt
                    handleInput={stateHandler}/>);
                break;
            }
            case "iscave": {
                isCave = true;
                break;
            }
            case "loggedin": {
                const uid = GenerateID();

                setCurrState(<MainTerminal
                        headline={isCave ? "GLaDOS v1.07a (c) 1982 Aperture Science, Inc." :
                            "GLaDOS v1.07a (c) 1982 Aperture Science, Inc."}
                        isCave={isCave}
                        termPrompt={isCave ? "ADMIN>" : "B:\\>"}
                        uid={uid}
                        handleInput={stateHandler}
                    />
                );
                break;
            }
            case "application": {
                // switch to application process
                break;
            }
            case "lore": {
                // switch to lore
                break;
            }
            case "cake": {
                //switch to the cool cake is a lie thing
                break;
            }
        }
    }

    const [CurrState, setCurrState] = useState(<NotLoggedIn
        termPrompt=">"
        switchScenes={stateHandler}/>)

    return (
        <div className="Term-container">
            {CurrState}
        </div>
    );
};

export default Terminal;