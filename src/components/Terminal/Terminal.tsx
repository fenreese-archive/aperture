import React from 'react';
import Prompt from './Prompt';

type TermProps = {
  termPrompt?: string;
}

const Terminal = (props: TermProps) => {
  return (
  <div className="Term-container">
    <div className="Term-content">
      <Prompt 
        termPrompt = {props.termPrompt}
      />
    </div>
  </div>
  );
};

export default Terminal;