import { combineReducers } from 'redux-immutable'
import { connectRouter } from 'connected-react-router/immutable'
import { reducer as toastrReducer } from 'react-redux-toastr'

const rootReducer = history =>
  combineReducers({
      router: connectRouter(history),
      toastrReducer,
  })

export default rootReducer
