import React from "react";

import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";

const Card = ({ title, body, status }) => {
  return (
    <div className="flex flex-col neeto-ui-border-gray-400 neeto-ui-shadow-xs border p-3 space-y-2 my-2  ">
      <CardHeader title={title} />
      <CardBody body={body} />
      <CardFooter status={status} />
    </div>
  );
};

export default Card;
