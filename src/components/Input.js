import React from "react";

export default function Input({ handleChange, value, title, name, color }) {
  return (
    <div>
      <label className="sidebar-label-container">
        <input type="radio" onChange={handleChange} value={value} name={name} />
        <span className="checkmark" style={color}></span> {title}
      </label>
    </div>
  );
}
