import { createStore, applyMiddleware } from 'redux'
import thunk from 'thunk'

const store = createStore(reducer, applyMiddleware(thunk))