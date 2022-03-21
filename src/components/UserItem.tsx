import React, { FC } from "react";
import { IUser } from "../types/types";

interface UserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

export const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
  return (
    <div
      onClick={() => onClick(user)}
      style={{ padding: 15, border: "2px solid red" }}
    >
      {user.id}. {user.name} lives in city {user.address.city} on the street{" "}
      {user.address.street}.
    </div>
  );
};
