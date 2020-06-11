import React, { useState } from "react";

export default ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => setSearchTerm(event.target.value);

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmit(searchTerm);
    }
  };

  return (
    <div className="field">
      <br />
      <p className="control   has-icons-right">
        <input
          className="input is-info"
          type="text"
          value={searchTerm}
          onChange={handleChange}
          onKeyPress={onKeyPress}
          placeholder="Search"
        />

        <span className="icon is-small is-right">
          <i className="fas fa-search"></i>
        </span>
      </p>
    </div>
  );
};
