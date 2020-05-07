import React, { useState } from 'react'
import Connect from './Connect'


const TodoList = (props: any) => {
  console.log('render TodoList', props)
  const [Input, setInput]: [string, React.Dispatch<React.SetStateAction<string>>] = useState('')

  return (<div>TodoList
    <input onBlur={event => setInput(event.target.value)}/>
    <button onClick={() => {
      props.dispatch({ type: 'addToDoList', payload: Input })
    }}> add
    </button>
    <p>List:</p>
    <ul>

      {
        props.todoList.map((v: any, k: number) => {
          return <li key={v + k}>{v}</li>
        })
      }

    </ul>
  </div>)
}

function storeMapToProps(state: any) {
  // console.log('storeMapToProps TodoList', state)
  return { todoList: state.todoList }
}


export default Connect(storeMapToProps)(TodoList)
