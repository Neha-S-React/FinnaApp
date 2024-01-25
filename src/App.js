import { Button } from "@mui/material";
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import toast, { Toaster } from 'react-hot-toast';
import "./App.css";
import CanvasComponent from "./components/Canvas";
import ElementComponent from "./components/Component";
function generateRandomId() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomId = "";

  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
  }

  return randomId;
}

const App = () => {
  const [dragElement, setDragElement] = useState([]);

  const handleDrop = (text) => {
    setDragElement([...dragElement, { id: generateRandomId(), text: text }]);
  };
  const handleDelete = (id) => {
    const updatedDragElement = dragElement.filter(
      (element) => String(element.id) !== String(id.id)
    );
    setDragElement(updatedDragElement);
  };


  const notify = () => toast.success('Successfully Added !');
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app-container">
       
        <div className="sidebar">
          <ElementComponent type={"BUTTON"} name={"Button"} />
          <ElementComponent type={"HEADING"} name={"Heading"} />
          <ElementComponent type={"PARAGRAPH"} name={"Paragraph"} />
        </div>
        
        <CanvasComponent
          dragElement={dragElement}
          onDrop={handleDrop}
          onDelete={handleDelete}
          />
         
      </div>
        <div style={{marginLeft:"95%"}}>
        <Button variant="contained" color="error" onClick={notify} >Save</Button>
        <Toaster position="bottom-right" />
        </div>
    </DndProvider>
  );
};

export default App;
