import React from "react";

import { Typography } from "@bigbinary/neetoui/v2";
import PropTypes from "prop-types";

const CardBody = ({ body }) => {
  return <Typography style="body2">{body}</Typography>;
};

CardBody.propTypes = {
  body: PropTypes.string
};

export default CardBody;
