import React from 'react';

type ButtonInpPropsType={
    name:string
    addMessage:()=>void
}

export const ButtonInp = (props:ButtonInpPropsType) => {

    const onClickButtonHandler = () => {
        props.addMessage()
    }

    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    );
};
