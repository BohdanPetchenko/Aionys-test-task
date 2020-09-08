import React, { useState, useEffect } from 'react';
import { Container, ListGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next';

import actionGetNote from '../Actions/action-get-note'

function GetNotes({ onNote }) {
    const { t } = useTranslation();

    const [notes, setNotes] = useState([])


    useEffect(() => {

        fetch('/notes', {
            method: 'GET'
        }).then(res => res.json())
            .then(data => setNotes(data))
    }, [])

    return (
        <Container>
            <ListGroup className="mt-3">
                {(notes.length == 0) ?
                    <h1 className='no-notes' style={{ textAlign: "center" }}>{t('NoNotes.NoNotes')}</h1>
                    :
                    notes.map(({ title, id }, index) => (
                        <div key={index}>
                            <ListGroup.Item className="mt-2" action onClick={e => {
                                e.preventDefault()
                                onNote && typeof onNote === 'function' && onNote(id)
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

const ConnectedGetNoteForm = connect(null, { onNote: actionGetNote })(GetNotes);


const App = () =>
    <>
        <ConnectedGetNoteForm />
    </>

export default App