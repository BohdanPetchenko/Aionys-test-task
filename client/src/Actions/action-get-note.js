import actionGetNotePromise from './action-get-note-promise'
import {history} from "../history/index";



export default function actionGetNote(id) {
    
    return async dispatch => {
        
        let data = await dispatch(actionGetNotePromise(id))
        
        if (data){ 
            
            history.push(`/notes/${data.id}`)
                       
        }    
        
    }
}