import React from 'react';
import { Container, ListGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next';

import actionGetNote from '../Actions/action-get-note'

function GetNotes(props) {
    const { t } = useTranslation();
      
    
    return (
        <Container>
            <ListGroup className="mt-3">
                {(props.notes.length == 0) ?
                    <h1 className='no-notes' style={{ textAlign: "center" }}>{t('NoNotes.NoNotes')}</h1>
                    :
                    props.notes.map(({ title, id }) => (
                        <div key={id}>
                            <ListGroup.Item className="mt-2" action onClick={e => {
                                e.preventDefault()
                                props.onNote && typeof props.onNote === 'function' && props.onNote(id)
                            }}>
                                <div><strong>{title}</strong></div>

                            </ListGroup.Item>

                        </div>
                    ))
                }
            </ListGroup>
        </Container >
    )
}

const ConnectedGetNoteForm = connect(mapStateToProps, { onNote: actionGetNote })(GetNotes);


function mapStateToProps(state) {
    
    return {
        notes: state.noteReducer.get("notes")      
    };
}

const App = () =>
    <>
        <ConnectedGetNoteForm />
    </>

export default App