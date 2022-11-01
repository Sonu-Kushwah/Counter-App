import React,{useState} from "react";

function Counter() {
    const [no,setNo]=useState(0);
    
    //decrement condition
    const dec=()=>{
      if(no>0){
        setNo(no-1)
      }        
    }
    //reset
    const reset=()=>{
        setNo(0);
    }
  return (
    <>
      <div className="container">
        <div className="counter">
          <h4>React Counter App</h4>
          <h5>{no}</h5>
          <div className="action">
            <button onClick={()=>{setNo(no+1)}} className="increment">Increment</button>
            <button onClick={()=>(no>0 ? setNo(no-1) : setNo(0))} className="decrement">Decrement</button>
            <button onClick={()=>{reset()}} className="reset">Reset</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
