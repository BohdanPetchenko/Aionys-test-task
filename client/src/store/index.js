
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import reducer from '../reducers/index'


const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => console.log(store.getState()))



fetch('/notes', {
    method: 'GET'
})
    .then(res => res.json())
    .then((data => {
        store.dispatch({
            type: "SET_STATE",
            state: {
                notes: data
            }
        });
    }))

export default store