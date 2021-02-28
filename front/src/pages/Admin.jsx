import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreatUser from "../components/modals/CreateUser";

const Admin = () => {
  const [userVisible, setUserVisible] = useState(false);

  return (
    <Container className="d-flex flex-column">
      <h1>Hero Creation</h1>
      <Button
        onClick={() => setUserVisible(true)}
        variant={"outline-dark"}
      >
         HERO
      </Button>

      <CreatUser show={userVisible} onHide={() => setUserVisible(false)} />
    </Container>
  );
};

export default Admin;
