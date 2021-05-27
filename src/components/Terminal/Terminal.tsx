import React, { useState } from 'react';
import Prompt from './Prompt';
import TermOutput from './TermOutput';

import Help from '../Modules/Help';

type TermProps = {
  termPrompt?: string;
}

const Terminal = (props: TermProps) => {
  const [output, setOutput] = useState(<div/>);
  const [isLogin, setIsLogin] = useState(false);

  const processCommand = (input: string) => {
    const filteredInput = input.toLowerCase();

    switch(filteredInput) {
      case "help": {
        if (!isLogin) {
          setOutput(Help);
        }
        break;
      }
      default: {
        setOutput(<div/>);
        break;
      }
    }
  };

  return (
    <div className="Term-container">
      <div className="Term-content">
        <TermOutput contents ={output} />
        <Prompt
          termPrompt = {props.termPrompt}
          processCommand = {processCommand}
        />
      </div>
    </div>
  );
};

export default Terminal;