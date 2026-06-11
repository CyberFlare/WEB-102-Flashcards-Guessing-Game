import React from 'react'

function Counter(props) {

  return (
    <div className="Counter">
        <p>Number of Cards Left: {props.count}</p>
    </div>
  )
}

export default Counter
