import React, { useState } from 'react';

type PromptProps = {
  termPrompt?: string;
  processCommand: (input: string) => void;
  isPassword?: boolean;
}

const Prompt = (props: PromptProps) => {
  const [input, setInput] = useState("");

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        props.processCommand(input);
        setInput("");
      }
    };

  const inputField = (props.isPassword? <input
      type="password"
      className="Prompt-text"
      name="input"
      onChange = {e => setInput(e.target.value)}
      onKeyDown = {handleKeyPress}
      value = {input}
  /> : <input
      type="text"
      className="Prompt-text"
      name="input"
      onChange = {e => setInput(e.target.value)}
      onKeyDown = {handleKeyPress}
      value = {input}
  />)

  return (
      <div className="Prompt-area">
        <span className="Prompt">{props.termPrompt}</span>{inputField}
      </div>
  );
};

export default Prompt;