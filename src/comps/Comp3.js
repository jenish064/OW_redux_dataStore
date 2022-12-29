import React from 'react'
import { useDispatch } from 'react-redux'

export default function Comp3() {
  const dispatch = useDispatch()

  return (
    <div>
      {/* here we providing onClick event and type of the performance with dispatch. */}
      {/* this will change the redux data store values */}
        <h1>I am from Comp3</h1>
        <button onClick={() => dispatch({type: "INCREASE"})} >++</button>
        <button onClick={() => dispatch({type: "DECREASE"})} >--</button>
    </div>
  )
}
