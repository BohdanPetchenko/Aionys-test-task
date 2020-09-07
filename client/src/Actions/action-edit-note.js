import actionEditNotePromise from './action-edit-note-promise'
import {history} from "../history/index";



export default function actionEditNote(title, text, id) {
    
    return async dispatch => {
        
        let data = await dispatch(actionEditNotePromise(title, text, id))
        
        if (data){            
            history.push('/')            
        }    
        
    }
}