import React from "react";

const ListGroup = (props) => {
  console.log(props);
  const styles = ["Lager", "Stout", "Ale"];

  return (
    <ul className="list-group">
      {styles.map((style) => (
        <li
          className={
            props.selectedStyle === style
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => props.onStyleSelect(style)}
        >
          {style}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
