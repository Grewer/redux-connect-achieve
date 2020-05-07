import React, { useReducer, useState } from 'react'
import './App.css'
import Calculate from './Calculate'
import TodoList from './TodoList'
import { StoreContext } from './context'

const Reducer = (state: any, action: { type: string, payload: any }) => {
  console.log(state, action)
  switch (action.type) {
    case 'addNum':
      return Object.assign({}, state, { num: state.num + 1 })
    case 'addToDoList':
      return {
        ...state,
        todoList: state.todoList.concat(action.payload)
      }
    default:
      return state
  }
}

function Container(props: any) {
  const store = useReducer(Reducer, {
    num: 0,
    todoList: [] as any[]
  })

  return <StoreContext.Provider value={store}>
    {
      props.children
    }
  </StoreContext.Provider>

}

const Test = () => {
  console.log('render Test')
  const [test] = useState(() => {
    return 'testStr'
  })
  return <span>{test}</span>
}

function App() {
  return (
    <div className="App">
      <Container>
        <Calculate/>
        <TodoList/>
      </Container>
    </div>
  )
}

export default App
