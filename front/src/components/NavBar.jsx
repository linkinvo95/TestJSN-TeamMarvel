import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, HEROS_ROUTE } from '../utils/consts';
import {Button} from "react-bootstrap"
import Container from "react-bootstrap/Container"
import { observer } from 'mobx-react-lite';
import {useHistory} from 'react-router-dom'

const NavBar = observer(() => {

    const history = useHistory()
    return (
       <Navbar bg="dark" variant="dark">
           <Container>
           <NavLink style={{color:'white'}} to={HEROS_ROUTE}>SuperHeros</NavLink>
           <Nav className="ml-auto" style={{color:'white'}}>
               <Button 
               variant={"outline-light"} 
               onClick={() => history.push(ADMIN_ROUTE)}>
                   Add
               </Button>
           </Nav>

           </Container>
       </Navbar>
    )
})

export default NavBar