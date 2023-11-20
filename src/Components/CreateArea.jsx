import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();

    // Check if either title or content is empty
    if (note.title.trim() === "" && note.content.trim() === "") {
      setErrorMessage("Please enter a title or content.");
      return;
    }

    // Clear the error message
    setErrorMessage("");

    // Pass the note to the parent component
    props.onAdd(note);

    // Clear the input fields
    setNote({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note"
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
}

export default CreateArea;
