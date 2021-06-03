import React, { useState } from 'react';

type PromptProps = {
  termPrompt?: string;
  processCommand: (input: string) => void;
}

const Prompt = (props: PromptProps) => {
  const [input, setInput] = useState("");

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        props.processCommand(input);
        setInput("");
      }
    };

  return (
      <div className="Prompt-area">
        <span className="Prompt">{props.termPrompt}</span>
        <input
          type="text"
          className="Prompt-text"
          name="input"
          onChange = {e => setInput(e.target.value)}
          onKeyDown = {handleKeyPress}
          value = {input}
        />
      </div>
  );
};

export default Prompt;