import react from 'react'
import reactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose} from 'redux'
import thunk from 'react-redux'

import reducers from './reducers'
import App from './App'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

reactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, 
        document.getElementById('root'))