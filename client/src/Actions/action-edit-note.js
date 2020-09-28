import actionEditNotePromise from './action-edit-note-promise'
import actionGetAllNotes from './action-get-allNotes'
import {history} from "../history/index";



export default function actionEditNote(title, text, id) {
    
    return async dispatch => {
        
        let data = await dispatch(actionEditNotePromise(title, text, id))
        await dispatch(actionGetAllNotes())
        if (data){            
            history.push('/')            
        }    
        
    }
}