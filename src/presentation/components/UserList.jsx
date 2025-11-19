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
          <div key={user.id}>``
            <h3>{user.fullname}</h3>
            <p><strong>Correo</strong>{user.email}</p>
            <p><strong>Estado</strong>{user.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
