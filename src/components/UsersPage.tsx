import axios from "axios";
import { FC, useEffect, useState } from "react";
import { IUser } from "../types/types";
import { Card, CardVariant } from "./Card";
import EventsExample from "./EventsExample";
import List from "./List";
import { UserItem } from "./UserItem";
import { useNavigate } from "react-router-dom";

const UsersPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const { data } = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(data);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
      <EventsExample />
      <Card
        onClick={(num) => console.log("click", num)}
        variant={CardVariant.primary}
        width="200px"
        height="200px"
      >
        <button>Button</button>
      </Card>
      <List
        items={users}
        renderItem={(user: IUser) => (
          <UserItem
            user={user}
            key={user.id}
            onClick={(user) => navigate("/users/" + user.id)}
          />
        )}
      />
    </div>
  );
};

export default UsersPage;
