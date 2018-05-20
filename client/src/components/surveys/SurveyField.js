import React from "react";

export default ({ input, label, meta: { active, error, touched } }) => {
  return (
    <div>
      <label className="indigo-text text-lighten-2">{label}</label>

      <input
        {...input}
        className="black-text"
        style={{
          marginBottom: "5px",
          borderBottomColor: `${!touched ? "gray" : error ? "red" : "green"}`
        }}
      />
      <span className="red-text helper-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </span>
    </div>
  );
};
