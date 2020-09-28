var reducer = function (state = new Map(), action) {

    if (action.type === 'GET_NOTE') {
        return state.set("noteById", action.state.noteById)
    }
    else if (action.type === 'GET_NOTES') {
        return state.set("notes", action.state.notes)
    }
    else if (action.type === 'SET_STATE') {

        return state.set("notes", action.state.notes)
    }
    return state;
}
module.exports = reducer;