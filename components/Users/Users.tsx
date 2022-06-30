import React, { useState } from "react";
import { useGetUsersQuery } from "../../store/users/users.api";
import { IUser } from "../../store/users/user.types";

const Users = () => {
  const [limit, setLimit] = useState(1);
  const { data, error, isFetching } = useGetUsersQuery(limit);

  const onClick = () => {
    setLimit((prevState) => prevState + 1);
  };

  return (
    <>
      {error && "ERROR"}
      {data?.map((item: IUser) => {
        return (
          <p
            key={item.username}
          >{`${item.name.firstname} ${item.name.lastname}`}</p>
        );
      })}
      {isFetching && "Loading"}
      {limit <= 10 && (
        <button type="button" onClick={onClick}>
          More users
        </button>
      )}
    </>
  );
};

export default Users;
