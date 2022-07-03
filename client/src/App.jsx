import { useState } from "react";
import {
  Footer,
  Welcome,
  Navbar,
  Services,
  Transactions,
  Loader,
} from "./components";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};

export default App;
