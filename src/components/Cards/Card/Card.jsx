import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "../../../assets/jss/dashboard/components/cardStyle";

const useStyles = makeStyles(styles);

export default function Card(props) {
  const classes = useStyles();
  const { className, children } = props;
  const cardClasses = classNames({
    [classes.card]: true,
    [className]: className !== undefined,
  });
  return <div className={cardClasses}>{children}</div>;
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
