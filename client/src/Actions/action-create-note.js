import actionCreateNotePromise from './action-create-note-promise'
import actionGetAllNotes from './action-get-allNotes'
import {history} from "../history/index";



export default function actionCreateNote(title, text) {
    
    return async dispatch => {
        
        let data = await dispatch(actionCreateNotePromise(title, text))
        await dispatch(actionGetAllNotes())
        if (data){            
            history.push('/')            
        }    
        
    }
}