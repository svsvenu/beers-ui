import React from "react";

const ListGroup = (props) => {
  const styles = ["Lager", "stout", "Ale"];

  return (
    <ul className="list-group">
      {styles.map((style) => (
        <li
          key={style}
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
