import React, { Component } from 'react';

type PromptProps = {
  termPrompt?: string;
}

const Prompt = (props: PromptProps) => {
  return (
    <div className="Prompt">
      <span>{props.termPrompt}</span> 
      <input
        type="text"
        className="Prompt-text"
        name="input"
      />
    </div>
  );
};

export default Prompt;