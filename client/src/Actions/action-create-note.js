import actionCreateNotePromise from './action-create-note-promise'
import {history} from "../history/index";



export default function actionCreateNote(title, text) {
    
    return async dispatch => {
        
        let data = await dispatch(actionCreateNotePromise(title, text))
        
        if (data){            
            history.push('/')            
        }    
        
    }
}