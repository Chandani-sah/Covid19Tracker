import React from "react";
import { Typography, makeStyles, CardContent, Grid } from "@material-ui/core";
import Card from "./Card/Card";
import CardHeader from "./Card/CardHeader";
import GridItem from "./Grid/GridItem";
import CardFooter from "./Card/CardFooter";
import CountUp from "react-countup";
import moment from "moment";

import styles from "./Cards.module.css";

var styles2 = {
  cardTitle: {
    marginTop: "0",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles2);

const Cards = ({
  data: { confirmed, active, deaths, recovered, state, lastupdatedtime },
}) => {
  const classes = useStyles();
  if (!confirmed) {
    return (
      <p style={{ textAlign: "center", marginTop: "2%" }}>
        Select any state to view COVID-19 status
      </p>
    );
  }
  return (
    <div className={styles.container}>
      <Grid container>
        <GridItem xs={12} md={3} sm={12}>
          <Card>
            <CardHeader color="rose">
              <h4 className={classes.cardTitle}>Confirmed</h4>
            </CardHeader>
            <CardContent>
              <Typography variant="h5">
                <CountUp start={0} end={confirmed} duration={3} separator="," />
              </Typography>
            </CardContent>
            <CardFooter chart>
              <div className={classes.stats}>
                <Typography color="textSecondary">
                  Last Updated:{" "}
                  {moment(lastupdatedtime, "DD-MM-YYYY").format("MMM Do YYYY")}
                </Typography>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} md={3} sm={12}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitle}>Active</h4>
            </CardHeader>
            <CardContent>
              <Typography variant="h5">
                <CountUp start={0} end={active} duration={3} separator="," />
              </Typography>
            </CardContent>
            <CardFooter chart>
              <div className={classes.stats}>
                <Typography color="textSecondary">
                  Last Updated:{" "}
                  {moment(lastupdatedtime, "DD-MM-YYYY").format("MMM Do YYYY")}
                </Typography>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} md={3} sm={12}>
          <Card>
            <CardHeader color="success">
              <h4 className={classes.cardTitle}>Recovered</h4>
            </CardHeader>
            <CardContent>
              <Typography variant="h5">
                <CountUp start={0} end={recovered} duration={3} separator="," />
              </Typography>
            </CardContent>
            <CardFooter chart>
              <div className={classes.stats}>
                <Typography color="textSecondary">
                  Last Updated:{" "}
                  {moment(lastupdatedtime, "DD-MM-YYYY").format("MMM Do YYYY")}
                </Typography>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} md={3} sm={12}>
          <Card>
            <CardHeader color="danger">
              <h4 className={classes.cardTitle}>Deaths</h4>
            </CardHeader>
            <CardContent>
              <Typography variant="h5">
                <CountUp start={0} end={deaths} duration={3} separator="," />
              </Typography>
            </CardContent>
            <CardFooter chart>
              <div className={classes.stats}>
                <Typography color="textSecondary">
                  Last Updated:{" "}
                  {moment(lastupdatedtime, "DD-MM-YYYY").format("MMM Do YYYY")}
                </Typography>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Cards;
