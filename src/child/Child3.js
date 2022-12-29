import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Child3() {
  //dispatch gets us the access of the reducer function of the redux data store, using which we can change any value of data store from any where
  const dispatch = useDispatch()

  const count = useSelector((state) => state.counter)
  const addPressCount = useSelector((state) => state.addPressed)
  const subPressCount = useSelector((state) => state.subPressed)
  return (
    <div>
        <h1>I am from Child3</h1>
        <h3><p>Counter : {count}</p></h3>

        <p>'++' was pressed {addPressCount} times</p>
        <p>'--' was pressed {subPressCount} times</p>

        <br></br>
        {/* with dispatch, updating pace property in data store of redux */}
        {/* we are also providing the type and input value as an action payload to redux data store, which will be cought by action parameter of the Reducer function */}
        <input placeholder='Enter pace' onChange={(e) => dispatch({
          type: "SET_PACE",
          payload: e.target.value})}/>
    </div>
  )
}
