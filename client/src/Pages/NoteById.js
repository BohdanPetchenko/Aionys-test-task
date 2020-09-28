import React from 'react';
import { Container, Button, Jumbotron } from 'react-bootstrap'
import { connect } from 'react-redux'
import actionDeleteNote from '../Actions/action-delete-note'

import d from '../helpers/d'
import { history } from '../history/index'
import { useTranslation } from 'react-i18next';



function GetNoteById(props) {
    const { t } = useTranslation();
    debugger

    return (
        <Container>
            <Jumbotron className="m-3">
                <h1>{d`${props}.noteById.title`}</h1>
                <p>{d`${props}.noteById.text`}</p>
                <p>
                    <Button className="mr-1" variant="primary" onClick={e => history.push(`/edite-note/${props.noteById.id}`)}>{t('NoteById.Edit')}</Button>
                    <Button variant="primary" onClick={e => {
                        props.onDelete && typeof props.onDelete === 'function' && props.onDelete(props.noteById.id)
                    }}>{t('NoteById.Delete')}
                    </Button>
                </p>
            </Jumbotron>
        </Container>
    )
}

function mapStateToProps(state) {
    debugger
    return {
        noteById: state.noteReducer.get("noteById"),
        
    };
}

const ConnectedDeleteNote = connect(mapStateToProps, { onDelete: actionDeleteNote })(GetNoteById);


const App = () =>
    <>
        <ConnectedDeleteNote />        
    </>

export default App;