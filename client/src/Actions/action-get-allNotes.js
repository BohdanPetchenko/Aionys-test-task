export default function actionGetAllNotes() {
    return dispatch => {
        fetch('/notes', {
          method: 'GET'
        }).then(res => res.json())
          .then(data => dispatch({ type: 'GET_NOTES', state: { notes: data } }))
      }
  
   
}