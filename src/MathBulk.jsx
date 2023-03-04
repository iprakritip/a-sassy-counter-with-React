import React, { useState } from 'react';


const MathBulk = () => {

   const [result, setResult]= useState(0);
   
   const add5= ()=>{
       setResult(result+5);
   }
   const add1= ()=>{
    setResult(result+1);
   }
   const add10= ()=>{
    setResult(result+10);
   }
   const sub5= ()=>{
    if (result>=5){
    setResult(result-5);
    }
   }
   const sub1= ()=>{
    if (result>=1) {
    setResult(result-1);
    }
   }
   const sub10= ()=>{
   if (result>=10) {
    setResult(result-10);
    }
   }
   const resetResult=()=>{
    setResult(0);
   }

  return (
    <div className='mathBulk'>
     <div className="mathContainer">
      <div className="topMath">
         <p  className='plus5' onClick={add5}>+5</p>
         <p className='plus sign' onClick={add1}>+</p>
         <p className='plus10' onClick={add10}>+10</p>
      </div>

      <p className='result'>{result}</p>

      <div className="bottomMath">
         <p className='minus5' onClick={sub5}>-5</p>
         <p className='minus sign' onClick={sub1}>-</p>
         <p className='minus10' onClick={sub10}>-10</p>
      </div>

     </div>
     <p className="resetBtn" onClick={resetResult}></p>
     
    </div>
  )
}

export default MathBulk;