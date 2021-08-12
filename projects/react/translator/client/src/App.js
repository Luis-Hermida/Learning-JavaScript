import React, { useState } from "react";
import "./App.css";
import Field from "./components/field";
import Languages from "./components/languages";
import Translate from "./components/translate";

function App() {
  const [language, setLanguage] = useState("ru");
  const [text, setText] = useState("");

  return (
    <div className="container">
      <Field label="Enter English text" onChange={setText} value={text} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}

export default App;
