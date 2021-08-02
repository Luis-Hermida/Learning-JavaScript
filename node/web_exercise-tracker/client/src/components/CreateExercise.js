import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CreateExercise() {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);
  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    axios
      .get("/users")
      .then((res) => {
        if (res.data.length > 0) {
          setUsers(res.data.map((user, index) => user.username));
          setUsername(res.data[0].username);
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
      .post("/exercises/add", exercise)
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
        <h3>Create New Exercise Log</h3>
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

export default CreateExercise;
