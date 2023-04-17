import { useEffect } from "react";
import { useDispatch } from "react-redux";

// Components
import { Header } from "./components/Header";
import { Email } from "./components/Email";

// Actios
import { addUser } from "./redux/userSlice";

import "./App.css";

function App() {
  // Accedemos al dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) =>
        // Disparamos a la acción que actualiza el state
        dispatch(addUser(data))
      )
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <Header />
      <Email />
    </div>
  );
}

export default App;
