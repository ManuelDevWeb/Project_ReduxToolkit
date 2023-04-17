import { useSelector } from "react-redux";

const Header = () => {
  // Accedemos al state de la app (lo que va despues del punto, es el nombre del state dentro del store)
  const user = useSelector((state) => state.user);

  return (
    <header>
      <h1>Redux Toolkit</h1>
      <ul>
        <li>Name: {user.name}</li>
        <li>Email: {user.email}</li>
        <li>Username: {user.username}</li>
      </ul>
    </header>
  );
};

export { Header };
