import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

import { Switch, Route } from "react-router-dom";

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import NoteList from "../Pages/NoteList";
import CreateNote from "../Pages/CreateNote";
import EditNote from "../Pages/EditNote";
import NoteById from "../Pages/NoteById";


function Header() {

    const { t } = useTranslation();

    function handleClick(lang) {
        i18next.changeLanguage(lang)
    }

    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        Notes
                        </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="ml-auto">
                            <Nav.Link className="ml-6" href="/"> {t('Navbar.Home')} </Nav.Link>
                            <Nav.Link className="ml-6" href="/cteate-note">{t('Navbar.Create')}</Nav.Link>
                            <Button variant="info" onClick={()=>handleClick('en')}>en</Button>
                            <Button variant="info" onClick={()=>handleClick('ru')}>ru</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <Switch >
                <Route exact path="/" component={NoteList} />
                <Route exact path="/cteate-note" component={CreateNote} />
                <Route exact path="/notes/:id" component={NoteById} />
                <Route exact path="/edite-note/:id" component={EditNote} />

            </Switch>
        </>
    );

}

export default Header;
