import React from 'react'
import './container.css'

const ShimmerEffect = () => {
  return (
    <div className='shimmer-div' >
      {Array(4).fill("").map((e, i) =>
        <div className='shimmer-value' key={i} >
          <img src="" className='loader-img loader' />
          <h1 className='loader'>  </h1>
          <h3 className='loader'></h3>

          <h3 className='loader'>  </h3>
        </div>
      )}

    </div>
  )
}

export default ShimmerEffect
