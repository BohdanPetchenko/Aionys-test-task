import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next';

import actionEditNote from '../Actions/action-edit-note'
import d from '../helpers/d'

const EditNote = (props) => {
    const { t } = useTranslation();
    debugger
       
    const [title, setTitle] = useState(d`${props}.noteById.title`);
    const [text, setText] = useState(d`${props}.noteById.text`);
    
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
                    props.onNote && typeof props.onNote === 'function' && props.onNote(title, text, d`${props}.noteById.id`)
                }}
                    disabled={!title || !text}
                >{t('EditPage.Button')}</Button>
            </Form>
        </Container>
    )

}

function mapStateToProps(state) {
    debugger
    return {
        noteById: state.noteReducer.get("noteById"),
        
    };
}

const ConnectedCreateNoteForm = connect(mapStateToProps, { onNote: actionEditNote })(EditNote);


const App = () =>
    <>
        <ConnectedCreateNoteForm />
    </>

export default App;

