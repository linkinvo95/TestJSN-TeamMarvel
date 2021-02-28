import React, { useContext, useState } from 'react'
import Modal from "react-bootstrap/Modal"
import { Button, Form } from "react-bootstrap"
import {Context} from "../../index";
import { createUser } from '../../http/userAPI';

const CreateUser = ({show, onHide}) => {
    const {user} = useContext(Context)

    const [nickname, setNickname] = useState('')
    const [real_name, setRealName] = useState('')
    const [superpowers, setSuperpowers] = useState('')
    const [origin_description, setOriginDescription] = useState('')
    const [catch_phrase, setCatchPhase] = useState('')
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    const selectFile = e => {
      setFile(e.target.files[0])
    }

    const addUser = () => {
      const formData = new FormData()
      formData.append('nickname', nickname)
      formData.append('real_name', real_name)
      formData.append('superpowers', superpowers)
      formData.append('origin_description', origin_description)
      formData.append('catch_phrase', catch_phrase)
      formData.append('img', file)
      formData.append('info', JSON.stringify(info))
      createUser(formData).then(data => onHide())
    }

    return (
        <Modal 
        show={show} 
        onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>ADD Info Hero</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
            <Form.Control 
            className="mt-3"
            value={nickname}
            onChange={e => setNickname(e.target.value)}
                placeholder={"Lead the hero's nickname"}
                />
                 <Form.Control 
                 value={real_name}
            onChange={e => setRealName(e.target.value)}

                 className="mt-3"
                placeholder={"Lead the hero's real name"}
                />
                 <Form.Control 
                 className="mt-3"
                 value={superpowers}
            onChange={e => setSuperpowers(e.target.value)}

                placeholder={"Lead the hero's superpowers"}
                />
                 <Form.Control 
                 className="mt-3"
                 value={origin_description}
            onChange={e => setOriginDescription(e.target.value)}
                placeholder={"Lead the hero's origin description"}
                />
                 <Form.Control 
                 className="mt-3"
                 value={catch_phrase}
            onChange={e => setCatchPhase(e.target.value)}
                placeholder={"Lead the hero's catch phase"}
                />
                <Form.Control 
                className="mt-3"
                type="file"
                onChange={selectFile}
                />
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={onHide}>
            Close
          </Button>
          <Button variant="outline-success" onClick={addUser}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default CreateUser