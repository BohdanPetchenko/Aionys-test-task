import React from 'react';
import { Container, Button, Jumbotron } from 'react-bootstrap'
import { connect } from 'react-redux'
import actionDeleteNote from '../Actions/action-delete-note'

import d from '../helpers/d'
import store from '../store/index'
import { history } from '../history/index'
import { useTranslation } from 'react-i18next';



function GetNoteById({ onDelete }, { onEdit }) {
    const { t } = useTranslation();

    var item = store.getState()
    var idNote = d`${item}.getNote.payload.id` == undefined ? 0 : d`${item}.getNote.payload.id`

    return (
        <Container>
            <Jumbotron className="m-3">
                <h1>{d`${item}.getNote.payload.title`}</h1>
                <p>{d`${item}.getNote.payload.text`}</p>
                <p>
                    <Button className="mr-1" variant="primary" onClick={e => history.push(`/edite-note/${idNote}`)}>{t('NoteById.Edit')}</Button>
                    <Button variant="primary" onClick={e => {
                        onDelete && typeof onDelete === 'function' && onDelete(idNote)
                    }}>{t('NoteById.Delete')}
                    </Button>
                </p>
            </Jumbotron>
        </Container>
    )
}

const ConnectedDeleteNote = connect(null, { onDelete: actionDeleteNote })(GetNoteById);


const App = () =>
    <>
        <ConnectedDeleteNote />        
    </>

export default App;