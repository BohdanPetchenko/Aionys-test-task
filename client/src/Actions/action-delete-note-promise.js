import actionPromise from './action-promise'


export default function actionDeleteNotePromise(id) {

    let promise = fetch(`/notes/${id}`, {        
        method: "DELETE"
    })
    
        

    return actionPromise('deleteNote', promise)
}

