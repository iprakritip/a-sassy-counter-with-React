import React from 'react'
import MathBulk from './MathBulk';
import Time from './Time';

const Container = () => {
  return (
    <div className="container">
        <div className="top">
          <h3 className='counterH3'>Counter Pro Max</h3>
          <Time/>
        </div>
        <div className="bottom">
          <MathBulk/>
        </div>
    </div>
  )
}

export default Container;