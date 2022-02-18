import React, {ChangeEvent} from 'react';

type InputPropsType = {
    value:string
    updateMessage:(e:string)=>void
}


export const Input = (props:InputPropsType) => {

    const onChangeInputHandler = (e:ChangeEvent<HTMLInputElement>) => {
        props.updateMessage(e.currentTarget.value)
    }

    return (
        <input value={props.value} onChange={onChangeInputHandler}/>
    );
};

