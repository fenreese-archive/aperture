import React from 'react';

type OutputProps = {
  contents: JSX.Element
};

const TermOutput = (props: OutputProps) => {
  return <>{props.contents}</>;
};

export default TermOutput;