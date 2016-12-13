import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'

export default function configureStore(initialState) {
  const finalCreateStore = compose(
    applyMiddleware(thunk),
    // maybe use promises here?
    window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore);

    const store = finalCreateStore(rootReducer, initialState);

    if (module.hot) {
      module.hot.accept('../reducers/rootReducer', () => {
        const nextReducer = require('../reducers/rootReducer');
      // might just be reducers instead of rootReducer?
        store.replaceReducer(nextReducer);
      })
    }

    return store
}
