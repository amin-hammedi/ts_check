import React, { useEffect } from "react";
import "./App.css";
import Car from "./components/Car";
const App: React.FC = () => {
  useEffect(() => {
    const myCar = new Car("koenigsegg", "Jesko", 2019);
    myCar.start();
  }, []);
  return (
    <div className="App">
      <h1>open console</h1>
    </div>
  );
};
export default App;
