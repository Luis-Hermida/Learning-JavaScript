const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// Define paths
const staticFilesPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Set handlebars engine
app.set("view engine", "hbs");

// Set views location
app.set("views", viewsPath);

// Set handlebards partials
hbs.registerPartials(partialsPath);

// Use static directory to serve
app.use(express.static(staticFilesPath));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Luis Hermida",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Luis Hermida",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    helpText: "Help Text Template",
    name: "Luis Hermida",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    location: "Monterrey",
    description: "Partly cloudy",
    temperature: 18,
    feelsLike: 18,
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "Error 404",
    errorMessage: "Help article not found.",
    name: "Luis Hermida",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "Error 404",
    errorMessage: "Page not found.",
    name: "Luis Hermida",
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});
