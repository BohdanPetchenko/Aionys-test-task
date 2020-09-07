import actionPromise from './action-promise'


export default function actionCreateNotePromise(title, text) {

    let promise = fetch("/notes", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ title, text })
    })
        .then(res => res.json())
        

    return actionPromise('createNote', promise)
}

