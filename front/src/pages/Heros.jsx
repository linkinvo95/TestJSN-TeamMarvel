import React, { useContext, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import UserList from '../components/UserList'
import { observer } from 'mobx-react-lite'
import { Context } from '..'
import { fetchUsers } from '../http/userAPI'


const Heros = observer(() => {
    const {user} = useContext(Context)

    useEffect(() => {
        fetchUsers().then(data => user.setUsers(data.rows))
    }, [])

    return (
        <Container>
            <Row>
                <Col md={3}>
                </Col>
                <Col md={9}>
                    <UserList/>
                </Col>
            </Row>
        </Container>
    )
})

export default Heros