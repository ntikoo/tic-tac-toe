import React from "react";
import { useState } from "react";

const Player = ({ name, symbol, isActive, onChangeName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  const handleEditClick = () => {
    setIsEditing((prevState) => !prevState);
    if (isEditing) {
      onChangeName(symbol, editedName);
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    setEditedName(e.target.value);
  };
  return (
    <li className={isActive ? "active" : null}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{editedName}</span>
        ) : (
          <input
            type="text"
            value={editedName}
            onChange={(e) => handleChange(e)}
            required
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
