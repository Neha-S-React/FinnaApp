import { Button, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import { useDrop } from "react-dnd";

const elements = (type) => {
  switch (type) {
    case "Button":
      return (
        
        <Button variant="contained" contentEditable={true}>
          Button
        </Button>
      
      );
    case "Heading":
      return (
       
        <Typography variant="h3" contentEditable={true} component={"h3"}>
          Heading
        </Typography>
       
      );
    case "Paragraph":
      return (
        

        <Typography variant="h6" contentEditable={true} component={"h6"}>
          Paragraph
        </Typography>
       
      );
    default:
      return <p>Something went wrong</p>;
  }
};

const CanvasComponent = ({ dragElement, onDrop, onDelete }) => {
  const [hoveredElement, setHoveredElement] = useState(null);
  const [size, setSize] = useState({ width: 200, height: 200 });

  const onResize = (event, { size }) => {
    setSize(size);
  };


  const [, drop] = useDrop({
    accept: ["BUTTON", "HEADING", "PARAGRAPH"],
    drop: (item) => onDrop(item.name),
  });

  const handleMouseEnter = (index) => {
    setHoveredElement(index);
  };

  const handleMouseLeave = () => {
    setHoveredElement(null);
  };
  console.log(dragElement)
  
  return (
    
    <div ref={drop} className="canvas">
      {dragElement.map((ele, index) => (
        
        
        <Fragment key={ele.id}>
          <div
            onMouseEnter={() => handleMouseEnter(ele.id)}
            onMouseLeave={handleMouseLeave}
            style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center'}}
          >
            {elements(ele.text)}

            {hoveredElement === ele.id && (
              <Button
                onClick={() => onDelete(ele)}
                color="error"
                variant="contained"
                style={{height: 36}}
              >
                Delete
              </Button>
            )}
          </div>
        </Fragment>
      
       
      ))}
    </div>


  );
};

export default CanvasComponent;
