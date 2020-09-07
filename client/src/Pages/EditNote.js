import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next';

import actionEditNote from '../Actions/action-edit-note'
import d from '../helpers/d'
import store from '../store/index'


const EditNote = ({onNote}) => {
    const { t } = useTranslation();

    var item = store.getState()
    var idNote = d`${item}.getNote.payload.id` == undefined ? 0 : d`${item}.getNote.payload.id`;    
    const [title, setTitle] = useState(d`${item}.getNote.payload.title`);
    const [text, setText] = useState(d`${item}.getNote.payload.text`);
    
    return (
        <Container className='container-wrap' style={{ width: '700px' }}>
            <h1 className="text-center"> {t('EditPage.Head')}</h1>
            <Form>
                <Form.Group controlId="formNameOrganization">
                    <Form.Label>{t('EditPage.Title')}</Form.Label>
                    <Form.Control value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder={t('EditPage.Placeholder')} />
                </Form.Group>

                <Form.Group controlId="formAddressOrganization">
                    <Form.Label>{t('EditPage.Text')}</Form.Label>
                    <Form.Control value={text} onChange={e => setText(e.target.value)} as="textarea" rows="15" />
                </Form.Group>

                <Button variant="outline-secondary" onClick={e => {
                    onNote && typeof onNote === 'function' && onNote(title, text, idNote)
                }}
                    disabled={!title || !text}
                >{t('EditPage.Button')}</Button>
            </Form>
        </Container>
    )

}

const ConnectedCreateNoteForm = connect(null, { onNote: actionEditNote })(EditNote);


const App = () =>
    <>
        <ConnectedCreateNoteForm />
    </>

export default App;

