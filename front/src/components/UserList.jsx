import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import Row from "react-bootstrap/Row";
import { Context } from "..";
import UserItem from "./UserItem";

const UserList = observer(() => {
  const { user } = useContext(Context);
  
  return (
    <Row className="d-flex">
      {user.users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </Row>
    
  );
});

export default UserList;


