import React from 'react';

type MainProps = {
    isCave: boolean;
}

const MainTerminal = (props: MainProps) => {
    if (props.isCave) {
        return (<div>uwu1</div>)
    } else {
        return (<div>uwu2</div>)
    }

}

export default MainTerminal;