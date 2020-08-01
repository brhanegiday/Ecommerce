import React from "react";

function Title({ name, title }) {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-5 text-center text-title">
        <h1 className=" font-weight-bold ">
          {name}
          <strong className="text-blue mx-4">{title}</strong>
        </h1>
      </div>
    </div>
  );
}

export default Title;
