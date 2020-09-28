import { history } from "../history/index";

export default function actionGetNote(id) {
   
    return dispatch => {

        fetch(`/notes/${id}`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => dispatch({ type: 'GET_NOTE', state: { noteById: data } }))
            .then(data => history.push(`/notes/${id}`))

    }
}