import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { SelectedElementContext } from "../SelectedElementContext";

const Exercise = ({ exercise, deleteExercise, setSelectedElement }) => {
  return (
    <tr>
      <td>{exercise.username}</td>
      <td>{exercise.description}</td>
      <td>{exercise.duration}</td>
      <td>{exercise.date.substring(0, 10)}</td>
      <td>
        <Link
          onClick={() => {
            setSelectedElement(exercise);
          }}
          className="btn btn-primary"
          to={"/edit/" + exercise._id}
        >
          Edit
        </Link>{" "}
        <button
          className="btn btn-danger"
          onClick={() => {
            deleteExercise(exercise._id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

function ExerciseList() {
  const [exercises, setExercises] = useState([]);
  const { setSelectedElement } = useContext(SelectedElementContext);

  useEffect(() => {
    axios
      .get("/exercises")
      .then((res) => {
        setExercises(res.data);
      })
      .catch((err) => {
        console.log(1, err);
      });
  }, []);

  const deleteExercise = (id) => {
    axios
      .delete("/exercises/" + id)
      .then((res) => {
        console.log(res.data);
        setExercises(exercises.filter((exercise) => exercise._id !== id));
      })
      .catch((err) => {
        console.log(1, err);
      });
  };

  return (
    <div>
      <h3>Logged Exercises</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise) => (
            <Exercise
              exercise={exercise}
              deleteExercise={deleteExercise}
              key={exercise._id}
              setSelectedElement={setSelectedElement}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExerciseList;
