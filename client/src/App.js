import React from "react";
import Login from "./Login";
import Register from "./Register"

const user=true;
function App() {
  return (
    <div className="App">
      {user ? <Login></Login> : <Register></Register>}
    </div>
  );
}

export default App;
