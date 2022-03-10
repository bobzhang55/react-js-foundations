import { useState, useEffect } from 'react';
import './style.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function Clicker4() {
  const [count, setCount] = useState(
    Number(localStorage.getItem('counter')) || 0
  );

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };
  const resetCount = () => {
    localStorage.clear();
    setCount(0);
  };

  useEffect(() => {
    localStorage.setItem('counter', count);
  }, [count]);

  return (
    <>
      <div className="container">
        <h1 className="current-count">{count}</h1>
        <button className="increment-button" onClick={incrementCount}>
          +
        </button>
        <br />
        <button className="reset-button" onClick={resetCount}>
          reset
        </button>
      </div>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import {useState,useEffect} from 'react';
import './style.css';

function Clicker4(){
    const [count,setCount] = useState(Number(localStorage.getItem('counter')) || 0);

    const incrementCount = ()=>{
        setCount((prev)=>prev+1);
    }
    const resetCount = ()=>{
        localStorage.clear();
        setCount(0);
    }
    
    useEffect(()=>{
        localStorage.setItem('counter',count);
    },[count]);

    return(
        <div className="container">
            <h1 className="current-count">{count}</h1>
            <button className="increment-button"
                    onClick={incrementCount}>+</button><br />
            <button className="reset-button"
                    onClick={resetCount}>reset</button>
        </div>
    )
}

export default Clicker4;`}
      </SyntaxHighlighter>
    </>
  );
}

export default Clicker4;
