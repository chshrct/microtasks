import React, {MouseEvent} from 'react';
import './App.css';
import {Button} from "./components/Button";

function App() {

    const buttonFoo = (name:string,age:number) => {
        console.log(name,age)
    }
    const stupidButtonHello = ()=>console.log('im stupid button')


  return (
    <div className="App">
      <Button name={'YoutubeChannel1'}
              callback={()=>buttonFoo('Vasiliy',21)}/>
      <Button name={'YoutubeChannel2'}
              callback={()=>buttonFoo('Aleksey',36)}/>
        <Button name={'+'} callback={stupidButtonHello}/>
    </div>
  );
}

export default App;
