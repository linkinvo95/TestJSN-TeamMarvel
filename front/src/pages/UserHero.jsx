import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row, Card, Button } from "react-bootstrap";
import {useParams} from "react-router-dom"
import { fetchOneUser } from "../http/userAPI";


const UserHero = () => {
  const [user, setUser] = useState({info: []})
const {id} = useParams()

  useEffect(() => {
    fetchOneUser(id).then(data => setUser(data))
  }, [])

  return (
    <Container className="mt-3">
      <h2>{user.nickname}</h2>
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={process.env.REACT_APP_API_URL + user.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flax flex-column align-items-center">
            
            <div className="d-flex align-items-center justify-content-center">
              <Image width={300} height={300} src={process.env.REACT_APP_API_URL + user.img} />
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
          >
            <h3>Property:</h3>
            <div className="d-flex flex-column">
            <Button variant={"outline-warning"}>Edit Hero</Button>
            <Button variant={"outline-danger"}>Delet Hero</Button>
            </div>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Info</h1>
        {user.info.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
              padding: 10,
            }}
          >
            <Col>
              Description:
              <br />
              {info.origin_description}:
            </Col>
            <Col>
              Superpowers:
              <br />
              {info.superpowers}
            </Col>
            <Col>
              Catch phrase:
              <br />
              {info.catch_phrase}
            </Col>
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default UserHero;
