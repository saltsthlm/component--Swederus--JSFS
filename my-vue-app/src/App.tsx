import React, { useState } from "react";
import Button from "./components/button/button";

const App: React.FC = () => {
  const [formData, setFormData] = useState<string>("");
  const [submittedData, setSubmittedData] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (formData.trim() === "") {
      alert("Please enter some data.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setSubmittedData(formData);
      setFormData("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Reusable Button Component with Form</h1>

      {}
      <form onSubmit={handleFormSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={formData}
          onChange={handleInputChange}
          placeholder="Enter some data"
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <Button
          type="submit"
          disabled={isLoading}
          style={{ backgroundColor: "#28a745" }}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </Button>
      </form>

      {}
      {submittedData && (
        <div>
          <h2>Submitted Data:</h2>
          <p>{submittedData}</p>
        </div>
      )}

      {}
      <div style={{ marginTop: "20px" }}>
        <h2>Other Button Examples:</h2>
        <Button onClick={() => alert("Button Clicked!")}>Click Me</Button>
        <Button style={{ marginLeft: "10px" }}>Normal Button</Button>
        <Button disabled style={{ marginLeft: "10px" }}>
          Disabled
        </Button>
      </div>
    </div>
  );
};

export default App;
