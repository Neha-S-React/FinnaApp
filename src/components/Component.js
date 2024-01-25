import React, { Fragment } from "react";
import { useDrag } from "react-dnd";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
const ElementComponent = ({ name, type }) => {
  const [, drag] = useDrag({
    type: type,
    item: { name },
  });
  return (
    <ListItem ref={drag}>
      <ListItemButton>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
};
export default ElementComponent;
