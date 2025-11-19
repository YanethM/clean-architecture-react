import React, { useEffect } from "react";
import { useUserStore } from "../../application/store/userStore";
import { UserList } from "../components/UserList";

export const HomePage = () => {
  const fetchUsers = useUserStore((state) => state.fetchUsers);
  console.log(fetchUsers);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div>
      <UserList />
    </div>
  );
};
