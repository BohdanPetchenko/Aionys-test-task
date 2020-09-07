import actionDeleteNotePromise from './action-delete-note-promise'
import {history} from "../history/index";



export default function actionDeleteNote(id) {
    
    return async dispatch => {
        debugger
        let data = await dispatch(actionDeleteNotePromise(id))
        
        if (data){            
            history.push('/')            
        }    
        
    }
}