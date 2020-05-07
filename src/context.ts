import { createContext } from 'react'
import _ from 'lodash'

export const StoreContext = createContext(
  // {
  //   store: {
  //     num: 0, todoList: []
  //   },
  //   setStore: ({ type, payload }: { type: string, payload: any }) => {
  //   }
  // },
  [
    {
      num: 0, todoList: []
    },
    ({ type, payload }: { type: string, payload: any }) => {
    }
  ],
  // (prev, next) => {
  //   // console.log('TableContext 是否相等', _.isEqual(prev.fetch, next.fetch),prev,next)
  //   console.log('StoreContext', Number(!_.isEqual(prev, next)) ? '值不相等 渲染' : '值相等 不渲染')
  //   return Number(!_.isEqual(prev, next))
  //   // true 相等 不渲染 => 0
  //   // false 不相等 渲染 => 1
  // }
)
