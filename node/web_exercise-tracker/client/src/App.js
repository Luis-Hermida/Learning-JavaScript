import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { SelectedElementContext } from "./SelectedElementContext";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import ExercisesList from "./components/ExerciseList";
import EditExercise from "./components/EditExercise";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";

function App() {
  const [selectedElement, setSelectedElement] = useState(undefined);

  return (
    <SelectedElementContext.Provider
      value={{ selectedElement, setSelectedElement }}
    >
      <Router>
        <div className="container">
          <Navbar />
          <br />
          <Route path="/" exact>
            <ExercisesList />
          </Route>
          <Route path="/edit/:id">
            <EditExercise selectedElement={selectedElement} />
          </Route>
          <Route path="/create" component={CreateExercise} />
          <Route path="/user" component={CreateUser} />
        </div>
      </Router>
    </SelectedElementContext.Provider>
  );
}

export default App;
