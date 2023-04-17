import { useSelector, useDispatch } from "react-redux";

// Actions
import { changeEmail } from "../redux/userSlice";

const Email = () => {
  // Accedemos al dispatch
  const dispatch = useDispatch();

  // Accedemos al state de la app (lo que va despues del punto, es el nombre del state dentro del store)
  const user = useSelector((state) => state.user);

  const handleChange = (e) => {
    // Disparamos a la acción que actualiza el state
    dispatch(changeEmail(e.target.value));
  };

  return (
    <input
      type="email"
      value={user.email}
      placeholder="Email"
      onChange={handleChange}
    />
  );
};

export { Email };
