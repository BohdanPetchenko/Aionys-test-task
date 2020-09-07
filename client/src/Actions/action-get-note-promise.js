import actionPromise from './action-promise'

export default function actionGetNotePromise(id) {

  let promise = fetch(`/notes/${id}`, {
    method: "GET"
  })
    .then(res => res.json())
    
       

  return actionPromise('getNote', promise)
}

