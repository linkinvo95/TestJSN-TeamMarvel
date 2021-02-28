import React from "react";
import { Card, Image } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { useHistory } from "react-router-dom";
import { USER_ROUTE } from "../utils/consts";

const UserItem = ({ user }) => {
  const history = useHistory();

  return (
    <Col
      md={3}
      className="mt-3"
      onClick={() => history.push(USER_ROUTE + "/" + user.id)}
    >
      <Card style={{ width: 160, cursor: "pointer" }} border={"light"}>
        <Image width={160} height={160} src={process.env.REACT_APP_API_URL + user.img} />
        <div className="mt-1">
          <div>Nickname: {user.nickname}</div>
          <div>
            <div>Real name: {user.real_name}</div>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default UserItem;
