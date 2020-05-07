import React, { useState } from 'react'
import Connect from './Connect'

function Calculate(props: any) {
  console.log('render Calculate', props)

  const addHandle = () => {
    console.log('run addHandle')
    props.dispatch({ type: 'addNum' })

  }
  return (<div>
    num:{props.num}
    <button onClick={addHandle}>add num
    </button>
  </div>)
}

function storeMapToProps(state: any) {
  // console.log('storeMapToProps Calculate', state)
  return { num: state.num }
}

export default Connect(storeMapToProps)(Calculate)
