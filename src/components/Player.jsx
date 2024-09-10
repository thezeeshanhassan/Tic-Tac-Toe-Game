import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleClick(str) {
    str == "edit" ? setIsEditing(true) : setIsEditing(false);
    if(isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {isEditing == false && (
            <span className="player-name">{playerName}</span>
          )}
          {isEditing == true && (
            <input
              defaultValue={name}
              value={playerName}
              className="player-name"
              onChange={handleChange}
            ></input>
          )}
          <span className="player-symbol">{symbol}</span>
        </span>

        {isEditing == false && (
          <button onClick={() => handleClick("edit")}>Edit</button>
        )}
        {isEditing == true && (
          <button onClick={() => handleClick("save")}>Save</button>
        )}
      </li>
    </>
  );
}
