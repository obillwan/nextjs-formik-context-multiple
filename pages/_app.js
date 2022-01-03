import React, {useReducer} from 'react'
// import {Provider} from 'react-redux'
// import {useStore} from '../src/store/store'
import { BirdContext } from '../src/state/context';
import { birds2, initialState } from '../src/store/reducers/birds2';
import '../src/styles/globals.css'


export default function App({ Component, pageProps }) {
  // const store = useStore(pageProps.initialReduxState)
  const [state, dispatch] = useReducer(birds2, initialState);

  return (
    // <Provider store={store}>
      <BirdContext.Provider value={{ state, dispatch }}>
        <Component {...pageProps} />
      </BirdContext.Provider>
    // </Provider>
  )
}
