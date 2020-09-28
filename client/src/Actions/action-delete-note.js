import actionGetAllNotes from './action-get-allNotes'
import actionDeleteNotePromise from './action-delete-note-promise'
import {history} from "../history/index";



export default function actionDeleteNote(id) {
    
    return async dispatch => {
        
        let data = await dispatch(actionDeleteNotePromise(id))
        await dispatch(actionGetAllNotes())
        if (data){            
            history.push('/')            
        }    
        
    }
}