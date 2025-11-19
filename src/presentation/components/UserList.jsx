import React from "react";
import { useUserStore } from "../../application/store/userStore";

export const UserList = () => {
  const { users, loading, error } = useUserStore();

  if (loading) return <div className="loading">Cargando usuarios</div>;
  if (error) return <div className="loading">Error: {error}</div>;
  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p><strong>Correo</strong>{user.email}</p>
            <p><strong>Nombre usuario</strong>{user.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
