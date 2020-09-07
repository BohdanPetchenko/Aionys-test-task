import actionPromise from './action-promise'


export default function actionEditNotePromise(title, text, id) {

    let promise = fetch(`/notes/${id}`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "PUT",
        body: JSON.stringify({ title, text })
    })
        
        

    return actionPromise('editNote', promise)
}

