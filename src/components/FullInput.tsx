import React, {ChangeEvent, useState} from "react";

type FullInputType = {
    addMessage: (str: string) => void
}

export const FullInput = (props: FullInputType) => {
    const [inpVal, setInpVal] = useState('')

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInpVal(e.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addMessage(inpVal)
        setInpVal('')
    }

    return <div>
        <input onChange={onChangeInputHandler} value={inpVal}/>
        <button onClick={onClickButtonHandler}>+</button>
    </div>
}