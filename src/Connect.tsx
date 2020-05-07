import React, { useContext } from 'react'
import { StoreContext } from './context'
import _ from 'lodash'


const Connect = (mapStateToProps: (state: any) => any) => {
  return function wrapWithConnect(WrappedComponent: any) {

    const Container = (props: any) => {
      const [state, dispatch] = useContext(StoreContext)
      const storeProps = mapStateToProps(state)
      return <ConnectComponent {...storeProps} dispatch={dispatch} {...props}/>
    }

    const ConnectComponent: React.FC<any> = React.memo((props) => {
      return <WrappedComponent {...props} />
    }, (prevProps, nextProps) => {
      console.log('值的比较', _.isEqual(prevProps, nextProps))
      return _.isEqual(prevProps, nextProps)
    })

    return Container
  }
}


export default Connect
