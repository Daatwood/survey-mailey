import React from "react";

export default ({ input, label, meta: { active, error, touched } }) => {
  return (
    <div>
      <label>{label}</label>

      <input
        {...input}
        style={{
          marginBottom: "5px",
          borderBottomColor: `${!active && touched && error ? "red" : "green"}`
        }}
      />
      <span className="red-text helper-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </span>
    </div>
  );
};
