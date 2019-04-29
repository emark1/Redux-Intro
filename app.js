const redux = require('redux')

const storeState = {
    counter: 0,
}

let rootReducer = (state = storeState,action) => {
    if(action.type == "ADD_COUNTER") {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
}

const store = redux.createStore(rootReducer)


store.subscribe(() => {
    console.log("[Subscribed]",store.getState())
})

store.dispatch({
    type: "ADD_COUNTER", value: 10
})

