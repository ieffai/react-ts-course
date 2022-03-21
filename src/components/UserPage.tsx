import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { IUser } from "../types/types";
import { useParams, useNavigate } from "react-router-dom";

const UserPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<{ id?: string }>();
  const navigate = useNavigate();
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const { data } = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users/" + params.id
      );
      setUser(data);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
      <button onClick={() => navigate("/users")}>Back</button>
      <h1>Page of user {user?.name}</h1>
      <div>
        {user?.email}
        {user?.name}
        {user?.address.zipcode}
        {user?.address.city} {user?.address.street}
      </div>
    </div>
  );
};

export default UserPage;
