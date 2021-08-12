import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function EditExercise({ selectedElement }) {
  console.log(selectedElement);
  const [username, setUsername] = useState(selectedElement.username);
  const [description, setDescription] = useState(selectedElement.description);
  const [duration, setDuration] = useState(parseInt(selectedElement.duration));
  const [date, setDate] = useState(new Date(selectedElement.date));
  const [users, setUsers] = useState([]);
  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    axios
      .get("/users")
      .then((res) => {
        if (res.data.length > 0) {
          setUsers(res.data.map((user, index) => user.username));
        }
      })
      .catch((err) => {
        console.log(1, err);
      });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const exercise = {
      username,
      description,
      duration,
      date,
    };
    axios
      .post("/exercises/update/" + selectedElement._id, exercise)
      .then((res) => {
        console.log(res.data);
        setRedirect("/");
      })
      .catch((err) => {
        console.log(1, err);
      });
    console.log(exercise);
  };

  if (redirect) {
    return <Redirect to={redirect} />;
  } else {
    return (
      <div>
        <h3>Edit Exercise Log</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select
              required
              className="form-control"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            >
              {users.map(function (user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Duration (in minutes): </label>
            <input
              type="text"
              className="form-control"
              value={duration}
              onChange={(e) => {
                setDuration(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={date}
                onChange={(date) => {
                  setDate(date);
                }}
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Exercise Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default EditExercise;
