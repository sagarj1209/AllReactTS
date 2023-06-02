import { applyMiddleware, legacy_createStore as createStore} from 'redux'
import { rootReducer } from './reducers/rootReducer';
import reduxthunk from 'redux-thunk'

const appStore = createStore(rootReducer , applyMiddleware(reduxthunk));

export {appStore};