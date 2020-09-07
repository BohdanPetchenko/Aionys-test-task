import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next';

import actionCreateNote from '../Actions/action-create-note'


const CreateNote = ({ onNote }) => {
    const { t } = useTranslation();

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    
    return (
        <Container className='container-wrap' style={{ width: '700px' }}>
            <h1 className="text-center">{t('CreatePage.Head')}</h1>
            <Form>
                <Form.Group controlId="formNameOrganization">
                    <Form.Label>{t('CreatePage.Title')}</Form.Label>
                    <Form.Control value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder={t('CreatePage.Placeholder')} />
                </Form.Group>

                <Form.Group controlId="formAddressOrganization">
                    <Form.Label>{t('CreatePage.Text')}</Form.Label>
                    <Form.Control value={text} onChange={e => setText(e.target.value)} as="textarea" rows="15" />
                </Form.Group>

                <Button variant="outline-secondary" onClick={e => {
                    onNote && typeof onNote === 'function' && onNote(title, text)
                }}
                    disabled={!title || !text}
                >{t('CreatePage.Button')}</Button>
            </Form>
        </Container>
    )

}

const ConnectedCreateNoteForm = connect(null, { onNote: actionCreateNote })(CreateNote);


const App = () =>
    <>
        <ConnectedCreateNoteForm />
    </>

export default App;

